import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Project categories. Each one becomes a filter chip on /projects/.
export const TAGS = ['computer-vision', 'nlp-data', 'machine-learning', 'full-stack'] as const;
export type Tag = (typeof TAGS)[number];

export const TAG_LABELS: Record<Tag, string> = {
  'computer-vision': 'Computer Vision',
  'nlp-data': 'Data & NLP',
  'machine-learning': 'Machine Learning',
  'full-stack': 'Full-stack',
};

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tag: z.enum(TAGS),
    kind: z.string(), // e.g. "Course work", "Minor project"
    order: z.number().int(), // lower numbers come first
    summary: z.string(),
    status: z.string(),
    period: z.string().optional(), // e.g. "Jan 2026 – May 2026"
    stack: z.array(z.string()).min(1),
    featured: z.boolean().default(false),
    links: z.object({ repo: z.url().optional(), demo: z.url().optional() }).default({}),
    art: z.enum(['cbir', 'youtube', 'music', 'court', 'fraud']), // diagram in src/components/ProjectArt.astro
  }),
});

export const collections = { projects };
