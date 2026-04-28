let termos = JSON.parse(localStorage.getItem("termos")) || []
let editIndex = null

function salvar(){
localStorage.setItem("termos", JSON.stringify(termos))
}

function render(){

let tbody = document.getElementById("tableBody")
tbody.innerHTML = ""

termos.forEach((item,index)=>{

tbody.innerHTML += `

<tr>

<td>${item.termo}</td>

<td>${item.sigla}</td>

<td>${item.def}</td>

<td>

<button class="btn btn-warning btn-sm"
onclick="editar(${index})">
Editar
</button>

<button class="btn btn-danger btn-sm"
onclick="deletar(${index})">
Excluir
</button>

</td>

</tr>

`

})

}

function addItem(){

let termo = document.getElementById("inputTech").value
let sigla = document.getElementById("inputSigla").value
let def = document.getElementById("inputDef").value

if(!termo || !sigla || !def) return

let novo = {
termo,
sigla,
def
}

if(editIndex === null){

termos.push(novo)

}else{

termos[editIndex] = novo
editIndex = null

}

document.getElementById("inputTech").value=""
document.getElementById("inputSigla").value=""
document.getElementById("inputDef").value=""

salvar()
render()

}

function editar(index){

let item = termos[index]

document.getElementById("inputTech").value = item.termo
document.getElementById("inputSigla").value = item.sigla
document.getElementById("inputDef").value = item.def

editIndex = index

}

function deletar(index){

termos.splice(index,1)

salvar()
render()

}

render()

// MENU

let sidebar = document.getElementById("sidebar")

document.getElementById("menuBtn").onclick = () => {

if(sidebar.style.left === "0px"){

sidebar.style.left = "-250px"

}else{

sidebar.style.left = "0px"

}

}