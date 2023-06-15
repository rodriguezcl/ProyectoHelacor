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
  const _txtNombrePut = document.getElementById("txtNombrePut");
  const _txtApellidoPut = document.getElementById("txtApellidoPut");
  const _txtDireccionPut = document.getElementById("txtDireccionPut");
  const _txtTelefonoPut = document.getElementById("txtTelefonoPut");

  obj = {
    id: _txtIDPut.value,
    Nombre: _txtNombrePut.value,
    Apellido: _txtApellidoPut.value,
    Direccion: _txtDireccionPut.value,
    Telefono: _txtTelefonoPut.value,
  };
  $.ajax({
    type: "PUT",
    dataType: "json",
    url: "http://localhost:53498/api/Empleado/" + obj.id,
    data: obj,
    success: function (data) {
      alert("PUT OK!");
      _txtIDPut.value = "";
      _txtNombrePut.value = "";
      _txtApellidoPut.value = "";
      _txtDireccionPut.value = "";
      _txtTelefonoPut.value = "";
      _txtIDPut.focus();
    },
    error: function (error) {
      alert("Debe seleccionar un ID pre-existente");
    },
  });
}

//FUNCION POST

function post(obj) {
  const _txtNombrePost = document.getElementById("txtNombrePost");
  const _txtApellidoPost = document.getElementById("txtApellidoPost");
  const _txtDireccionPost = document.getElementById("txtDireccionPost");
  const _txtTelefonoPost = document.getElementById("txtTelefonoPost");

  obj = {
    Nombre: _txtNombrePost.value,
    Apellido: _txtApellidoPost.value,
    Direccion: _txtDireccionPost.value,
    Telefono: _txtTelefonoPost.value,
  };
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "http://localhost:53498/api/Empleado",
    data: obj,
    success: function (data) {
      alert("POST OK!");
      _txtNombrePost.value = "";
      _txtApellidoPost.value = "";
      _txtDireccionPost.value = "";
      _txtTelefonoPost.value = "";
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
  fetch("http://localhost:58112/api/Usuario")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDPut");
      data.forEach((o) => {
        let _option = `<option value="${o.id}">${o.id}</option>`;

        _select.innerHTML += _option;
      });
    });
}

//FUNCION SELECT POR ID EN DELETE

function selectIDDelete() {
  fetch("http://localhost:58112/api/Usuario")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDEliminar");
      data.forEach((o) => {
        let _option = `<option value="${o.id}">${o.id}</option>`;

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

  else{
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

  else{
    return put(obj);
  }
}