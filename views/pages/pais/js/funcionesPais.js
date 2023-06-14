//FUNCION GET

function getAll() {
  fetch("http://localhost:56848/api/Pais")
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getAll");
      data.forEach((o) => {
        let _tr = `<tr>
        <td>${o.IdPais} </td>
        <td>${o.CodigoPostal} </td> 
        <td>${o.NombrePais} </td> 
        </tr>`;

        _tbody.innerHTML += _tr;
      });
    });
}

//FUNCION GET BY ID

function getId(id) {
  const _txtID = document.getElementById("txtID");
  id = _txtID.value;

  fetch("http://localhost:56848/api/Pais/" + id)
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getId");
      let _tr = `<tr>
      <td>${data.IdPais} </td>
      <td>${data.CodigoPostal} </td> 
      <td>${data.NombrePais} </td>  
      </tr>`;

      _tbody.innerHTML += _tr;

      _txtID.focus();
    });
}

//FUNCION SELECT POR ID

function selectID() {
  fetch("http://localhost:56848/api/Pais")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtID");
      data.forEach((o) => {
        let _option = `<option value="${o.IdPais}">${o.IdPais}</option>`;

        _select.innerHTML += _option;
      });
    });
}

//FUNCION PUT

let obj = "";

function put(obj) {
  const _txtIDPut = document.getElementById("txtIDPut");
  const _txtCodigoPostalPut = document.getElementById("txtCodigoPostalPut");
  const _txtNombrePaisPut = document.getElementById("txtNombrePaisPut");

  obj = {
    IdPais: _txtIDPut.value,
    CodigoPostal: _txtCodigoPostalPut.value,
    NombrePais: _txtNombrePaisPut.value,
  };
  $.ajax({
    type: "PUT",
    dataType: "json",
    url: "http://localhost:56848/api/Pais/" + obj.IdPais,
    data: obj,
    success: function (data) {
      alert("PUT OK!");
      _txtIDPut.value = "";
      _txtCodigoPostalPut.value = "";
      _txtNombrePaisPut.value = "";
      _txtIDPut.focus();
    },
    error: function (error) {
      alert("Debe seleccionar un ID pre-existente");
    },
  });
}

//FUNCION SELECT POR ID EN PUT

function selectIDPut() {
  fetch("http://localhost:56848/api/Pais")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDPut");
      data.forEach((o) => {
        let _option = `<option value="${o.IdPais}">${o.IdPais}</option>`;

        _select.innerHTML += _option;
      });
    });
}

//FUNCION VALIDAR CAMPOS EN PUT

function validarPut() {
  const _txtIDPut = document.getElementById("txtIDPut");
  const _txtCodigoPostalPut = document.getElementById("txtCodigoPostalPut");
  const _txtNombrePaisPut = document.getElementById("txtNombrePaisPut");

  if (
    _txtIDPut.value === "" ||
    _txtCodigoPostalPut.value === "" ||
    _txtNombrePaisPut.value === ""
  ) {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  } else {
    return put(obj);
  }
}

//FUNCION BUSCAR POR ID EN PUT

function buscarPut(IdPais) {
  const txtIDPut = document.getElementById("txtIDPut");
  IdPais = txtIDPut.value;

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:56848/api/Pais/" + IdPais,
    success: function (data) {
      const _txtCodigoPostalPut = document.getElementById("txtCodigoPostalPut");
      const _txtNombrePaisPut = document.getElementById("txtNombrePaisPut");

      _txtCodigoPostalPut.value = data.CodigoPostal;
      _txtNombrePaisPut.value = data.NombrePais;
    },
  });
}

//FUNCION POST

function post(obj) {
  const txtCodigoPostalPost = document.getElementById("txtCodigoPostalPost");
  const txtNombrePaisPost = document.getElementById("txtNombrePaisPost");

  obj = {
    CodigoPostal: txtCodigoPostalPost.value,
    NombrePais: txtNombrePaisPost.value,
  };
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "http://localhost:56848/api/Pais",
    data: obj,
    success: function (data) {
      alert("POST OK!");
      txtCodigoPostalPost.value = "";
      txtNombrePaisPost.value = "";
      txtCodigoPostalPost.focus();
    },
    error: function (error) {
      alert(error);
    },
  });
}

//FUNCION VALIDAR CAMPOS EN POST

function validarPost() {
  const txtCodigoPostalPost = document.getElementById("txtCodigoPostalPost");
  const txtNombrePaisPost = document.getElementById("txtNombrePaisPost");

  if (txtCodigoPostalPost.value === "" || txtNombrePaisPost.value === "" ) {
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
    url: "http://localhost:56848/api/Pais/" + idEliminar.id,
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
    url: "http://localhost:56848/api/Pais/" + id,
    success: function (data) {
      const txtCodigoPostalDelete = document.getElementById("txtCodigoPostalDelete");
      const txtNombrePaisDelete = document.getElementById("txtNombrePaisDelete");
      txtCodigoPostalDelete.value = data.CodigoPostal;
      txtNombrePaisDelete.value = data.NombrePais;
    },
  });
}

//FUNCION SELECT POR ID EN DELETE

function selectIDDelete() {
  fetch("http://localhost:56848/api/Pais")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDEliminar");
      data.forEach((o) => {
        let _option = `<option value="${o.IdPais}">${o.IdPais}</option>`;

        _select.innerHTML += _option;
      });
    });
}
