//FUNCION GET

function getAll() {
  fetch("http://localhost:53498/api/Turno")
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getAll");
      data.forEach((o) => {
        let _tr = `<tr>
        <td>${o.Idturno} </td>
        <td>${o.Nombre} </td>
        <td>${o.Descripcion} </td>
        <td>${o.Horario_Inicio} </td>
        <td>${o.Horario_Fin} </td>   
        </tr>`;

        _tbody.innerHTML += _tr;
      });
    });
}

//FUNCION GET BY ID

function getId(id) {
  const _txtID = document.getElementById("txtID");
  id = _txtID.value;

  fetch("http://localhost:53498/api/Turno/" + id)
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getId");
      let _tr = `<tr>
      <td>${data.Idturno} </td>
      <td>${data.Nombre} </td>
      <td>${data.Descripcion} </td>
      <td>${data.Horario_Inicio} </td>
      <td>${data.Horario_Fin} </td>   
      </tr>`;

      _tbody.innerHTML += _tr;

      _txtID.focus();
    });
}

//FUNCION SELECT POR ID

function selectID() {
  fetch("http://localhost:53498/api/Turno")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtID");
      data.forEach((o) => {
        let _option = `<option value="${o.id}">${o.id}</option>`;

        _select.innerHTML += _option;
      });
    });
}

//FUNCION PUT

let obj = "";

function put(obj) {
  const txtIDPut = document.getElementById("txtIDPut");
  const txtDescripcionPut = document.getElementById("txtDescripcionPut");
  const txtHorarioInicioPut = document.getElementById("txtHorarioInicioPut");
  const txtHorarioFinPut = document.getElementById("txtHorarioFinPut");

  obj = {
    Idturno: txtIDPut.value,
    Descripcion: txtDescripcionPut.value,
    Horario_Inicio: txtHorarioInicioPut.value,
    Horario_Fin: txtHorarioFinPut.value,
  };
  $.ajax({
    type: "PUT",
    dataType: "json",
    url: "http://localhost:53498/api/Turno/" + obj.Idturno,
    data: obj,
    success: function (data) {
      alert("PUT OK!");
      txtIDPut.value = "";
      txtDescripcionPut.value = "";
      txtHorarioInicioPut.value = "";
      txtHorarioFinPut.value = "";
      txtIDPut.focus();
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
    url: "http://localhost:53498/api/Turno/" + id,
    success: function (data) {
      const txtDescripcionPut = document.getElementById("txtDescripcionPut");
      const txtHorarioInicioPut = document.getElementById("txtHorarioInicioPut");
      const txtHorarioFinPut = document.getElementById("txtHorarioFinPut");
      
      txtDescripcionPut.value = data.Descripcion;
      txtHorarioInicioPut.value = data.Horario_Inicio;
      txtHorarioFinPut.value = data.Horario_Fin;
    },
  });
}

//FUNCION SELECT POR ID EN PUT

function selectIDPut() {
  fetch("http://localhost:53498/api/Turno")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDPut");
      data.forEach((o) => {
        let _option = `<option value="${o.Idturno}">${o.Idturno}</option>`;

        _select.innerHTML += _option;
      });
    });
}

//FUNCION VALIDAR CAMPOS EN PUT

function validarPut() {
  const txtIDPut = document.getElementById("txtIDPut");
  const txtDescripcionPut = document.getElementById("txtDescripcionPut");
  const txtHorarioInicioPut = document.getElementById("txtHorarioInicioPut");
  const txtHorarioFinPut = document.getElementById("txtHorarioFinPut");

  if (
    txtIDPut.value === "" ||
    txtDescripcionPut.value === "" ||
    txtHorarioInicioPut.value === "" ||
    txtHorarioFinPut.value === ""
  ) {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  } else {
    return put(obj);
  }
}


//FUNCION POST

function post(obj) {

  const txtDescripcionPost = document.getElementById("txtDescripcionPost");
  const txtHorarioInicioPut = document.getElementById("txtHorarioInicioPut");
  const txtHorarioFinPut = document.getElementById("txtHorarioFinPut");

  obj = {
    Descripcion: txtDescripcionPost.value,
    Horario_Inicio: txtHorarioInicioPut.value,
    Horario_Fin: txtHorarioFinPut.value,
  };
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "http://localhost:53498/api/Turno",
    data: obj,
    success: function (data) {
      alert("POST OK!");
      txtDescripcionPost.value = "";
      txtHorarioInicioPut.value = "";
      txtHorarioFinPut.value = "";
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
  const txtHorarioInicioPut = document.getElementById("txtHorarioInicioPut");
  const txtHorarioFinPut = document.getElementById("txtHorarioFinPut");

  if (
    txtDescripcionPost.value === "" ||
    txtHorarioInicioPut.value === "" ||
    txtHorarioFinPut.value === ""
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
    url: "http://localhost:53498/api/Turno/" + idEliminar.id,
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
    url: "http://localhost:53498/api/Turno/" + id,
    success: function (data) {
      const txtIDEliminar = document.getElementById("txtIDEliminar");
      const txtDescripcionDelete = document.getElementById("txtDescripcionDelete");
      const txtHoraInicioDelete = document.getElementById("txtHoraInicioDelete");
      const txtHoraFinDelete = document.getElementById("txtHoraFinDelete");

      txtIDEliminar.value = data.Idturno
      txtDescripcionDelete.value = data.Descripcion;
      txtHoraInicioDelete.value = data.Horario_Inicio;
      txtHoraFinDelete.value = data.Horario_Fin;
    },
  });
}

//FUNCION SELECT POR ID EN DELETE

function selectIDDelete() {
  fetch("http://localhost:53498/api/Turno")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDEliminar");
      data.forEach((o) => {
        let _option = `<option value="${o.Idturno}">${o.Idturno}</option>`;

        _select.innerHTML += _option;
      });
    });
}

