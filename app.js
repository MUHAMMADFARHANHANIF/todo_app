const todoinput = document.querySelector('#todo')
const ol = document.querySelector('ol')


let arr = []


function addtodo()
 {
    ol.innerHTML = ''
arr.push(todoinput.value)
console.log(arr);

todoinput.value = ''


for (let i = 0; i < arr.length; ++i) {
            ol.innerHTML += `<li>${arr[i]} is your todo <button onclick="editTodo(${i})">Edit</button> <button onclick="deleteTodo(${i})">Delete</button></li>`;
         } 

}

function editTodo(index) {
    let editedTodo = prompt("Enter the new value:");
    if (editedTodo !== null) {
        arr[index] = editedTodo;
        displayTodos();
    }
}

function deleteTodo(index) {
    arr.splice(index, 1);
    displayTodos();
}

function displayTodos() {
    ol.innerHTML = '';
    arr.forEach((todo, index) => {
        ol.innerHTML += `<li>${todo} is your todo ${index + 1} <button onclick="editTodo(${index})">Edit</button> <button onclick="deleteTodo(${index})">Delete</button></li>`;
    });
}






