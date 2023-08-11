function getGameLink() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("link");
}

function getGameTitle() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("title");
}

function getAuthState() {
  // Retrieve the authentication state
  return { isAuthenticated: true, user: "John Doe" };
}

function sendDataToIframe(iframe, data) {
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(data, "*");
  }
}

function loadGame() {
  const gameLink = getGameLink();
  const gameTitle = getGameTitle();

  document.getElementById("game-title").innerText =
    gameTitle || "Enjoy the Game";

  const iframe = document.createElement("iframe");
  iframe.src = gameLink;
  iframe.width = "100%";
  iframe.height = "600px";
  iframe.className = "border rounded shadow-lg";

  document.getElementById("game-id").appendChild(iframe);

  const authState = getAuthState();
  const dataToPass = { authState, additionalData: "Some extra information" };
  iframe.onload = () => sendDataToIframe(iframe, dataToPass);
}

window.onload = loadGame;
