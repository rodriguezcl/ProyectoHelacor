USE [master]
GO

DROP DATABASE Helacor_Linea_de_Torta;
GO

/****** Object:  Database [Helacor Linea de Torta]    Script Date: 07/06/2023 20:39:28 ******/
USE [master]
GO


CREATE DATABASE Helacor_Linea_de_Torta;
GO

/*  TABLAS HELACOR*/

USE Helacor_Linea_de_Torta;
GO

CREATE TABLE [dbo].[Marca](
	Idmarca int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	nombremarca nvarchar(50) NULL
	);
GO

CREATE TABLE [dbo].[Pais](
	[Idpais] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[C_Postal] [int] NULL,
	[NombrePais] [nvarchar](50) NULL);
GO

CREATE TABLE [dbo].[Puesto](
	[Idpuesto] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Tipo_puesto] [nvarchar](30) NOT NULL,
	[Descripcion] [nvarchar](100) NULL);

GO

CREATE TABLE [dbo].[Turno](
	[Idturno] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Descripcion] [nvarchar](20) NOT NULL,
	[Horario_Inicio] [datetime] NULL,
	[Horario_Fin] [datetime] NULL);
GO

CREATE TABLE [dbo].[Empleado](
	[Idempleado] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Apellido] [nvarchar](50) NOT NULL,
	[Nombre] [nvarchar](50) NOT NULL,
	[I_Identidad] [varchar](50) NOT NULL,
	[Tipo_I_Identidad] [varchar](50) NOT NULL,
	[Telefono] [int] NULL,
	[Domiclio] [nvarchar](50) NULL,
	[Idpuesto] [int] NOT NULL,
	[Fecha_Alta] [date] NULL,
	[Fecha_Operacion] [date] NULL,
	[Descripcion_Operacion] [nvarchar](500) NULL,
	[Activo] [numeric](1, 0) NULL,
	);
GO

ALTER TABLE [dbo].[Empleado]  WITH CHECK ADD  CONSTRAINT [fk_Puesto_Empleado] FOREIGN KEY([Idpuesto])
REFERENCES [dbo].[Puesto] ([Idpuesto])
GO

CREATE TABLE [dbo].[Producto](
	[Idproducto] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Descripcion] [nvarchar](100) NULL,
	[Tipo] [nvarchar](50) NULL,
	[Unidad] [int] NULL,
	[Peso_Helado] [varchar](50) NULL,
	[Peso_Total] [varchar](50) NULL,
	[Fecha_Alta] [date] NULL,
	[Fecha_Operacion] [date] NULL,
	[Producto_Baja] [numeric](1, 0) NULL,
	[Operacion] [nvarchar](100) NULL,
	[Descripcion_Operacion] [nvarchar](500) NULL,
	[IdEmpleado] [int] NULL);
GO

ALTER TABLE [dbo].[Producto]  WITH CHECK ADD  CONSTRAINT [FK_Producto_Empleado] FOREIGN KEY([IdEmpleado])
REFERENCES [dbo].[Empleado] ([Idempleado])
GO

ALTER TABLE [dbo].[Producto] CHECK CONSTRAINT [FK_Producto_Empleado]
GO

ALTER TABLE [dbo].[Empleado] CHECK CONSTRAINT [fk_Puesto_Empleado]
GO

CREATE TABLE [dbo].[Produccion_Marca](
	[Idproduccion_marca] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Idproducto] [int] NOT NULL,
	[Idmarca] [int] NOT NULL,
	[Fecha_Operacion] [date] NULL,
	[Descripcion_Operacion] [nvarchar](500) NULL,
	[IdEmpleado] [int] NULL);
GO

ALTER TABLE [dbo].[Produccion_Marca]  WITH CHECK ADD  CONSTRAINT [fk_marca] FOREIGN KEY([Idmarca])
REFERENCES [dbo].[Marca] ([Idmarca])
GO

ALTER TABLE [dbo].[Produccion_Marca] CHECK CONSTRAINT [fk_marca]
GO

