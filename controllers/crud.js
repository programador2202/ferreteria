const conexion = require('../database/db');

// Guardar persona
exports.save = (req, res) => {
    // Acceder a los datos enviados desde el formulario
    const nombre = req.body.nombre;
    const apellido_p = req.body.apellido_p;
    const apellido_m = req.body.apellido_m;
    const tipo_d = req.body.tipo_d;
    const dni = req.body.dni;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;

    // Insertar directamente en la tabla persona
    conexion.query('INSERT INTO persona (nombre, apellido_p, apellido_m, tipo_d, dni, telefono, direccion) VALUES (?, ?, ?, ?, ?, ?, ?)', 
        [nombre, apellido_p, apellido_m, tipo_d, dni, telefono, direccion], 
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).send("Error al guardar los datos");
            } else {
                // Redirigir a la lista de personas
                console.log("Persona registrada correctamente");
                res.redirect('/');
            }
        }
    );
};

// Actualizar persona
exports.update = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido_p = req.body.apellido_p;
    const apellido_m = req.body.apellido_m;
    const tipo_d = req.body.tipo_d;
    const dni = req.body.dni;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;

    // Actualizar directamente en la tabla persona
    conexion.query('UPDATE persona SET nombre = ?, apellido_p = ?, apellido_m = ?, tipo_d = ?, dni = ?, telefono = ?, direccion = ? WHERE id = ?', 
        [nombre, apellido_p, apellido_m, tipo_d, dni, telefono, direccion, id], 
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).send("Error al actualizar los datos");
            } else {
                console.log("Persona actualizada correctamente");
                res.redirect('/');
            }
        }
    );
};

// Eliminar persona
exports.delete = (req, res) => {
    const id = req.params.id;

    // Eliminar directamente desde la tabla persona
    conexion.query('DELETE FROM persona WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error al eliminar los datos");
        } else {
            console.log("Persona eliminada correctamente");
            res.redirect('/');
        }
    });
};
