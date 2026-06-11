import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import site from "@/data/site";

export async function GET(context) {
	const posts = await getCollection("blog");
	return rss({
		title: site.title,
		description: site.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/post/${post.id}/`,
		})),
	});
}
