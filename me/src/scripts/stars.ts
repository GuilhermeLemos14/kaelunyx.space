const params = new URLSearchParams(location.search);
const starsEnabled: boolean = params.get("stars") !== "off";

document.addEventListener("DOMContentLoaded", () => {
    if (!starsEnabled) {
        document.querySelectorAll(".page-link").forEach((element) => {
            const url = new URL(element.getAttribute("href") || "");
            url.searchParams.set("stars", "off");
            element.setAttribute("href", url.toString());
        });
        document.querySelectorAll(".stars").forEach((star) => {
            star.remove();
        });
    }

    const toggleButton = document.getElementById("toggle-stars-button");
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            const currentUrl = new URL(window.location.href);
            if (currentUrl.searchParams.get("stars") === "off") {
                currentUrl.searchParams.delete("stars");
            } else {
                currentUrl.searchParams.set("stars", "off");
            }
            window.location.href = currentUrl.toString();
        });
    }
});