console.debug("loaded");

let keys = [
  { key: "h", path: "/" },
  { key: "g", path: "/download.php" },
  { key: "o", path: "/overview.php" },
  { key: "s", path: "/screenshots.php" },
  { key: "d", path: "/docs.php" },
  { key: "n", path: "/news.php" },
  { key: "w", path: "/who.php" },
  { key: "v", path: "/git.php" },
  { key: "c", path: "/contact.php" }
];

setTimeout(setShortcuts, 0);

function setShortcuts() {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const shortcut = "shift+" + key.key;
    console.debug(shortcut);
    addShortcut(shortcut, key);
    addShortcut(key.key, key);
  }
  console.debug('all loaded');
}

function addShortcut(shortcut, key) {
  shortcuts.add(shortcut, function (event) {
    const url = window.location.protocol + "//" + window.location.hostname + key.path;
    window.focus();
    console.debug(shortcut, url);
    window.location.assign(url);
    return false;
  });
}

