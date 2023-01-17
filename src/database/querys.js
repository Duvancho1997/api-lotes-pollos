export const queries = {
    getConsultaUsuarios: 'SELECT * FROM [Lotes_pollos].[dbo].[Usuarios]',

    crearNuevosUsuarios: 
    "INSERT INTO Usuarios ( Identificacion ,Nombre ,Apellido ,Numero_contacto ,Contrasena,Correo_usuario ,Nombre_usuario) VALUES ( @Identificacion ,@Nombre ,@Apellido ,@Numero_contacto ,@Contrasena ,@Correo_usuario ,@Nombre_usuario) ",

    getConsultaUsuarioId:
    'SELECT * FROM Usuarios WHERE Id_usuario = @Id',

    eliminarUsuarioId:
    'DELETE FROM Usuarios WHERE Id_usuario = @Id',

    getTotalUsuarios:
    'SELECT COUNT(*) FROM Usuarios ',

    editarUsuarioId:
    'UPDATE Usuarios SET  Identificacion = @Identificacion, Nombre = @Nombre, Apellido = @Apellido, Numero_contacto = @Numero_contacto, Contrasena = @Contrasena, Correo_usuario = @Correo_usuario, Nombre_usuario = @Nombre_usuario WHERE Id_usuario = @Id ',

    getLogin:
    'SELECT * FROM Usuarios where Contrasena = @Contrasena AND Nombre_usuario = @Nombre_usuario',

    getbuscarUsuario:
    'SELECT * from Usuarios  where Nombre = @Nombre OR Identificacion = @Identificacion OR Nombre_usuario = @Usuario',

    getValidarUsuario:
    'SELECT * from Usuarios  where Identificacion = @Identificacion AND Correo_usuario = @Correo ',

    getCambiarContrasenaUsuario:
    'UPDATE Usuarios SET Contrasena = @Contrasena   WHERE Id_usuario = @Id ' ,

    getConsultaNombreUsuario:
    'select Nombre_usuario from Usuarios where Nombre_usuario = @Id '
}