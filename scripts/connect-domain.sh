#!/usr/bin/env bash
# Sacred Tree Service -- one-shot domain connection
# Run on the Mac that's logged into GoDaddy + Vercel.
# Paste the whole thing into Terminal and press Enter.

set -u

PROJECT="sacred-tree-website"
DOMAIN="sacredtreeservice.com"
A_VALUE="76.76.21.21"
CNAME_VALUE="cname.vercel-dns.com"

bold()   { printf "\033[1m%s\033[0m\n" "$*"; }
green()  { printf "\033[32m%s\033[0m\n" "$*"; }
yellow() { printf "\033[33m%s\033[0m\n" "$*"; }
red()    { printf "\033[31m%s\033[0m\n" "$*"; }
hr()     { printf '\n------------------------------------------------------------\n\n'; }

clear
bold "SACRED TREE SERVICE -- DOMAIN CONNECTION"
hr

# ---------- 1. Install Vercel CLI ----------
if ! command -v vercel >/dev/null 2>&1; then
  bold "Step 1: Installing Vercel CLI..."
  if ! command -v npm >/dev/null 2>&1; then
    if command -v brew >/dev/null 2>&1; then
      brew install node
    else
      red "Need Node.js first. Opening nodejs.org -- install the LTS, then re-run this script."
      open "https://nodejs.org/"
      exit 1
    fi
  fi
  npm install -g vercel
else
  green "Step 1: Vercel CLI already installed."
fi

# ---------- 2. Vercel login ----------
hr
bold "Step 2: Logging into Vercel"
echo "A browser tab will open. Click 'Verify' to confirm, then come back here."
echo ""
if ! vercel whoami >/dev/null 2>&1; then
  vercel login
fi
green "Logged in as: $(vercel whoami 2>/dev/null)"

# ---------- 3. Add domain to project ----------
hr
bold "Step 3: Attaching domains to '$PROJECT'"
vercel domains add "$DOMAIN" "$PROJECT" 2>&1 | sed 's/^/  /' || true
vercel domains add "www.$DOMAIN" "$PROJECT" 2>&1 | sed 's/^/  /' || true
echo ""
yellow "If either of the above complained ('not found', 'wrong team', etc.),"
yellow "open the project domains page and click 'Add' there instead:"
echo "  https://vercel.com/dashboard"
echo ""

# ---------- 4. GoDaddy DNS instructions ----------
hr
bold "Step 4: Update DNS at GoDaddy"
echo ""
yellow "Opening GoDaddy DNS page in your browser..."
open "https://dcc.godaddy.com/control/dnsmanagement?domainName=$DOMAIN"
sleep 1

cat <<EOF

ADD / EDIT THESE TWO RECORDS:

  ====== RECORD 1 -- A record for the apex ======
    Type:  A
    Name:  @
    Value: $A_VALUE
    TTL:   1 Hour

  ====== RECORD 2 -- CNAME for www ======
    Type:  CNAME
    Name:  www
    Value: $CNAME_VALUE
    TTL:   1 Hour

If an A record for "@" already exists pointing at a GoDaddy parking IP
(76.76.21.61 or similar), EDIT that one -- don't add a duplicate.
If a CNAME for "www" already exists, EDIT that one.

EOF

red "DO NOT delete any of these (Gmail will break):"
echo "  - All MX records (aspmx.l.google.com, alt1..alt4)"
echo "  - TXT records starting with v=spf1"
echo "  - TXT records starting with google-site-verification="
echo "  - TXT _dmarc"
echo "  - Any TXT with name like google._domainkey or *_domainkey"
echo "  - CNAMEs for mail, calendar, drive (Google vanity URLs)"
echo ""
hr
read -rp "Press ENTER after you've SAVED both records in GoDaddy..."

# ---------- 5. Verify DNS ----------
hr
bold "Step 5: Verifying DNS propagation (5-60 min is normal)"
echo "Polling every 30 seconds. Ctrl-C to bail."
echo ""

ATTEMPTS=0
MAX_ATTEMPTS=120
while true; do
  ATTEMPTS=$((ATTEMPTS + 1))
  A_RESULT=$(dig +short @8.8.8.8 "$DOMAIN" A 2>/dev/null | head -1)
  CNAME_RESULT=$(dig +short @8.8.8.8 "www.$DOMAIN" CNAME 2>/dev/null | head -1)

  printf "  [%s] A @ = %-16s  CNAME www = %s\n" \
    "$(date +%H:%M:%S)" "${A_RESULT:-pending}" "${CNAME_RESULT:-pending}"

  if [[ "$A_RESULT" == "$A_VALUE" && "$CNAME_RESULT" == "${CNAME_VALUE}." ]]; then
    echo ""
    green "DNS is live and pointing at Vercel."
    break
  fi

  if [[ $ATTEMPTS -ge $MAX_ATTEMPTS ]]; then
    red "Still not propagated after 60 min. Double-check records in GoDaddy."
    exit 1
  fi
  sleep 30
done

# ---------- 6. Wait for HTTPS ----------
hr
bold "Step 6: Waiting for Vercel to issue the SSL cert..."
ATTEMPTS=0
while true; do
  ATTEMPTS=$((ATTEMPTS + 1))
  if curl -sf -o /dev/null --max-time 10 "https://$DOMAIN"; then
    echo ""
    green "https://$DOMAIN is LIVE."
    break
  fi
  printf "  [%s] SSL/site not ready yet...\n" "$(date +%H:%M:%S)"
  if [[ $ATTEMPTS -ge 30 ]]; then
    red "SSL is taking longer than usual. Check Vercel project domains page."
    break
  fi
  sleep 30
done

# ---------- 7. Done ----------
hr
green "ALL DONE. Opening the live site..."
open "https://$DOMAIN"
