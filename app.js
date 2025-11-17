/* -------------------------------------------------
   Moireu v0.12 — Sidebar + Feed + Basic Structure
-------------------------------------------------- */

let appState = {
    posts: []
};

/* -------------------------------------
   SIDEBAR TOGGLE
-------------------------------------- */
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
}

/* -------------------------------------
   LOAD SAMPLE POSTS
-------------------------------------- */
function loadFeed() {
    const feed = document.getElementById("feed");
    feed.innerHTML = "";

    appState.posts.forEach(p => {
        let card = document.createElement("div");
        card.className = "post";

        card.innerHTML = `
            <strong>${p.display}</strong><br>
            <span class="username">@${p.user}</span>
            <hr>
            <p>${p.text}</p>
            <hr>
            <span>♡ ${p.likes} | ⇄ | ⌯⌲ ${p.replies}</span>
        `;

        feed.appendChild(card);
    });
}

/* -------------------------------------
   TEMP SAMPLE DATA
-------------------------------------- */
appState.posts.push({
    display: "Aria",
    user: "aria",
    text: "Welcome to Moireu v0.12 💖🌿",
    likes: 142,
    replies: 32
});

appState.posts.push({
    display: "You",
    user: "user",
    text: "Testing the new pastel theme!",
    likes: 88,
    replies: 10
});

/* -------------------------------------
   INITIALIZE
-------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    loadFeed();
});
