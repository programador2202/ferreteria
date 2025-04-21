drop database persona;
create database persona;

use persona;

CREATE TABLE persona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido_p VARCHAR(50) NOT NULL,
    apellido_m VARCHAR(50) NOT NULL,
    tipo_d ENUM(
        'DNI',
        'PASAPORTE',
        'CARNET DE EXTRANJERIA'
    ) NOT NULL,
    dni CHAR(9) NOT NULL,
    telefono CHAR(9) NOT NULL,
    direccion VARCHAR(200) NOT NULL
) ENGINE=InnoDB;

INSERT INTO persona (nombre, apellido_p, apellido_m, tipo_d, dni, telefono, direccion)
VALUES ('Luis', 'González', 'Ramírez', 'DNI', '12345678', '987654321', 'Av. Los Olivos 123');

INSERT INTO persona (nombre, apellido_p, apellido_m, tipo_d, dni, telefono, direccion)
VALUES ('María', 'Fernández', 'Pérez', 'PASAPORTE', '11234567', '912345678', 'Calle Lima 456');

INSERT INTO persona (nombre, apellido_p, apellido_m, tipo_d, dni, telefono, direccion)
VALUES ('Carlos', 'Vega', 'Soto', 'CARNET DE EXTRANJERIA', '17654321', '934567812', 'Jr. San Martín 789');

INSERT INTO persona (nombre, apellido_p, apellido_m, tipo_d, dni, telefono, direccion)
VALUES ('Ana', 'Reyes', 'Flores', 'DNI', '98765432', '900123456', 'Av. Independencia 101');

INSERT INTO persona (nombre, apellido_p, apellido_m, tipo_d, dni, telefono, direccion)
VALUES ('Jorge', 'Torres', 'Lopez', 'PASAPORTE', 'B1239876', '923456789', 'Pasaje Los Andes 202');



CREATE VIEW obtener_personas AS
SELECT
id,
nombre, 
apellido_p, 
apellido_m, 
tipo_d,
dni,
telefono,
direccion
FROM persona;
SELECT*FROM persona;
