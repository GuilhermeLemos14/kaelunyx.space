import site from "@/data/site";

function siteUrl(path: string = ""): string {
    if (path === "") {
        return site.url;
    }

    const baseUrl = site.url;
    return new URL(path, baseUrl).href;
}

export default siteUrl;