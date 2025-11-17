//* -------------------------------------------------
   Moireu v0.12-Full (Merged v0.1 + v0.12 Features)
-------------------------------------------------- */

let appState = {
    posts: [],
    events: [],
    characters: [],
    lore: [],
    profile: {
        name: "User",
        user: "user",
        bio: ""
    }
};


/* --------------------------
   SIDEBAR CONTROL (v0.12)
--------------------------- */
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}


/* --------------------------
   TAB SYSTEM (from v0.1)
--------------------------- */
function openTab(id) {
    document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}


/* --------------------------
   FEED LOADING
--------------------------- */
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


/* --------------------------
   CREATE POST
--------------------------- */
function submitPost() {
    const text = document.getElementById("postText").value;
    if (!text.trim()) return;

    appState.posts.unshift({
        display: appState.profile.name,
        user: appState.profile.user,
        text,
        likes: 0,
        replies: 0
    });

    document.getElementById("postText").value = "";
    loadFeed();
}


/* --------------------------
   PROFILE
--------------------------- */
function saveProfile() {
    appState.profile.name = document.getElementById("profileName").value;
    appState.profile.user = document.getElementById("profileUser").value;
    appState.profile.bio = document.getElementById("profileBio").value;
}


/* --------------------------
   DIRECT MESSAGES
--------------------------- */
function sendDM() {
    alert("DM sent! (placeholder logic)");
}


/* --------------------------
   EVENTS
--------------------------- */
function createEvent() {
    const text = document.getElementById("eventText").value;
    if (!text.trim()) return;

    appState.events.push(text);
    document.getElementById("eventText").value = "";
    renderEvents();
}

function renderEvents() {
    const box = document.getElementById("eventList");
    box.innerHTML = "";
    appState.events.forEach(e => {
        box.innerHTML += `<div class="post">${e}</div>`;
    });
}


/* --------------------------
   CHARACTERS
--------------------------- */
function addCharacter() {
    const text = document.getElementById("characterText").value;
    if (!text.trim()) return;

    appState.characters.push(text);
    document.getElementById("characterText").value = "";
    renderCharacters();
}

function renderCharacters() {
    const box = document.getElementById("characterList");
    box.innerHTML = "";
    appState.characters.forEach(c => {
        box.innerHTML += `<div class="post">${c}</div>`;
    });
}


/* --------------------------
   UNIVERSE LORE
--------------------------- */
function addLore() {
    const text = document.getElementById("loreText").value;
    if (!text.trim()) return;

    appState.lore.push(text);
    document.getElementById("loreText").value = "";
    renderLore();
}

function renderLore() {
    const box = document.getElementById("loreList");
    box.innerHTML = "";
    appState.lore.forEach(l => {
        box.innerHTML += `<div class="post">${l}</div>`;
    });
}


/* --------------------------
   INITIAL DATA
--------------------------- */
appState.posts.push({
    display: "Aria",
    user: "aria",
    text: "Welcome to Moireu v0.12-Full 🌸🌿",
    likes: 120,
    replies: 25
});

/* --------------------------
   INIT
--------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    loadFeed();
});
