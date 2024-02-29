CREATE DATABASE Database_Login_PiII;

USE Database_Login_PiII;

-- Creates the Usuario table to store user information
CREATE TABLE Usuario(
    E_Mail VARCHAR (50) NOT NULL PRIMARY KEY,
    Estado BINARY (1) NOT NULL, 
    Nombre VARCHAR (50) NOT NULL,
    Apellido VARCHAR (50) NOT NULL,
    Apodo VARCHAR (50) NOT NULL,
    Avatar MEDIUMBLOB
) ENGINE = INNODB;

-- Creates the Tipo_Baneo table to store different types of bans
CREATE TABLE Tipo_Baneo(
    id_Tipo_Baneo INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Nombre_Baneo VARCHAR (50) NOT NULL
) ENGINE = INNODB;

-- Creates the BlakList table to store bans applied to users
CREATE TABLE BlakList(
    id_Baneo INT NOT NULL AUTO_INCREMENT,
    E_Mail VARCHAR (50) NOT NULL,
    id_Tipo_Baneo INT NOT NULL,
    Fecha_Inicio_Ban DATE NOT NULL,
    Fecha_Fin_Ban DATE NOT NULL,
    PRIMARY KEY(id_Baneo),
    FOREIGN KEY(id_Tipo_Baneo) REFERENCES Tipo_Baneo (id_Tipo_Baneo),
    FOREIGN KEY(E_Mail) REFERENCES Usuario (E_Mail)
) ENGINE = INNODB;

-- Creates the Tipo_Usuario table to store different types of users
CREATE TABLE Tipo_Usuario(
    id_Tipo_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_Tipo_Usuario VARCHAR (50)
) ENGINE = INNODB;

-- Creates the Login table to store user login information
CREATE TABLE Login(
    id_Login INT NOT NULL AUTO_INCREMENT,
    id_Tipo_Usuario INT NOT NULL,
    E_Mail VARCHAR (50) NOT NULL,
    Contrasena VARCHAR (50),
    PRIMARY KEY(id_Login),
    FOREIGN KEY(E_Mail) REFERENCES Usuario (E_Mail),
    FOREIGN KEY(id_Tipo_Usuario) REFERENCES Tipo_Usuario(id_Tipo_Usuario)
) ENGINE = INNODB;

CREATE TABLE Tipo_Metodo_Pago(
    id_Metodo_Pago INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Nombre_Metodo_Pago VARCHAR (50) NOT NULL
) ENGINE = INNODB;

-- Creates the Tipo_Metodo_Pago table to store different types of payment methods
CREATE TABLE PayPal(
    id_PayPal INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    E_Mail_PayPal VARCHAR (50) NOT NULL,
    Contrasena_PayPal VARCHAR (50) NOT NULL
) ENGINE = INNODB;

-- Creates the Tarjeta_Credito table to store credit card information
CREATE TABLE Tarjeta_Credito(
    id_Tarjeta INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Num_Tarjeta VARCHAR (20) NOT NULL,
    Fecha_Caducidad DATE NOT NULL,
    CVC INT NOT NULL
) ENGINE = INNODB;

-- Creates the Transaccion table to store transaction information
CREATE TABLE Transaccion(
    id_Pago INT NOT NULL AUTO_INCREMENT,
    E_Mail VARCHAR (50) NOT NULL,
    id_Metodo_Pago INT NOT NULL,
    Tipo_Metodo_Pago INT NOT NULL,
    PRIMARY KEY(id_Pago),
    FOREIGN KEY(E_Mail) REFERENCES Usuario(E_Mail),
    FOREIGN KEY(Tipo_Metodo_Pago) REFERENCES Tipo_Metodo_Pago(id_Metodo_Pago)
) ENGINE = INNODB;