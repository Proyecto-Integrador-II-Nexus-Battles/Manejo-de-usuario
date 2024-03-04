-- Inserts de prueba para la tabla Usuario
INSERT INTO Usuario (E_Mail, Nombre, Apellido, Apodo, Avatar)
VALUES 
    ('usuario1@example.com', 'Juan', 'Perez', 'juap', NULL),
    ('usuario2@example.com', 'Maria', 'Gonzalez', 'mariag', NULL),
    ('usuario3@example.com', 'Pedro', 'Lopez', 'pedrol', NULL),
    ('usuario4@example.com', 'Ana', 'Martinez', 'anam', NULL),
    ('usuario5@example.com', 'Luis', 'Rodriguez', 'luisr', NULL);

-- Inserts de prueba para la tabla Tipo_Baneo
INSERT INTO Tipo_Baneo (Nombre_Baneo)
VALUES 
    ('Temporal'),
    ('Permanente'),
    ('Parcial'),
    ('Completo'),
    ('Personalizado');

-- Inserts de prueba para la tabla Baneos
INSERT INTO Baneos (E_Mail, id_Tipo_Baneo, Fecha_Inicio_Ban, Fecha_Fin_Ban)
VALUES 
    ('usuario1@example.com', 1, '2024-02-10', '2024-02-15'),
    ('usuario2@example.com', 2, '2024-02-12', '2025-02-12'),
    ('usuario3@example.com', 3, '2024-02-15', '2024-03-15'),
    ('usuario4@example.com', 4, '2024-02-18', '2024-03-01'),
    ('usuario5@example.com', 5, '2024-02-20', '2024-03-20');

-- Inserts de prueba para la tabla Tipo_Usuario
INSERT INTO Tipo_Usuario (Nombre_Tipo_Usuario)
VALUES 
    ('Administrador'),
    ('Usuario Normal'),
    ('Invitado');

-- Inserts de prueba para la tabla Login
INSERT INTO Login (id_Tipo_Usuario, E_Mail, Contrasena)
VALUES 
    (1, 'usuario1@example.com', 'contrasena1'),
    (2, 'usuario2@example.com', 'contrasena2'),
    (2, 'usuario3@example.com', 'contrasena3'),
    (2, 'usuario4@example.com', 'contrasena4'),
    (3, 'usuario5@example.com', 'contrasena5');

-- Inserts de prueba para la tabla Tipo_Metodo_Pago
INSERT INTO Tipo_Metodo_Pago (Nombre_Metodo_Pago)
VALUES 
    ('PayPal'),
    ('Tarjeta de Crédito'),
    ('Transferencia Bancaria');

-- Inserts de prueba para la tabla PayPal
INSERT INTO PayPal (E_Mail_PayPal, Contrasena_PayPal)
VALUES 
    ('paypal1@example.com', 'contrasena1'),
    ('paypal2@example.com', 'contrasena2'),
    ('paypal3@example.com', 'contrasena3'),
    ('paypal4@example.com', 'contrasena4'),
    ('paypal5@example.com', 'contrasena5');

-- Inserts de prueba para la tabla Tarjeta_Credito
INSERT INTO Tarjeta_Credito (Num_Tarjeta, Fecha_Caducidad, CVC)
VALUES 
    ('1234567890123456', '2026-12-31', 123),
    ('9876543210987654', '2027-11-30', 456),
    ('1111222233334444', '2028-10-31', 789),
    ('5555666677778888', '2029-09-30', 321),
    ('9999888877776666', '2030-08-31', 654);

-- Inserts de prueba para la tabla Transaccion
INSERT INTO Transaccion (E_Mail, id_Metodo_Pago, Tipo_Metodo_Pago)
VALUES 
    ('usuario1@example.com', 1, 1),
    ('usuario2@example.com', 2, 2),
    ('usuario3@example.com', 3, 3),
    ('usuario4@example.com', 1, 1),
    ('usuario5@example.com', 2, 2);
    
    
    
-- SELECTS 

SELECT * FROM Usuario WHERE E_Mail = 'usuario1@example.com';
SELECT * FROM Tipo_Baneo WHERE id_Tipo_Baneo = 1;
SELECT * FROM BlakList WHERE id_Baneo = 1;
SELECT * FROM Tipo_Usuario WHERE id_Tipo_Usuario = 1;
SELECT * FROM Login WHERE id_Login = 1;
SELECT * FROM Tipo_Metodo_Pago WHERE id_Metodo_Pago = 1;
SELECT * FROM PayPal WHERE id_PayPal = 1;
SELECT * FROM Tarjeta_Credito WHERE id_Tarjeta = 1;
SELECT * FROM Transaccion WHERE id_Pago = 1;
