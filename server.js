const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use((req, res) => {
  const filePath = path.join(__dirname, req.path);

  // Check if path exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).send('Not found');
  }

  const stat = fs.statSync(filePath);

  // If it's a directory, list contents
  if (stat.isDirectory()) {
    const files = fs.readdirSync(filePath);

    let html = `<!DOCTYPE html>
<html>
<head>
  <title>Index of ${req.path}</title>
</head>
<body>
  <h1>Index of ${req.path}</h1>
  <ul>`;

    // Add parent directory link if not at root
    if (req.path !== '/') {
      const parentPath = path.join(req.path, '..');
      html += `<li><a href="${parentPath}">📁 ..</a></li>`;
    }

    // List all files and folders
    files.forEach(file => {
      const fileFullPath = path.join(filePath, file);
      const fileStat = fs.statSync(fileFullPath);
      const urlPath = path.join(req.path, file).replace(/\\/g, '/');
      const icon = fileStat.isDirectory() ? '📁' : '📄';

      html += `<li><a href="${urlPath}">${icon} ${file}</a></li>`;
    });

    html += `</ul>
</body>
</html>`;

    res.send(html);
  } else {
    // If it's a file, serve it
    res.sendFile(filePath);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
