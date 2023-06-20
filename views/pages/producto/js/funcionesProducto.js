//FUNCION GET

function getAll() {
  fetch("http://localhost:53498/api/Producto")
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getAll");
      data.forEach((o) => {
        let _tr = `<tr>
        <td>${o.Idproducto} </td>
        <td>${o.Descripcion} </td>
        <td>${o.Tipo} </td>  
        <td>${o.Unidad} </td> 
        <td>${o.Peso_Helado} </td> 
        <td>${o.Peso_Total} </td> 
         

        </tr>`;

        _tbody.innerHTML += _tr;
      });
    });
}

//FUNCION GET BY ID

function getId(id) {
  const _txtID = document.getElementById("txtID");
  id = _txtID.value;

  fetch("http://localhost:53498/api/Producto/" + id)
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getId");
      let _tr = `<tr>
      <td>${data.Idproducto} </td>
        <td>${data.Descripcion} </td>
        <td>${data.Tipo} </td>  
        <td>${data.Unidad} </td> 
        <td>${data.Peso_Helado} </td> 
        <td>${data.Peso_Total} </td> 
       
      </tr>`;

      _tbody.innerHTML += _tr;

      _txtID.focus();
    });
}

//FUNCION SELECT POR ID

function selectID() {
  fetch("http://localhost:53498/api/Producto")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtID");
      data.forEach((o) => {
        let _option = `<option value="${o.Idproducto}">${o.Idproducto}</option>`;

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
  // const txtFechaAltaPut = document.getElementById("txtFechaAltaPut");
  // const txtFechaOperacionPut = document.getElementById("txtFechaOperacionPut");
  // const txtProductoBajaPut = document.getElementById("txtProductoBajaPut");
  // const txtOperacionPut = document.getElementById("txtOperacionPut");
  // const txtDescripcionOperacionPut = document.getElementById("txtDescripcionOperacionPut");
  // const txtIdEmpleadoPut = document.getElementById("txtIdEmpleadoPut");

  obj = {
    Idproducto: txtIDPut.value,
    Descripcion: txtDescripcionPut.value,
    Tipo: txtTipoPut.value,
    Unidad: txtUnidadPut.value,
    Peso_Helado: txtPesoHeladoPut.value,
    Peso_Total: txtPesoTotalPut.value,
    // FechaAlta: txtFechaAltaPut.value,
    // FechaOperacion: txtFechaOperacionPut.value,
    // ProductoBaja: txtProductoBajaPut.value,
    // Operacion: txtOperacionPut.value,
    // DescripcionOperacion: txtDescripcionOperacionPut.value,
    // IdEmpleado: txtIdEmpleadoPut.value,
  };
  $.ajax({
    type: "PUT",
    dataType: "json",
    url: "http://localhost:53498/api/Producto/" + obj.Idproducto,
    data: obj,
    success: function (data) {
      alert("PUT OK!");
      txtIDPut.value = "";
      txtDescripcionPut.value = "";
      txtTipoPut.value = "";
      txtUnidadPut.value = "";
      txtPesoHeladoPut.value = "";
      txtPesoTotalPut.value = "";
      // txtFechaAltaPut.value = "";
      // txtFechaOperacionPut.value = "";
      // txtProductoBajaPut.value = "";
      // txtOperacionPut.value = "";
      // txtDescripcionOperacionPut.value = "";
      // txtIdEmpleadoPut.value = "";
      txtIDPut.focus();
    },
    error: function (error) {
      alert("Debe seleccionar un ID pre-existente");
    },
  });
}

//FUNCION SELECT POR ID EN PUT

function selectIDPut() {
  fetch("http://localhost:53498/api/Producto")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDPut");
      data.forEach((o) => {
        let _option = `<option value="${o.Idproducto}">${o.Idproducto}</option>`;

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
  // const txtFechaAltaPut = document.getElementById("txtFechaAltaPut");
  // const txtFechaOperacionPut = document.getElementById("txtFechaOperacionPut");
  // const txtProductoBajaPut = document.getElementById("txtProductoBajaPut");
  // const txtOperacionPut = document.getElementById("txtOperacionPut");
  // const txtDescripcionOperacionPut = document.getElementById("txtDescripcionOperacionPut");
  // const txtIdEmpleadoPut = document.getElementById("txtIdEmpleadoPut");

  if (
    txtIDPut.value === "" ||
    txtDescripcionPut.value === "" ||
    txtTipoPut.value === "" ||
    txtUnidadPut.value === "" ||
    txtPesoHeladoPut.value === "" ||
    txtPesoTotalPut.value === ""
    )
     {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  } else {
    return put(obj);
  }
}

//FUNCION BUSCAR POR ID EN PUT

function buscarPut(Idproducto) {
  const txtIDPut = document.getElementById("txtIDPut");
  Idproducto = txtIDPut.value;

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:53498/api/Producto/" + Idproducto,
    success: function (data) {
      const txtDescripcionPut = document.getElementById("txtDescripcionPut");
      const txtTipoPut = document.getElementById("txtTipoPut");
      const txtUnidadPut = document.getElementById("txtUnidadPut");
      const txtPesoHeladoPut = document.getElementById("txtPesoHeladoPut");
      const txtPesoTotalPut = document.getElementById("txtPesoTotalPut");
      // const txtFechaAltaPut = document.getElementById("txtFechaAltaPut");
      // const txtFechaOperacionPut = document.getElementById("txtFechaOperacionPut");
      // const txtProductoBajaPut = document.getElementById("txtProductoBajaPut");
      // const txtOperacionPut = document.getElementById("txtOperacionPut");
      // const txtDescripcionOperacionPut = document.getElementById("txtDescripcionOperacionPut");
      // const txtIdEmpleadoPut = document.getElementById("txtIdEmpleadoPut");

      txtDescripcionPut.value = data.Descripcion;
      txtTipoPut.value = data.Tipo;
      txtUnidadPut.value = data.Unidad;
      txtPesoHeladoPut.value = data.PesoHelado;
      txtPesoTotalPut.value = data.PesoTotal;
      // txtFechaAltaPut.value = data.FechaAlta;
      // txtFechaOperacionPut.value = data.FechaOperacion;
      // txtProductoBajaPut.value = data.ProductoBaja;
      // txtOperacionPut.value = data.Operacion;
      // txtDescripcionOperacionPut.value = data.DescripcionOperacion;
      // txtIdEmpleadoPut.value = data.IdEmpleado;
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
    url: "http://localhost:53498/api/Producto",
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
    Id: _txtIDEliminar.value,
  };

  $.ajax({
    type: "DELETE",
    dataType: "json",
    url: "http://localhost:53498/api/Producto/" + idEliminar.id,
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
    url: "http://localhost:53498/api/Producto/" + id,
    success: function (data) {
      // const txtIdProductoDelete = document.getElementById("txtIdProductoDelete");
      const txtDescripcionDelete = document.getElementById("txtDescripcionDelete");
      const txtTipoDelete = document.getElementById("txtTipoDelete");
      const txtUnidadDelete = document.getElementById("txtUnidadDelete");
      const txtPesoHeladoDelete = document.getElementById("txtPesoHeladoDelete");
      const txtPesoTotalDelete = document.getElementById("txtPesoTotalDelete");

      // txtIdProductoDelete.value=data.Idproducto;
      txtDescripcionDelete.value = data.Descripcion;
      txtTipoDelete.value = data.Tipo;
      txtUnidadDelete.value = data.Unidad;
      txtPesoHeladoDelete.value = data.Peso_Helado;
      txtPesoTotalDelete.value = data.Peso_Total;
      
    },
  });
}

//FUNCION SELECT POR ID EN DELETE

function selectIDDelete() {
  fetch("http://localhost:53498/api/Producto")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDEliminar");
      data.forEach((o) => {
        let _option = `<option value="${o.Idproducto}">${o.Idproducto}</option>`;

        _select.innerHTML += _option;
      });
    });
}
