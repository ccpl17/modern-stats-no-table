const { readTextFile, BaseDirectory } = window.__TAURI__.fs;

document.getElementById("textarea").onkeypress = function (event) {
  event.preventDefault();
};

window.addEventListener("load", async () => {
  try {
    document.getElementById("textarea").value = await readTextFile(
      "_up_/dist/stat-crit-value-calculator/3rdpartylicenses.txt",
      {
        dir: BaseDirectory.Resource,
      }
    );
  } catch (error) {
    document.getElementById("textarea").value = error;
  }
});
