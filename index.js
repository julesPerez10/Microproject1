const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Importar el archivo JSON
const dataPath = path.join(__dirname, 'data', 'data.json');
const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Ruta para servir los datos JSON
app.get('/api/data', (req, res) => {
    res.json(jsonData);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
