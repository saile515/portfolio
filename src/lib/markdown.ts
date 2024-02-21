import { Marked } from 'marked';
import { readFile } from 'fs/promises';
import yaml from 'yaml';

const marked = new Marked();

marked.use({ gfm: true });

export async function parse_content(filename: string) {
	const file = await readFile(filename, { encoding: 'utf-8' });
	const matches = file.match(/-{3}\n[\s\S]*\n-{3}([\s\S]*)/);

	if (!matches) {
		return marked.parse(file);
	} else if (matches.length < 2) {
		return '';
	} else {
		return marked.parse(matches[1]);
	}
}

export async function parse_metadata(filename: string) {
	const file = await readFile(filename, { encoding: 'utf-8' });

	const metadata_match = file.match(/-{3}\n([\s\S]*)\n-{3}/);
	if (!metadata_match || metadata_match.length < 2) {
		return {};
	}

	return yaml.parse(metadata_match[1]);
}

export async function parse(filename: string) {
	const file = await readFile(filename, { encoding: 'utf-8' });

	let metadata: unknown;
	let content: string;
	const metadata_match = file.match(/-{3}\n([\s\S]*)\n-{3}([\s\S]*)/);
	if (!metadata_match || metadata_match.length < 2) {
		metadata = {};
		content = await marked.parse(file);
	} else {
		metadata = yaml.parse(metadata_match[1]);
		if (metadata_match.length < 3) {
			content = '';
		} else {
			content = await marked.parse(metadata_match[2]);
		}
	}

	return { metadata, content };
}
