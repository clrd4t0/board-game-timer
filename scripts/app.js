// Setting Screen Related
const setting = document.getElementById("settings");
const settingsButton = document.getElementById("settings-button");
const closeSettingsButton = document.getElementById("close-settings-button");

settingsButton.addEventListener("click", () => {setting.classList.add("popup-visible");});
closeSettingsButton.addEventListener("click", () => {setting.classList.remove("popup-visible");});