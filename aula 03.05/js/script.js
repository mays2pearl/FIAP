const inputBox = document.querySelector('#entrada')
const addBtn = document.querySelector('.inputField button')
const todoList = document.querySelector('.todoList')
const deleteAllBtn = document.querySelector('.footer button')

inputBox.onkeyup = _ => {
    let userData = inputBox.value
    if (userData.trim() != 0) {
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
}

showTasks()

addBtn.onclick = _ => {
let userData = inputBox.value
let getLocalStorage = localStorage.getItem('New Todo')
if(getLocalStorage == null) { //vamos verificar se o armazenamento local for nulo
listArr = []  //vamos criar um array vazio
}else{
    listArr = JSON.parse(getLocalStorage) //estamos adicionando dados do usuario a nossa lista
}
listArr.push(userData) //empurrando para dentro do array os dados do usuario
localStorage.setItem('New Todo', JSON.stringify(listArr)) //Transformando um objeto js em um fragmento js

showTasks() //chamando a função showTasks

}

function showTasks() {
    let getLocalStorage = localStorage.getItem('New Todo')
    if(getLocalStorage == null) {
        listArr = []
    }else{
        listArr = JSON.parse(getLocalStorage)
    }
   const pendingNum = document.querySelector('.pendingNum')
   pendingNum.textContent = listArr.length

   if(listArr.length > 0) { //se o tamanho do array for maior que zero
    deleteAllBtn.classList.add('active') //ativa a classe active

   }else{
       deleteAllBtn.classList.remove('active') //desativa a classe active
   }

   let newLiTag = ''
   addBtn.classList.remove('active')
   listArr.forEach((element, index) => {
       newLiTag += `
       <li>${element}<span onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></span></li>
       ` //aqui inserimos in icone externo do iconsawesome
   })

   todoList.innerHTML = newLiTag //aqui estamos adicionando uma nova li dentro da nossa vista no html
   inputBox.value = '' //uma vez adicionada a tarefa deixe o campo entrada em branco
}

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem('New Todo')
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(index, 1) //exclui ou remove um determinado item indexado
    //?depois de remover o item atualize novamente o armazenamento local
    localStorage.setItem('New Todo', JSON.stringify(listArr))
    showTasks()
}

//Vamos criar uma função que deleta todas as funções
deleteAllBtn.onclick = _ => {
    listArr = [] //array vazio
    //apos deletar todas tarefas atualizar novamente o armazenamento local
    localStorage.setItem('New Todo', JSON.stringify(listArr))
    showTasks()
}