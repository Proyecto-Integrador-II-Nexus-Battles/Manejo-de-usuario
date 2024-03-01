
/ / DELIMITER;

DELIMITER //
CREATE PROCEDURE otorgar_priviledios (IN E_Mail VARCHAR(50))  
BEGIN
    UPDATE Login 
    AS L
SET L.Tipo_Usuario = (SELECT id_Tipo_Usuario FROM Tipo_Usuario WHERE Nombre_Tipo_Usuario = 'Administrador') 
WHERE L.E_mail = E_mail;
END;
//
DELIMITER;