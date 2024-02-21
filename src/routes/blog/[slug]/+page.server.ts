import { error } from "@sveltejs/kit";
import type { RouteParams } from "./$types";
import { parse } from "$lib/markdown";
import type { ArticleMetadata } from "../+page.server";

export const prerender = true;

export async function load({ params }: { params: RouteParams }) {
    const article = await parse(`./src/assets/blog/${params.slug}.md`);

    if (!article) {
        throw error(404);
    }

    return { article: article as { content: string; metadata: ArticleMetadata } };
}
