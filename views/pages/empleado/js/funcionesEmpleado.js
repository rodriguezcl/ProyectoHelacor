//FUNCION GET

function getAll() {
  fetch("http://localhost:53498/api/Empleado")
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getAll");
      data.forEach((o) => {
        let _tr = `<tr>
        <td>${o.Idempleado} </td>
        <td>${o.Apellido} </td>
        <td>${o.Nombre} </td>
        <td>${o.I_Identidad} </td>
        <td>${o.Tipo_I_Identidad} </td>
        <td>${o.Telefono} </td>   
        <td>${o.Domiclio} </td>
        <td>${o.Idpuesto} </td>
        <td>${o.Fecha_Alta} </td>
        <td>${o.Fecha_Operacion} </td>
        <td>${o.Descripcion_Operacion} </td>
        <td>${o.Activo} </td>
        </tr>`;

        _tbody.innerHTML += _tr;
      });
    });
}

//FUNCION GET BY ID

function getId(id) {
  const _txtID = document.getElementById("txtID");
  id = _txtID.value;

  fetch("http://localhost:53498/api/Empleado/" + id)
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getId");
      let _tr = `<tr>
      <td>${data.Idempleado} </td>
        <td>${data.Apellido} </td>
        <td>${data.Nombre} </td>
        <td>${data.I_Identidad} </td>
        <td>${data.Tipo_I_Identidad} </td>
        <td>${data.Telefono} </td>   
        <td>${data.Domiclio} </td>
        <td>${data.Idpuesto} </td>
        <td>${data.Fecha_Alta} </td>
        <td>${data.Fecha_Operacion} </td>
        <td>${data.Descripcion_Operacion} </td>
        <td>${data.Activo} </td>
        </tr>`;

      _tbody.innerHTML += _tr;


      _txtID.focus();
    });
}

//FUNCION PUT

let obj = "";

function put(obj) {
  const _txtIDPut = document.getElementById("txtIDPut");
  const _txtApellidoPut = document.getElementById("txtApellidoPut");
  const _txtNombrePut = document.getElementById("txtNombrePut");
  const _txtIdentidad = document.getElementById("txtIdentidad");
  const _txtTipoidentidad = document.getElementById("txtTipoidentidad");
  const _txtTelefonoPut = document.getElementById("txtTelefonoPut");
  const _txtDomicilio = document.getElementById("txtDomicilio");
  const _txtIdPuesto = document.getElementById("txtIdPuesto");
  const _txtFeAlta = document.getElementById("txtFeAlta");
  const _txtFeOperacion = document.getElementById("txtFeOperacion");
  const _txtDescripcionOp = document.getElementById("txtDescripcionOp");
  const _txtActivo = document.getElementById("txtActivo");


  obj = {
    Idempleado: _txtIDPut.value,
    Apellido: _txtApellidoPut.value,
    Nombre: _txtNombrePut.value,
    I_Identidad: _txtIdentidad.value,
    Tipo_I_Identidad: _txtTipoidentidad.value,
    Telefono: _txtTelefonoPut.value,
    Domiclio: _txtDomicilio.value,
    Idpuesto: _txtIdPuesto.value,
    Fecha_Alta: _txtFeAlta.value,
    Fecha_Operacion: _txtFeOperacion.value,
    Descripcion_Operacion: _txtDescripcionOp.value,
    Activo: _txtActivo.value,


  };
  $.ajax({
    type: "PUT",
    dataType: "json",
    url: "http://localhost:53498/api/Empleado/" + obj.id,
    data: obj,
    success: function (data) {
      alert("PUT OK!");
      _txtIDPut.value = "";
      _txtApellidoPut.value = "";
      _txtNombrePut.value = "";
      _txtIdentidad.value = "";
      _txtTipoidentidad.value = "";
      _txtTelefonoPut.value = "";
      _txtDomicilio.value = "";
      _txtIdPuesto.value = "";
      _txtFeAlta.value = "";
      _txtFeOperacion.value = "";
      _txtDescripcionOp.value = "";
      _txtActivo.value = "";

      _txtIDPut.focus();
    },
    error: function (error) {
      alert("Debe seleccionar un ID pre-existente");
    },
  });
}

//FUNCION POST

function post(obj) {
  const _txtIDPost = document.getElementById("txtIDPost");
  const _txtApellidoPost = document.getElementById("txtApellidoPost");
  const _txtNombrePost = document.getElementById("txtNombrePost");
  const _txtIdentidadPost = document.getElementById("txtIdentidadPost");
  const _txtTipoidentidadPost = document.getElementById("txtTipoidentidadPost");
  const _txtTelefonoPost = document.getElementById("txtTelefonoPostPost");
  const _txtDomicilioPost = document.getElementById("txtDomicilioPost");
  const _txtIdPuestoPost = document.getElementById("txtIdPuestoPost");
  const _txtFeAltaPost = document.getElementById("txtFeAltaPost");
  const _txtFeOperacionPost = document.getElementById("txtFeOperacionPost");
  const _txtDescripcionOpPost = document.getElementById("txtDescripcionOpPost");
  const _txtActivoPost = document.getElementById("txtActivoPost");


  obj = {
    Idempleado: _txtIDPost.value,
    Apellido: _txtApellidoPost.value,
    Nombre: _txtNombrePost.value,
    I_Identidad: _txtIdentidadPost.value,
    Tipo_I_Identidad: _txtTipoidentidadPost.value,
    Telefono: _txtTelefonoPost.value,
    Domiclio: _txtDomicilioPost.value,
    Idpuesto: _txtIdPuestoPost.value,
    Fecha_Alta: _txtFeAltaPost.value,
    Fecha_Operacion: _txtFeOperacionPost.value,
    Descripcion_Operacion: _txtDescripcionOpPost.value,
    Activo: _txtActivoPost.value,


  };
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "http://localhost:53498/api/Empleado",
    data: obj,
    success: function (data) {
      alert("POST OK!");
      _txtApellidoPost.value = "";
      _txtNombrePost.value = "";
      _txtIdentidadPost.value = "";
      _txtTipoidentidadPost.value = "";
      _txtTelefonoPost.value = "";
      _txtDomicilioPost.value = "";
      _txtIdPuestoPost.value = "";
      _txtFeAltaPost.value = "";
      _txtFeOperacionPost.value = "";
      _txtDescripcionOpPost.value = "";
      _txtActivoPost.value = "";
      _txtNombrePost.focus();
    },
    error: function (error) {
      alert(error);
    },
  });
}

