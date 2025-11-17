/* ------------------------------
   Moireu v0.12-Fixed
------------------------------- */

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
   SIDEBAR
--------------------------- */
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}


/* --------------------------
   TAB SWITCHING 
--------------------------- */
function openTab(id) {

    // Hide all tabs
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.add("hidden");
    });

    // Show selected tab
    document.getElementById(id).classList.remove("hidden");

    // Close sidebar for mobile ease
    document.getElementById("sidebar").classList.remove("show");
}


/* --------------------------
   LOAD FEED
--------------------------- */
function loadFeed() {
    const feed = document.getElementById("feed");
    feed.innerHTML = "";

    appState.posts.forEach(p => {
        let postEl = document.createElement("div");
        postEl.className = "post";

        postEl.innerHTML = `
            <strong>${p.display}</strong><br>
            <span>@${p.user}</span>
            <hr>
            <p>${p.text}</p>
            <hr>
            <span>♡ ${p.likes} | ⌯⌲ ${p.replies}</span>
        `;

        feed.appendChild(postEl);
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
        likes: Math.floor(Math.random() * 120),
        replies: Math.floor(Math.random() * 80)
    });

    document.getElementById("postText").value = "";
    loadFeed();
    openTab("feedTab");
}


/* --------------------------
   PROFILE
--------------------------- */
function saveProfile() {
    appState.profile.name = document.getElementById("profileName").value;
    appState.profile.user = document.getElementById("profileUser").value;
    appState.profile.bio = document.getElementById("profileBio").value;

    alert("Profile saved!");
    openTab("feedTab");
}


/* --------------------------
   DM
--------------------------- */
function sendDM() {
    alert("DM sent!");
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
   INIT
--------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    appState.posts.push({
        display: "Aria",
        user: "aria",
        text: "Welcome to Moireu v0.12 🌸",
        likes: 120,
        replies: 18
    });

    loadFeed();
});