ALTER TABLE [dbo].[Produccion_Marca]  WITH CHECK ADD  CONSTRAINT [FK_Produccion_Marca_Empleado] FOREIGN KEY([IdEmpleado])
REFERENCES [dbo].[Empleado] ([Idempleado])
GO

ALTER TABLE [dbo].[Produccion_Marca] CHECK CONSTRAINT [FK_Produccion_Marca_Empleado]
GO

ALTER TABLE [dbo].[Produccion_Marca]  WITH CHECK ADD  CONSTRAINT [fk_producto] FOREIGN KEY([Idproducto])
REFERENCES [dbo].[Producto] ([Idproducto])
GO

ALTER TABLE [dbo].[Produccion_Marca] CHECK CONSTRAINT [fk_producto]
GO

CREATE TABLE [dbo].[Produccion_Marca_Pais](
	[Id_Produccion_Marca_Pais] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Idproduccion_marca] [int] NOT NULL,
	[Idpais] [int] NOT NULL,
	[Fecha_Operacion] [date] NULL,
	[Descripcion_Operacion] [nvarchar](500) NULL);
GO

ALTER TABLE [dbo].[Produccion_Marca_Pais]  WITH CHECK ADD  CONSTRAINT [fk_pais] FOREIGN KEY([Idpais])
REFERENCES [dbo].[Pais] ([Idpais])
GO

ALTER TABLE [dbo].[Produccion_Marca_Pais] CHECK CONSTRAINT [fk_pais]
GO

ALTER TABLE [dbo].[Produccion_Marca_Pais]  WITH CHECK ADD  CONSTRAINT [fk_Produccion_Marca] FOREIGN KEY([Idproduccion_marca])
REFERENCES [dbo].[Produccion_Marca] ([Idproduccion_marca])
GO

ALTER TABLE [dbo].[Produccion_Marca_Pais] CHECK CONSTRAINT [fk_Produccion_Marca]
GO


CREATE TABLE [dbo].[Produccion](
	[Idproduccion] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Fecha] [datetime] NOT NULL,
	[Id_Produccion_Marca_Pais] [int] NOT NULL,
	[Idturno] [int] NOT NULL,
	[Idempleado] [int] NOT NULL,
	[Fecha_Operacion] [date] NULL,
	[Descripcion_Operacion] [nvarchar](500) NULL);
GO

ALTER TABLE [dbo].[Produccion]  WITH CHECK ADD  CONSTRAINT [fk_empleado] FOREIGN KEY([Idempleado])
REFERENCES [dbo].[Empleado] ([Idempleado])
GO

ALTER TABLE [dbo].[Produccion] CHECK CONSTRAINT [fk_empleado]
GO

ALTER TABLE [dbo].[Produccion]  WITH CHECK ADD  CONSTRAINT [fk_Produccion_Marca_Pais] FOREIGN KEY([Id_Produccion_Marca_Pais])
REFERENCES [dbo].[Produccion_Marca_Pais] ([Id_Produccion_Marca_Pais])
GO

ALTER TABLE [dbo].[Produccion] CHECK CONSTRAINT [fk_Produccion_Marca_Pais]
GO

ALTER TABLE [dbo].[Produccion]  WITH CHECK ADD  CONSTRAINT [fk_turno] FOREIGN KEY([Idturno])
REFERENCES [dbo].[Turno] ([Idturno])
GO

ALTER TABLE [dbo].[Produccion] CHECK CONSTRAINT [fk_turno]
GO
/*  INSERTS HELACOR*/

USE Helacor_Linea_de_Torta;

INSERT INTO Puesto(Tipo_puesto, Descripcion) VALUES	( 'Lider' , 'revisa indicadores, analiza y toma decisiones para cumplir objetivos')
INSERT INTO Puesto(Tipo_puesto, Descripcion) VALUES	( 'Encargado' , 'carga datos y es responsable del turno asignado')
INSERT INTO Puesto(Tipo_puesto, Descripcion) VALUES	( 'Operario' , 'Realizador de tareas en el proceso')

SELECT * FROM dbo.Puesto;

