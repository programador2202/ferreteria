const express = require('express');
const router = express.Router();
const conexion = require('./database/db');
const crud = require('./controllers/crud');

// Ruta principal: mostrar personas desde la vista obtener_personas
router.get('/', (req, res) => {
    conexion.query("SELECT * FROM obtener_personas", (error, results) => {
        if (error) {
            console.error("Error al obtener personas:", error);
            res.status(500).send("Error del servidor");
        } else {
            res.render('index', { registros: results });
        }
    });
});

// Ruta para mostrar el formulario de creación
router.get('/create', (req, res) => {
    res.render("create");
});

// Ruta para mostrar el formulario de edición con datos cargados
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query("SELECT * FROM persona WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.error("Error al obtener persona:", error);
            res.status(500).send("Error al obtener persona");
        } else {
            res.render("edit", { persona: results[0] });
        }
    });
});

// Rutas para guardar, actualizar y eliminar persona (operaciones directas sobre la tabla)
router.post('/save', crud.save);       // Llama al método save para insertar persona
router.post('/update', crud.update);   // Llama al método update para actualizar persona
router.get('/delete/:id', crud.delete); // Llama al método delete para eliminar persona

module.exports = router;
