import { readdir } from 'fs/promises';
import { parse_metadata } from '$lib/markdown';
import path from 'path';

interface ArticleMetadata {
	title: string;
	author: string;
	slug: string;
	date_published: Date;
	date_edited?: Date;
}

export const prerender = true;

const article_folder = './src/assets/blog/';

export async function load() {
	const article_names = await readdir(article_folder);

	const articles: ArticleMetadata[] = [];
	const parse_promises: Promise<ArticleMetadata | void>[] = [];

	article_names.forEach((article_name) => {
		parse_promises.push(
			parse_metadata(path.resolve(article_folder, article_name)).then(
				(metadata: ArticleMetadata) => {
					metadata.date_published = new Date(metadata.date_published);
					metadata.date_edited = metadata.date_edited ? new Date(metadata.date_edited) : undefined;
					articles.push(metadata);
				}
			)
		);
	});

	await Promise.all(parse_promises);

	return { articles: articles };
}
