//FUNCION GET

function getAll() {
  fetch("http://localhost:53498/api/Marca")
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getAll");
      data.forEach((o) => {
        let _tr = `<tr>
        <td>${o.Idmarca} </td>
        <td>${o.nombremarca} </td> 
        </tr>`;

        _tbody.innerHTML += _tr;
      });
    });
}

//FUNCION GET BY ID

function getId(id) {
  const _txtID = document.getElementById("txtID");
  id = _txtID.value;

  fetch("http://localhost:53498/api/Marca/" + id)
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getId");
      let _tr = `<tr>
      <td>${data.Idmarca} </td>
      <td>${data.nombremarca} </td>  
      </tr>`;

      _tbody.innerHTML += _tr;

     
      _txtID.focus();
    });
}

//FUNCION SELECT POR ID

function selectID() {
  fetch("http://localhost:53498/api/Marca")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtID");
      data.forEach((o) => {
        let _option = `<option value="${o.Idmarca}">${o.Idmarca}</option>`;

        _select.innerHTML += _option;
      });
    });
}

//FUNCION PUT

let obj = "";

function put(obj) {
  const _txtIDPut = document.getElementById("txtIDPut");
  const _txtMarcaPut = document.getElementById("txtMarcaPut");
 

  obj = {
    Idmarca: _txtIDPut.value,
    nombremarca: _txtMarcaPut.value,
    
  };
  $.ajax({
    type: "PUT",
    dataType: "json",
    url: "http://localhost:53498/api/Marca/" + obj.Idmarca,
    data: obj,
    success: function (data) {
      alert("PUT OK!");
      _txtIDPut.value = "";
      _txtMarcaPut.value = "";
      _txtIDPut.focus();
    },
    error: function (error) {
      alert("Debe seleccionar un ID pre-existente");
    },
  });
}

//FUNCION SELECT POR ID EN PUT

function selectIDPut() {
  fetch("http://localhost:53498/api/Marca")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDPut");
      data.forEach((o) => {
        let _option = `<option value="${o.Idmarca}">${o.Idmarca}</option>`;
        
        _select.innerHTML += _option;
      });
    });
  }
  
  //FUNCION VALIDAR CAMPOS EN PUT
  
  function validarPut() {
    const _txtIDPut = document.getElementById("txtIDPut");
    const _txtMarcaPut = document.getElementById("txtMarcaPut");
    
    if (_txtIDPut.value === "" || _txtMarcaPut.value === "") {
      alert("Por favor, complete todos los campos obligatorios.");
      return false;
    }
  
    else{
      return put(obj);
    }
  }

  //FUNCION BUSCAR POR ID EN PUT
  
  function buscarPut(id) {
    const txtIDPut = document.getElementById("txtIDPut");
    id = txtIDPut.value;
  
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://localhost:53498/api/Marca/" + id,
      success: function (data) {
        const _txtMarcaPut = document.getElementById("txtMarcaPut");
        
  
        _txtMarcaPut.value = data.nombremarca;
       
      },
    });
  }
  
  //FUNCION POST
  
  function post(obj) {
    const _txtMarcaPost = document.getElementById("txtMarcaPost");
    
    
  obj = {
    NombreMarca: _txtMarcaPost.value,
   
  };
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "http://localhost:53498/api/Marca",
    data: obj,
    success: function (data) {
      alert("POST OK!");
      _txtMarcaPost.value = "";
      _txtMarcaPost.focus();
    },
    error: function (error) {
      alert(error);
    },
  });
}

//FUNCION VALIDAR CAMPOS EN POST

function validarPost() {
  const txtMarcaPost = document.getElementById("txtMarcaPost");
  
  if (txtMarcaPost.value === "") {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  }

  else{
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
    url: "http://localhost:53498/api/Marca/" + idEliminar.id,
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
    url: "http://localhost:53498/api/Marca/" + id,
    success: function (data) {
      const txtMarcaDelete = document.getElementById("txtMarcaDelete");
      txtMarcaDelete.value = data.NombreMarca;
      
    },
  });
}


//FUNCION SELECT POR ID EN DELETE

function selectIDDelete() {
  fetch("http://localhost:53498/api/Marca/")
    .then((response) => response.json())
    .then((data) => {
      const _select = document.getElementById("txtIDEliminar");
      data.forEach((o) => {
        let _option = `<option value="${o.IdMarca}">${o.IdMarca}</option>`;

        _select.innerHTML += _option;
      });
    });
}

