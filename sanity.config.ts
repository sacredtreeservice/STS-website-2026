import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { sanityClient } from 'sanity:client';
import { schemaTypes } from './sanity/schemas';

const { projectId, dataset } = sanityClient.config();

export default defineConfig({
  name: 'sts-studio',
  title: 'Sacred Tree Service — Content Studio',
  projectId: projectId!,
  dataset: dataset!,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
