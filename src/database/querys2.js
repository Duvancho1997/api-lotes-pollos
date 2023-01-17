export const queries2 = {
    getConsultaCliente: 'SELECT * FROM [db_a93405_lotespollos].[dbo].[Cliente]',
    
    crearNuevosCliente: 
    "INSERT INTO Cliente (Fecha_creacion ,Identificacion_cliente ,Nombre ,Numero_contacto_cliente ,Direccion_Cliente ,Correo_Cliente ,Descripcion_cliente ,Id_referencia_usuario) VALUES (@Fecha_creacion ,@Identificacion_cliente ,@nombre ,@Numero_contacto_cliente ,@Direccion_Cliente ,@Correo_Cliente ,@Descripcion_cliente ,@Id_referencia_usuario)",

    getConsultaClienteId:
    'SELECT * FROM Cliente WHERE Id_Cliente = @Id',

    eliminarClienteId:
    'DELETE FROM Cliente WHERE Id_Cliente = @Id',

    getTotalCliente:
    'SELECT COUNT(*) FROM Cliente ',

    editarClienteId:
    'UPDATE Cliente SET Fecha_creacion = @Fecha_creacion, Identificacion_cliente = @Identificacion_cliente, Nombre=@Nombre ,Numero_contacto_cliente = @Numero_contacto_cliente, Direccion_Cliente = @Direccion_Cliente, Correo_Cliente = @Correo_Cliente, Descripcion_cliente = @Descripcion_cliente, Id_referencia_usuario = @Id_referencia_usuario WHERE Id_Cliente = @Id ',

    getbuscarCliente:
    'SELECT * from Cliente  where Nombre = @Nombre OR Identificacion_cliente = @Identificacion OR Direccion_Cliente = @Direccion',

    getConsultaTablaCliente:
    'select Id_Cliente,Nombre_usuario, d.Nombre,  Fecha_creacion, Identificacion_cliente,  Numero_contacto_cliente,Direccion_cliente,Correo_cliente, Descripcion_cliente from Cliente d inner join [dbo].[Usuarios] us on  us.Id_usuario =  d.Id_referencia_usuario ORDER BY Id_Cliente desc'
}