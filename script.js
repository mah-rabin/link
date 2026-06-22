async function redirect() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("c");

    if (!code) {
        document.body.innerHTML =
            "<h2>Usage: ?c=yourcode</h2>";
        return;
    }

    try {
        const response = await fetch("redirects.json");
        const links = await response.json();

        if (links[code]) {
            window.location.replace(links[code]);
        } else {
            document.body.innerHTML =
                "<h2>Short link not found</h2>";
        }
    } catch (err) {
        document.body.innerHTML =
            "<h2>Error loading redirects</h2>";
    }
}

redirect();