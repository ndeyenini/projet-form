

var form = `<div >
<div class=container >
<div class="row">
  <div class="mb-3 col-lg-6">
    <label for="exampleInputEmail1" class="form-label">Prenom</label>
    <input type="prenom" class="form-control w-100" id="prenom" aria-describedby="emailHelp">
  </div>
  <div class="mb-3 col-lg-6">
    <label for="exampleInputEmail1" class="form-label">nom</label>
    <input type="nom" class="form-control w-100" id="nom" aria-describedby="emailHelp">
  </div>
  </div>
  <div class="row">
    <div class="mb-3 col-lg-6">
    <label for="exampleInputemail" class="form-label">Email</label>
    <input type="abc@gmail.com" class="form-control w-100" id="email">
   </div>
   <div class=" col-lg-6">
    <label for="exampleInputtelephone" class="form-label">Telephone</label>
    <input type="telephone" class="form-control w-100" id="telephone">
  </div>
  </div>
  <button type="ajouter" class="bt btn-info mt-2" id="ajouter">Ajouter </button>
  </div>
</div>`;
var details = [];
 getData(); 
table();
function getData() {
  var Data = localStorage.getItem("details");
  if (Data) {
    details = JSON.parse(Data);
  } else {
    setData();
  }
}
function setData() {
  localStorage.setItem("details", JSON.stringify(details));
}
function table() {
  var table = `<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">prenom</th>
      <th scope="col">nom</th>
      <th scope="col">Email</th>
      <th scope="col">Telephone</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody id="body">`;
  for (var i = 0; i < details.length; i++) {
    table =
      table +
      `<tr>
      <td>${details[i].prenom}</td>
      <td>${details[i].nom}</td>
      <td>${details[i].email}</td>
      <td>${details[i].telephone}</td>
      <td><button type="button" class="btn btn-primary"onclick="edit(${i})">Modifier</button>
      <button type="button" class="btn btn-danger"onclick="deleteData(${i})">Suprimer</button></td>
    </tr>`;
  }
  table =
    table +
    `</tbody>
</table>`;
  document.getElementById("table").innerHTML = table;
}


document.getElementById("form").innerHTML = form;


document.getElementById("ajouter").addEventListener("click",function(e){
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let telephone = document.getElementById("telephone");
let data = {
  nom: nom.value,
  prenom: prenom.value,
  email: email.value,
  telephone: telephone.value,
};
details.push(data)
// console.log(details);
setData();
table();
})
function deleteData(index) {
  details.splice(index, 1);
  setData();
  table();

  // console.log(details);
}


function edit(index) {
  var editForm = `<div>
  <div class="container">
  <div class="row">
  <div class="mb-3 col-lg-6">
    <label for="prenom" class="form-label">Pernom</label>
    <input type="prenom" value="${details[index].prenom} " class="form-control w-100" id="newprenom" >
    
  </div>
  <div class="mb-3 col-lg-6">
    <label for="nom" class="form-label">Nom</label>
    <input type="nom" value="${details[index].nom}" class="form-control w-100" id="newnom">
  </div>
  </div>
  <div class="row">
  <div class="mb-3 col-lg-6">
    <label for="email" class="form-label">email</label>
    <input type="abc@gmail.com" value="${details[index].email}" class="form-control  w-100" id="newemail">
  </div>
  <div class="mb-3 col-lg-6">
    <label for="telephone" class="form-label">email</label>
    <input type="telephone" value="${details[index].telephone}" class="form-control w-100" id="newtelephone">
  </div>
  </div>
  
  <button type="submit" class="bt btn-primary w-100"onclick="modifier(${index})">modifier</button>
  </div>
</div>`;

  document.getElementById("form").innerHTML = editForm;

  // console.log();
}

function modifier(index) {
  var newprenom = document.getElementById("newprenom");
  var newnom = document.getElementById("newnom");
  var newemail = document.getElementById("newemail");
   var newtelephone = document.getElementById("newtelephone");
  details[index] = {
    prenom: newprenom.value,
    nom: newnom.value,
    email: newemail.value,
    telephone: newtelephone.value,
  };
setData();
  table();
   document.getElementById("form").innerHTML = form;
  // console.log("update word");
  // console.log(details);
 
}



