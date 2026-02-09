document.addEventListener("DOMContentLoaded", () => {
	const communitiesSection = document.getElementById("communities");

	fetch("/communities/communities.json")
		.then((response) => response.json())
		.then((communities) => {
			communities.forEach((community) => {
				const article = document.createElement("article");
				article.className = "community";
				article.id = community.id;

				article.innerHTML = `
                <img
                    src="/communities/icons/${community.id}.webp"
                    alt="${community.name} Icon"
                    width="80"
                    height="80" />
                <h2>${community.name}</h2>
                <p>${community.description}</p>
                <a href="${community.url}" class="join-button" rel="external noopener noreferrer" target="_blank">
                    Join the Community
                </a>
				${community.lang ? `<small>Main Language: ${community.lang}</small>` : ""}
                ${community.rep ? `<small>Rep: ${community.rep}</small>` : ""}
            `;

				communitiesSection.appendChild(article);
				article.addEventListener("click", () => {
					window.location.href = `#${community.id}`;
				});
			});
		})
		.catch((error) =>
			console.error("Erro ao carregar comunidades:", error),
		);
});
