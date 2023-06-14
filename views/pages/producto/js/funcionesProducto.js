//FUNCION GET

function getAll() {
  fetch("http://localhost:56848/api/Producto")
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getAll");
      data.forEach((o) => {
        let _tr = `<tr>
        <td>${o.IdProducto} </td>
        <td>${o.Descripcion} </td>
        <td>${o.Tipo} </td>  
        <td>${o.Unidad} </td> 
        <td>${o.PesoHelado} </td> 
        <td>${o.PesoTotal} </td> 
        <td>${o.FechaAlta} </td> 
        <td>${o.FechaOperacion} </td> 
        <td>${o.ProductoBaja} </td> 
        <td>${o.Operacion} </td> 
        <td>${o.DescripcionOperacion} </td> 
        <td>${o.IdEmpleado} </td> 

        </tr>`;

        _tbody.innerHTML += _tr;
      });
    });
}

//FUNCION GET BY ID

function getId(id) {
  const _txtID = document.getElementById("txtID");
  id = _txtID.value;

  fetch("http://localhost:56848/api/Producto/" + id)
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getId");
      let _tr = `<tr>
      <td>${data.IdProducto} </td>
        <td>${data.Descripcion} </td>
        <td>${data.Tipo} </td>  
        <td>${data.Unidad} </td> 
        <td>${data.PesoHelado} </td> 
        <td>${data.PesoTotal} </td> 
        <td>${data.FechaAlta} </td> 
        <td>${data.FechaOperacion} </td> 
        <td>${data.ProductoBaja} </td> 
        <td>${data.Operacion} </td> 
        <td>${data.DescripcionOperacion} </td> 
        <td>${data.IdEmpleado} </td> 
      </tr>`;

      _tbody.innerHTML += _tr;

      _txtID.focus();
    });
}

//FUNCION SELECT POR ID

function selectID() {
  fetch("http://localhost:56848/api/Producto")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtID");
      data.forEach((o) => {
        let _option = `<option value="${o.IdProducto}">${o.IdProducto}</option>`;

        _select.innerHTML += _option;
      });
    });
}

//FUNCION PUT

let obj = "";

function put(obj) {
  const txtIDPut = document.getElementById("txtIDPut");
  const txtDescripcionPut = document.getElementById("txtDescripcionPut");
  const txtTipoPut = document.getElementById("txtTipoPut");
  const txtUnidadPut = document.getElementById("txtUnidadPut");
  const txtPesoHeladoPut = document.getElementById("txtPesoHeladoPut");
  const txtPesoTotalPut = document.getElementById("txtPesoTotalPut");
  const txtFechaAltaPut = document.getElementById("txtFechaAltaPut");
  const txtFechaOperacionPut = document.getElementById("txtFechaOperacionPut");
  const txtProductoBajaPut = document.getElementById("txtProductoBajaPut");
  const txtOperacionPut = document.getElementById("txtOperacionPut");
  const txtDescripcionOperacionPut = document.getElementById(
    "txtDescripcionOperacionPut"
  );
  const txtIdEmpleadoPut = document.getElementById("txtIdEmpleadoPut");

  obj = {
    IdProducto: txtIDPut.value,
    Descripcion: txtDescripcionPut.value,
    Tipo: txtTipoPut.value,
    Unidad: txtUnidadPut.value,
    PesoHelado: txtPesoHeladoPut.value,
    PesoTotal: txtPesoTotalPut.value,
    FechaAlta: txtFechaAltaPut.value,
    FechaOperacion: txtFechaOperacionPut.value,
    ProductoBaja: txtProductoBajaPut.value,
    Operacion: txtOperacionPut.value,
    DescripcionOperacion: txtDescripcionOperacionPut.value,
    IdEmpleado: txtIdEmpleadoPut.value,
  };
  $.ajax({
    type: "PUT",
    dataType: "json",
    url: "http://localhost:56848/api/Producto/" + obj.IdProducto,
    data: obj,
    success: function (data) {
      alert("PUT OK!");
      txtIDPut.value = "";
      txtDescripcionPut.value = "";
      txtTipoPut.value = "";
      txtUnidadPut.value = "";
      txtPesoHeladoPut.value = "";
      txtPesoTotalPut.value = "";
      txtFechaAltaPut.value = "";
      txtFechaOperacionPut.value = "";
      txtProductoBajaPut.value = "";
      txtOperacionPut.value = "";
      txtDescripcionOperacionPut.value = "";
      txtIdEmpleadoPut.value = "";
      txtIDPut.focus();
    },
    error: function (error) {
      alert("Debe seleccionar un ID pre-existente");
    },
  });
}

//FUNCION SELECT POR ID EN PUT

function selectIDPut() {
  fetch("http://localhost:56848/api/Producto")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDPut");
      data.forEach((o) => {
        let _option = `<option value="${o.IdProducto}">${o.IdProducto}</option>`;

        _select.innerHTML += _option;
      });
    });
}

//FUNCION VALIDAR CAMPOS EN PUT

