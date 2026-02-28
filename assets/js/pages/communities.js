document.addEventListener("DOMContentLoaded", () => {
	const communitiesSection = document.getElementById("communities");
	let flags = {};

	fetch("/communities/flags.json")
		.then((response) => response.json())
		.then((emojis) => {
			flags = emojis;
		})
		.then(() => {
			fetch("/communities/communities.json")
				.then((response) => response.json())
				.then((communities) => {
					communities.forEach((community) => {
						const article = document.createElement("article");
						article.className = "community";
						article.id = community.id;

						article.innerHTML = `
				<span class="id" aria-hidden="true" onclick="copyID('${community.id}')" title="Copy ID">#${community.id}</span>
				${community.lang ? `<div class="language"><span class="flag">${flags[community.lang] || "??"}</span>${community.lang}</div>` : ""}
				${community.rep ? `<span class="rep">${Array.isArray(community.rep) ? `Rep: ${community.rep.map((r) => `${r}`).join(",<br>")}` : `Rep: ${community.rep}`}</span>` : ""}
				${community.platform ? `<div class="platform"><svg aria-hidden="true" class="platform-icon ${community.platform.toLowerCase()}"><use href="#${community.platform.toLowerCase()}"/></svg> ${community.platform.charAt(0).toUpperCase() + community.platform.slice(1)}</div>` : ""}
				${community.platforms ? `<div class="platforms">${community.platforms.map((platform) => `<div class="platform"><svg aria-hidden="true" class="platform-icon ${platform.toLowerCase()}"><use href="#${platform.toLowerCase()}"/></svg> ${platform.charAt(0).toUpperCase() + platform.slice(1)}</div>`).join("")}</div>` : ""}
				<img
					src="/communities/icons/${community.id}.webp"
					alt="${community.name} Icon"
					width="80"
					height="80" />
				<h2>${community.name}</h2>
				<p>${community.description}</p>
				${
					community.urls
						? `<strong class="join">Join the Community</strong> <div class="community-urls">${Object.entries(
								community.urls,
							)
								.map(
									([platform, url]) =>
										`<a class="join-button" href="${url}" rel="noopener noreferrer" target="_blank"><svg aria-hidden="true" class="platform-icon ${platform.toLowerCase()}"><use href="#${platform.toLowerCase()}"/></svg>${platform.charAt(0).toUpperCase() + platform.slice(1)}</a>`,
								)
								.join("")}</div>`
						: `<a href="${community.url}" class="join-button" rel="external noopener noreferrer" target="_blank">Join the Community</a>`
				}
			`;

						communitiesSection.appendChild(article);
						article.addEventListener("click", () => {
							article.scrollIntoView({ behavior: "smooth" });
						});
					});

					Array.from(communitiesSection.children).forEach(
						(community) => {
							if (window.location.hash === `#${community.id}`) {
								requestAnimationFrame(() => {
									community.classList.add("target");
								});
							}
						},
					);
				})
				.catch((error) =>
					console.error("Error loading communities:", error),
				);
		})
		.catch((error) => console.error("Error loading flags:", error));
});

function copyID(id) {
	const fullURL = `${window.location.href}#${id}`;

	navigator.clipboard.writeText(fullURL).then(() => {
		const idElement = document.querySelector(`.community#${id} .id`);
		const originalText = idElement.textContent;

		idElement.textContent = "ID Copied!";
		setTimeout(() => {
			idElement.textContent = originalText;
		}, 2000);
	});
}
