const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Folder configurations
const folders = [
  { name: 'sonnet4.5', path: 'sonnet4.5/out', available: true },
  { name: 'glm4.6', path: 'glm4.6/out', available: true }
];

// Middleware to serve selected app
app.use((req, res, next) => {
  const appName = req.query.app || req.path.split('/')[1];

  // If requesting a specific app folder
  if (appName && folders.find(f => f.name === appName && f.available)) {
    const folder = folders.find(f => f.name === appName);
    const appPath = path.join(__dirname, folder.path);

    // Redirect /appname to /appname/ for proper relative paths
    if (req.path === `/${appName}` && !req.path.endsWith('/')) {
      return res.redirect(`/${appName}/`);
    }

    // Serve static files from the app's out folder
    const filePath = req.path.replace(`/${appName}`, '').replace(/^\//, '') || 'index.html';
    const fullPath = path.join(appPath, filePath);

    if (fs.existsSync(fullPath)) {
      if (fs.statSync(fullPath).isDirectory()) {
        const indexPath = path.join(fullPath, 'index.html');
        if (fs.existsSync(indexPath)) {
          return res.sendFile(indexPath);
        }
      } else {
        return res.sendFile(fullPath);
      }
    }
  }

  next();
});

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
        <a href="/${folder.name}/">📂 ${folder.name}</a>
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
