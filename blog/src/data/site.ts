// src/data/site.ts
export interface SiteData {
	name: string;
	author: string;
	twitterHandle: string;
	dateCreated: string;
	locale: string;
}

const site: SiteData = {
	name: "Blog Kaelunyx Space",
	author: "Guilherme Lemos",
	twitterHandle: "@Kaelunyx",
	dateCreated: "2025-01-12T00:00:00-03:00",
	locale: "en_CA",
};

export default site;