INSERT INTO Marca (nombremarca) VALUES( 'Grido');
INSERT INTO Marca (nombremarca) VALUES( 'Via bana');

SELECT * FROM dbo.Marca;

INSERT INTO Pais (C_Postal ,NombrePais) VALUES ( 54,  'Argentina');
INSERT INTO Pais (C_Postal ,NombrePais) VALUES	( 598,  'Uruguay')
INSERT INTO Pais (C_Postal ,NombrePais) VALUES	( 56,  'Chile')
INSERT INTO Pais (C_Postal ,NombrePais) VALUES	( 51,  'Peru')
INSERT INTO Pais (C_Postal ,NombrePais) VALUES	( 595,  'Paraaguay')

SELECT * FROM dbo.Pais;

INSERT INTO Turno (Descripcion , Horario_Inicio , Horario_Fin) VALUES	( 'Mañana', '2023-06-03 06:00:00.000', '2023-06-03 13:59:59.000')
INSERT INTO Turno (Descripcion , Horario_Inicio , Horario_Fin) VALUES	( 'Tarde', '2023-06-03 14:00:00.000', '2023-06-03 21:59:59.000')
INSERT INTO Turno (Descripcion , Horario_Inicio , Horario_Fin) VALUES	( 'Noche', '2023-06-03 22:00:00.000',  '2023-06-03 17:59:59.000')
INSERT INTO Turno (Descripcion , Horario_Inicio , Horario_Fin) VALUES	( 'T_9Mañana', '2023-06-03 06:00:00.000', '2023-06-03 15:00:00.000')
INSERT INTO Turno (Descripcion , Horario_Inicio , Horario_Fin) VALUES	( 'T_9Noche', '2023-06-03 21:00:00.000', '2023-06-03 05:59:59.000')

SELECT * FROM dbo.Turno;

INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Budding', 'Arturo', 30222444, 'DNI', 351234567, NULL, 2)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Palacio', 'Juan', 30333555, 'DNI', 351234544, NULL, 2)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Rojas', 'Lucas', 30222333, 'DNI', 351234222, NULL, 2)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Cordoba', 'Pablo', 30112444, 'DNI', 351222567, NULL, 1)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Morillo', 'Lucas', 30224444, 'DNI', 341234567, NULL, 3)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Barcena', 'Maria', 30992444, 'DNI', 351200567, NULL, 3)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Macario', 'Gustavo', 32222444, 'DNI', 351237767, NULL, 3)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Ginese', 'Cristian', 30233444, 'DNI', 351554567, NULL, 3)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Calderon', 'Cristian', 38822444, 'DNI', 351234567, NULL, 3)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Heredia', 'Manuel', 30228444, 'DNI', 351244567, NULL, 3)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Quinteros', 'Julian', 30258044, 'DNI', 351227567, NULL, 3)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Rivadero', 'Dario', 34422444, 'DNI', 358034567, NULL, 3)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Fabre', 'Pablo', 30226644, 'DNI', 351239999, NULL, 3)
INSERT INTO Empleado (Apellido, Nombre, I_Identidad, Tipo_I_Identidad, Telefono, Domiclio, Idpuesto) VALUES 	( 'Villagra', 'Diego', 33332444, 'DNI', 356634567, NULL, 3)

SELECT * FROM DBO.Empleado;

INSERT INTO Producto(Descripcion, Tipo, Unidad, Peso_Helado, Peso_Total) VALUES	( 'Pack x 6 unidades', 'Torta helada c/galletitas OREO', 6, '3,66 KG', '6,27 KG')
INSERT INTO Producto(Descripcion, Tipo, Unidad, Peso_Helado, Peso_Total) VALUES	( 'Pack x 6 unidades', 'Torta helada c/galletitas MILKA', 6, '3,84 KG', '6,27 KG')
INSERT INTO Producto(Descripcion, Tipo, Unidad, Peso_Helado, Peso_Total) VALUES	( 'Pack x 6 unidades', 'Torta GRIDO c/relleno', 6, '4,35 KG', '6,27 KG')

SELECT * FROM dbo.Producto;