function validarPut() {
  const txtIDPut = document.getElementById("txtIDPut");
  const txtDescripcionPut = document.getElementById("txtDescripcionPut");
  const txtTipoPut = document.getElementById("txtTipoPut");
  const txtUnidadPut = document.getElementById("txtUnidadPut");
  const txtPesoHeladoPut = document.getElementById("txtPesoHeladoPut");
  const txtPesoTotalPut = document.getElementById("txtPesoTotalPut");
  const txtFechaAltaPut = document.getElementById("txtFechaAltaPut");
  const txtFechaOperacionPut = document.getElementById("txtFechaOperacionPut");
  const txtProductoBajaPut = document.getElementById("txtProductoBajaPut");
  const txtOperacionPut = document.getElementById("txtOperacionPut");
  const txtDescripcionOperacionPut = document.getElementById("txtDescripcionOperacionPut");
  const txtIdEmpleadoPut = document.getElementById("txtIdEmpleadoPut");

  if (
    txtIDPut.value === "" ||
    txtDescripcionPut.value === "" ||
    txtTipoPut.value === "" ||
    txtUnidadPut.value === "" ||
    txtPesoHeladoPut.value === "" ||
    txtPesoTotalPut.value === "" ||
    txtFechaAltaPut.value === "" ||
    txtFechaOperacionPut.value === "" ||
    txtProductoBajaPut.value === "" ||
    txtOperacionPut.value === "" ||
    txtDescripcionOperacionPut.value === "" ||
    txtIdEmpleadoPut.value === ""
  ) {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  } else {
    return put(obj);
  }
}

//FUNCION BUSCAR POR ID EN PUT

function buscarPut(IdProducto) {
  const txtIDPut = document.getElementById("txtIDPut");
  IdProducto = txtIDPut.value;

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:56848/api/Producto/" + IdProducto,
    success: function (data) {
      const txtDescripcionPut = document.getElementById("txtDescripcionPut");
      const txtTipoPut = document.getElementById("txtTipoPut");
      const txtUnidadPut = document.getElementById("txtUnidadPut");
      const txtPesoHeladoPut = document.getElementById("txtPesoHeladoPut");
      const txtPesoTotalPut = document.getElementById("txtPesoTotalPut");
      const txtFechaAltaPut = document.getElementById("txtFechaAltaPut");
      const txtFechaOperacionPut = document.getElementById("txtFechaOperacionPut");
      const txtProductoBajaPut = document.getElementById("txtProductoBajaPut");
      const txtOperacionPut = document.getElementById("txtOperacionPut");
      const txtDescripcionOperacionPut = document.getElementById("txtDescripcionOperacionPut");
      const txtIdEmpleadoPut = document.getElementById("txtIdEmpleadoPut");

      txtDescripcionPut.value = data.Descripcion;
      txtTipoPut.value = data.Tipo;
      txtUnidadPut.value = data.Unidad;
      txtPesoHeladoPut.value = data.PesoHelado;
      txtPesoTotalPut.value = data.PesoTotal;
      txtFechaAltaPut.value = data.FechaAlta;
      txtFechaOperacionPut.value = data.FechaOperacion;
      txtProductoBajaPut.value = data.ProductoBaja;
      txtOperacionPut.value = data.Operacion;
      txtDescripcionOperacionPut.value = data.DescripcionOperacion;
      txtIdEmpleadoPut.value = data.IdEmpleado;
    },
  });
}

//FUNCION POST

function post(obj) {
  const txtDescripcionPost = document.getElementById("txtDescripcionPost");
  const txtTipoPost = document.getElementById("txtTipoPost");

  obj = {
    Descripcion: txtDescripcionPost.value,
    Tipo: txtTipoPost.value,
  };
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "http://localhost:56848/api/Producto",
    data: obj,
    success: function (data) {
      alert("POST OK!");
      txtDescripcionPost.value = "";
      txtTipoPost.value = "";
      txtDescripcionPost.focus();
    },
    error: function (error) {
      alert(error);
    },
  });
}

//FUNCION VALIDAR CAMPOS EN POST

function validarPost() {
  const txtDescripcionPost = document.getElementById("txtDescripcionPost");
  const txtTipoPost = document.getElementById("txtTipoPost");

  if (txtDescripcionPost.value === "" || txtTipoPost.value === "") {
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
    url: "http://localhost:56848/api/Producto/" + idEliminar.id,
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
    url: "http://localhost:56848/api/Producto/" + id,
    success: function (data) {
      const txtDescripcionDelete = document.getElementById(
        "txtDescripcionDelete"
      );
      const txtTipoDelete = document.getElementById("txtTipoDelete");
      txtDescripcionDelete.value = data.Descripcion;
      txtTipoDelete.value = data.Tipo;
    },
  });
}

//FUNCION SELECT POR ID EN DELETE

function selectIDDelete() {
  fetch("http://localhost:56848/api/Producto")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDEliminar");
      data.forEach((o) => {
        let _option = `<option value="${o.IdProducto}">${o.IdProducto}</option>`;

        _select.innerHTML += _option;
      });
    });
}
