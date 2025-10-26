const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Folder configurations
const folders = [
  { name: 'sonnet4.5', path: 'sonnet4.5/out', available: true },
  { name: 'glm4.6', path: 'glm4.6', available: false }  // No out folder yet
];

// Root page - show folder selection
app.get('/', (req, res) => {
  let html = `<!DOCTYPE html>
<html>
<head>
  <title>HTML Folder Browser</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
    h1 { color: #333; }
    .folder-list { list-style: none; padding: 0; }
    .folder-item { margin: 15px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
    .folder-item a { text-decoration: none; color: #007bff; font-size: 18px; }
    .folder-item a:hover { text-decoration: underline; }
    .unavailable { color: #999; }
  </style>
</head>
<body>
  <h1>📁 Select a Folder to Browse</h1>
  <ul class="folder-list">`;

  folders.forEach(folder => {
    if (folder.available) {
      html += `<li class="folder-item">
        <a href="/${folder.name}">📂 ${folder.name}</a>
      </li>`;
    } else {
      html += `<li class="folder-item unavailable">
        📁 ${folder.name} (Not built yet - run 'npm run build' in this folder)
      </li>`;
    }
  });

  html += `</ul>
</body>
</html>`;

  res.send(html);
});

// Serve sonnet4.5 static files
app.use('/sonnet4.5', express.static(path.join(__dirname, 'sonnet4.5/out')));

// 404 handler
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Not Found</h1>
    <p><a href="/">← Back to home</a></p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
