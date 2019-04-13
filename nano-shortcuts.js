let keys = [
  { key: "h", path: "/" },
  { key: "g", path: "/download.php" },
  { key: "o", path: "/overview.php" },
  { key: "s", path: "/screenshots.php" },
  { key: "d", path: "/docs.php" },
  { key: "n", path: "/news.php" },
  { key: "w", path: "/who.php" },
  { key: "v", path: "/git.php" },
  { key: "c", path: "/contact.php" },
  { key: "x", path: null }
];

setShortcuts()

function setShortcuts() {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const shortcut = "shift+" + key.key;
    addShortcut(shortcut, key);
    addShortcut(key.key, key);
  }
}

function addShortcut(shortcut, key) {
  shortcuts.add(shortcut, function (event) {
    let url;
    if (key.path === null)
    {
      url = 'about:blank';
    } else {
      url = window.location.protocol + "//" + window.location.hostname + key.path;
    }
    window.location.assign(url);
    return false;
  });
}

