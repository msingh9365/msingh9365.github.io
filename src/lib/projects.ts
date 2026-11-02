import { getCollection, type CollectionEntry } from 'astro:content';
import { TAG_LABELS } from '../content.config';

export type Project = CollectionEntry<'projects'>;

/** All projects, sorted by their `order` field. */
export async function allProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** The first four-digit year in a period such as "Jan 2026 – May 2026". */
export function yearOf(period?: string): string {
  return period?.match(/\b(19|20)\d{2}\b/)?.[0] ?? '';
}

export function tagLabel(tag: Project['data']['tag']): string {
  return TAG_LABELS[tag];
}
