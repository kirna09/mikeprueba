const express = require('express');
const autoLoadRoutes = require('@kirna09/auto-load-routes');
const path = require('path');

const app = express();
const port = 3000;

const routesPath = path.join(__dirname, 'routes');
const allRoutes = autoLoadRoutes(routesPath);

app.use('/', allRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});