//FUNCION DELETE

let idEliminar = "";

function eliminar(idEliminar) {
  const _txtIDEliminar = document.getElementById("txtIDEliminar");

  idEliminar = {
    id: _txtIDEliminar.value,
  };

  $.ajax({
    type: "DELETE",
    dataType: "json",
    url: "http://localhost:53498/api/Empleado/" + idEliminar.id,
    data: idEliminar,
    success: function (data) {
      alert("DELETE OK!");
      _txtIDEliminar.value = "";
      _txtIDEliminar.focus();
    },
    error: function (error) {
      alert("Debe seleccionar un ID pre-existente");
    },
  });
}

//FUNCION BUSCAR POR ID EN DELETE

function buscarDelete(id) {
  const _txtIDEliminar = document.getElementById("txtIDEliminar");
  id = _txtIDEliminar.value;

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:53498/api/Empleado/" + id,
    success: function (data) {
      const txtNombreDelete = document.getElementById("txtNombreDelete");
      const txtApellidoDelete = document.getElementById("txtApellidoDelete");
      const txtDireccionDelete = document.getElementById("txtDireccionDelete");
      const txtTelefonoDelete = document.getElementById("txtTelefonoDelete");

      txtNombreDelete.value = data.Nombre;
      txtApellidoDelete.value = data.Apellido;
      txtDireccionDelete.value = data.Direccion;
      txtTelefonoDelete.value = data.Telefono;
    },
  });
}

//FUNCION BUSCAR POR ID EN PUT

function buscarPut(id) {
  const txtIDPut = document.getElementById("txtIDPut");
  id = txtIDPut.value;

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:53498/api/Empleado/" + id,
    success: function (data) {
      const _txtNombrePut = document.getElementById("txtNombrePut");
      const _txtApellidoPut = document.getElementById("txtApellidoPut");
      const _txtDireccionPut = document.getElementById("txtDireccionPut");
      const _txtTelefonoPut = document.getElementById("txtTelefonoPut");

      _txtNombrePut.value = data.Nombre;
      _txtApellidoPut.value = data.Apellido;
      _txtDireccionPut.value = data.Direccion;
      _txtTelefonoPut.value = data.Telefono;
    },
  });
}

//FUNCION SELECT POR ID

function selectID() {
  fetch("http://localhost:53498/api/Empleado")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtID");
      data.forEach((o) => {
        let _option = `<option value="${o.Idempleado}">${o.Idempleado}</option>`;

        _select.innerHTML += _option;
      });
    });
}

//FUNCION SELECT POR ID EN PUT

function selectIDPut() {
  fetch("http://localhost:53498/api/Empleado")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDPut");
      data.forEach((o) => {
        let _option = `<option value="${o.Idempleado}">${o.Idempleado}</option>`;

        _select.innerHTML += _option;
      });
    });
}

//FUNCION SELECT POR ID EN DELETE

function selectIDDelete() {
  fetch("http://localhost:53498/api/Empleado")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDEliminar");
      data.forEach((o) => {
        let _option = `<option value="${o.Idempleado}">${o.Idempleado}</option>`;

        _select.innerHTML += _option;
      });
    });
}

//FUNCION VALIDAR CAMPOS EN POST

function validarPost() {
  const txtNombre = document.getElementById("txtNombrePost");
  const txtApellido = document.getElementById("txtApellidoPost");
  const txtDireccion = document.getElementById("txtDireccionPost");
  const txtTelefono = document.getElementById("txtTelefonoPost");

  if (txtNombre.value === "" || txtApellido.value === "" || txtDireccion.value === "" || txtTelefono.value === "") {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  }

  else {
    return post(obj);
  }
}

//FUNCION VALIDAR CAMPOS EN PUT

function validarPut() {
  const _txtIDPut = document.getElementById("txtIDPut");
  const _txtNombrePut = document.getElementById("txtNombrePut");
  const _txtApellidoPut = document.getElementById("txtApellidoPut");
  const _txtDireccionPut = document.getElementById("txtDireccionPut");
  const _txtTelefonoPut = document.getElementById("txtTelefonoPut");

  if (_txtIDPut.value === "" || _txtNombrePut.value === "" || _txtApellidoPut.value === "" || _txtDireccionPut.value === "" || _txtTelefonoPut.value === "") {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  }

  else {
    return put(obj);
  }
}