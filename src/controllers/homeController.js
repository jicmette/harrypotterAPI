const home = (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Harry Potter API</title>
      </head>
      <body>
        <h1>Welcome to the Harry Potter API!</h1>
        <p>Explore characters, spells, and more.</p>
        <ul>
          <li><a href="/characters">/characters endpoint</a></li>
          <li><a href="/spells">/spells endpoint</a></li>
        </ul>

        <a href="/api-docs">Documentation</a>
      </body>
    </html>
  `);
};

module.exports = { home };
