const fs = require('fs');
const path = require('path');

const usersFilePath = path.resolve(__dirname, "../../db", "index.json");
let users = [];
try {
    users = JSON.parse(fs.readFileSync(usersFilePath));
} catch (error) {
    console.error(`Error al leer el archivo de usuarios: ${error.message}`);
}

module.exports = users