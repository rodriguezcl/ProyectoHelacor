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
         </tr>`;
        // <td>${o.Fecha_Alta} </td>
        // <td>${o.Fecha_Operacion} </td>
        // <td>${o.Descripcion_Operacion} </td>
        // <td>${o.Activo} </td>

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
        </tr>`;

      // <td>${data.Fecha_Alta} </td>
      // <td>${data.Fecha_Operacion} </td>
      // <td>${data.Descripcion_Operacion} </td>
      // <td>${data.Activo} </td>

      _tbody.innerHTML += _tr;

      _txtID.focus();
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

//FUNCION PUT

let obj = "";

function put(obj) {
  const _txtIDPut = document.getElementById("txtIDPut");
  const _txtApellidoPut = document.getElementById("txtApellidoPut");
  const _txtNombrePut = document.getElementById("txtNombrePut");
  const _txtIdentidad = document.getElementById("txtIdentidadPut");
  const _txtTipoidentidad = document.getElementById("txtTipoIdentidadPut");
  const _txtTelefonoPut = document.getElementById("txtTelefonoPut");
  const _txtDomicilio = document.getElementById("txtDomicilioPut");
  const _txtIdPuesto = document.getElementById("txtPuestoPut");
  // const _txtFeAlta = document.getElementById("txtFeAlta");
  // const _txtFeOperacion = document.getElementById("txtFeOperacion");
  // const _txtDescripcionOp = document.getElementById("txtDescripcionOp");
  // const _txtActivo = document.getElementById("txtActivo");

  obj = {
    Idempleado: _txtIDPut.value,
    Apellido: _txtApellidoPut.value,
    Nombre: _txtNombrePut.value,
    I_Identidad: _txtIdentidad.value,
    Tipo_I_Identidad: _txtTipoidentidad.value,
    Telefono: _txtTelefonoPut.value,
    Domiclio: _txtDomicilio.value,
    Idpuesto: _txtIdPuesto.value,
    // Fecha_Alta: _txtFeAlta.value,
    // Fecha_Operacion: _txtFeOperacion.value,
    // Descripcion_Operacion: _txtDescripcionOp.value,
    // Activo: _txtActivo.value,
  };
  $.ajax({
    type: "PUT",
    dataType: "json",
    url: "http://localhost:53498/api/Empleado/" + obj.Idempleado,
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
      // _txtFeAlta.value = "";
      // _txtFeOperacion.value = "";
      // _txtDescripcionOp.value = "";
      // _txtActivo.value = "";

      _txtIDPut.focus();
    },
    error: function (error) {
      alert("Debe seleccionar un ID pre-existente");
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
      const _txtApellidoPut = document.getElementById("txtApellidoPut");
      const _txtNombrePut = document.getElementById("txtNombrePut");
      const _txtIdentidad = document.getElementById("txtIdentidadPut");
      const _txtTipoidentidad = document.getElementById("txtTipoIdentidadPut");
      const _txtTelefonoPut = document.getElementById("txtTelefonoPut");
      const _txtDomicilio = document.getElementById("txtDomicilioPut");
      const _txtIdPuesto = document.getElementById("txtPuestoPut");

      _txtApellidoPut.value = data.Apellido;
      _txtNombrePut.value = data.Nombre;
      _txtIdentidad.value = data.I_Identidad;
      _txtTipoidentidad.value = data.Tipo_I_Identidad;
      _txtTelefonoPut.value = data.Telefono;
      _txtDomicilio.value = data.Domiclio;
      _txtIdPuesto.value = data.Idpuesto;
    },
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

//FUNCION VALIDAR CAMPOS EN PUT

function validarPut() {
  const _txtIDPut = document.getElementById("txtIDPut");
  const _txtApellidoPut = document.getElementById("txtApellidoPut");
  const _txtNombrePut = document.getElementById("txtNombrePut");
  const _txtIdentidadPut = document.getElementById("txtIdentidadPut");
  const _txtTipoIdentidadPut = document.getElementById("txtTipoIdentidadPut");
  const _txtTelefonoPut = document.getElementById("txtTelefonoPut");
  const _txtDomicilioPut = document.getElementById("txtDomicilioPut");
  const _txtPuestoPut = document.getElementById("txtPuestoPut");
  // const _txtFeAltaPut = document.getElementById("txtFeAltaPut");
  // const _txtFeOperacionPut = document.getElementById("txtFeOperacionPut");
  // const _txtDescripcionPut = document.getElementById("txtDescripcionPut");
  // const _txtActivoPut = document.getElementById("txtActivoPut");

  if (
    _txtIDPut.value === "" ||
    _txtApellidoPut.value === "" ||
    _txtNombrePut.value === "" ||
    _txtIdentidadPut.value === "" ||
    _txtTipoIdentidadPut.value === "" ||
    _txtTelefonoPut.value === "" ||
    _txtDomicilioPut.value === "" ||
    _txtPuestoPut.value === ""
  ) {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  } else {
    return put(obj);
  }
}

//FUNCION POST

function post(obj) {
  const _txtApellidoPost = document.getElementById("txtApellidoPost");
  const _txtNombrePost = document.getElementById("txtNombrePost");
  const _txtIdentidadPost = document.getElementById("txtIdentidadPost");
  const _txtTipoidentidadPost = document.getElementById("txtTipoidentidadPost");
  const _txtTelefonoPost = document.getElementById("txtTelefonoPost");
  const _txtDomicilioPost = document.getElementById("txtDomicilioPost");
  const _txtIdPuestoPost = document.getElementById("txtIdPuestoPost");
  // const _txtFeAltaPost = document.getElementById("txtFeAltaPost");
  // const _txtFeOperacionPost = document.getElementById("txtFeOperacionPost");
  // const _txtDescripcionOpPost = document.getElementById("txtDescripcionOpPost");
  // const _txtActivoPost = document.getElementById("txtActivoPost");

  obj = {
    Apellido: _txtApellidoPost.value,
    Nombre: _txtNombrePost.value,
    I_Identidad: _txtIdentidadPost.value,
    Tipo_I_Identidad: _txtTipoidentidadPost.value,
    Telefono: _txtTelefonoPost.value,
    Domiclio: _txtDomicilioPost.value,
    Idpuesto: _txtIdPuestoPost.value,
    // Fecha_Alta: _txtFeAltaPost.value,
    // Fecha_Operacion: _txtFeOperacionPost.value,
    // Descripcion_Operacion: _txtDescripcionOpPost.value,
    // Activo: _txtActivoPost.value,
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
      // _txtFeAltaPost.value = "";
      // _txtFeOperacionPost.value = "";
      // _txtDescripcionOpPost.value = "";
      // _txtActivoPost.value = "";
      _txtNombrePost.focus();
    },
    error: function (error) {
      alert(error);
    },
  });
}

//FUNCION VALIDAR CAMPOS EN POST

function validarPost() {
  const txtApellido = document.getElementById("txtApellidoPost");
  const txtNombre = document.getElementById("txtNombrePost");
  const txtIdentidadPost = document.getElementById("txtIdentidadPost");
  const txtTipoidentidadPost = document.getElementById("txtTipoidentidadPost");
  const txtTelefono = document.getElementById("txtTelefonoPost");
  const txtDomicilioPost = document.getElementById("txtDomicilioPost");
  const txtIdPuestoPost = document.getElementById("txtIdPuestoPost");
  // const txtFeAltaPost=document.getElementById("txtFeAltaPost");
  // const txtFeOperacionPost=document.getElementById("txtFeOperacionPost");
  // const txtDescripcionOpPost=document.getElementById("txtDescripcionOpPost");
  // const txtActivoPost=document.getElementById("txtActivoPost");

  if (
    txtApellido.value === "" ||
    txtNombre.value === "" ||
    txtIdentidadPost.value === "" ||
    txtTipoidentidadPost.value === "" ||
    txtTelefono.value === "" ||
    txtDomicilioPost.value === "" ||
    txtIdPuestoPost.value === ""
  ) {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  } else {
    return post(obj);
  }
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
      const txtApellidoDelete = document.getElementById("txtApellidoDelete");
      const txtNombreDelete = document.getElementById("txtNombreDelete");
      const txtIndentidadDelete = document.getElementById(
        "txtIndentidadDelete"
      );
      const txtTipoIdentidadDelete = document.getElementById(
        "txtTipoIdentidadDelete"
      );
      const txtTelefonoDelete = document.getElementById("txtTelefonoDelete");
      const txtDomicilioDelete = document.getElementById("txtDomicilioDelete");
      const txtPuestoDelete = document.getElementById("txtPuestoDelete");
      // const txtFeAltaDelete = document.getElementById("txtFeAltaDelete");
      // const txtFeOpeDelete = document.getElementById("txtFeOpeDelete");
      // const txtDescripcionDelete = document.getElementById("txtDescripcionDelete");
      // const txtActivo = document.getElementById("txtActivo");

      txtNombreDelete.value = data.Nombre;
      txtApellidoDelete.value = data.Apellido;
      txtIndentidadDelete.value = data.I_Identidad;
      txtTipoIdentidadDelete.value = data.Tipo_I_Identidad;
      txtTelefonoDelete.value = data.Telefono;
      txtDomicilioDelete.value = data.Domiclio;
      txtPuestoDelete.value = data.Idpuesto;
      // txtFeAltaDelete.value = data.Fecha_Alta;
      // txtFeOpeDelete.value = data.Fecha_Operacion;
      // txtDescripcionDelete.value = data.Descripcion_Operacion;
      // txtActivo.value = data.Activo;
    },
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
