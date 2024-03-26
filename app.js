const todoinput = document.querySelector('#todo')
const row = document.querySelector('.row')


let arr = []

function delettodo() {
    if (arr !== null) {
row.innerHTML = ""
arr = []    
            }
    
    

}


function addtodo()
 {
    row.innerHTML = ''
arr.push(todoinput.value)
console.log(arr);
outputTodo()

todoinput.value = ''


// for (let i = 0; i < arr.length; ++i) {
//             row.innerHTML += `

//             <div class="col text-dark">
//             <div class="card">
//               <div class="card-body">
//                 <h5 class="card-title"><i>Your ${i} Todo is Here</i></h5>
//                 <h5 class="card-title mt-3"> ${arr[i]}</h5>

//             <button onclick="editTodo(${i})">Edit</button> <button onclick="deleteTodo(${i})">Delete</button>

//               </div>
//             </div>
//           </div>


            
            
//             `;
//          } 

}





function outputTodo() {
    row.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        row.innerHTML += `


        <div class="col text-dark ">
            <div class="card bg-success">
            <h5 class="card-title"><i>Your ${i} Todo is Here</i></h5>

              <div class="card-body bg-info">

                <h5 class="card-title mb-3 "> ${arr[i]}</h5>

            <button onclick="editTodo(${i})" class="btn btn-warning">Edit</button> <button onclick="deleteTodo(${i})" class="btn btn-danger">Delete</button>

              </div>
            </div>
          </div>



        `
    }
}





function deleteTodo(index) {
    arr.splice(index, 1);
    outputTodo()
}

function editTodo(index) {
    const updatedVal = prompt('enter updated value');
    arr.splice(index , 1 , updatedVal);
    outputTodo()
}



// function editTodo(index) {
//     let editedTodo = prompt("Enter the new value:");
//     if (editedTodo !== null) {
//         arr[index] = editedTodo;
//         displayTodos();
//     }
// }

// function deleteTodo(index) {
//     arr.splice(index, 1);
//     displayTodos();
// }

// function displayTodos() {
//     // row.innerHTML = '';
//     arr.forEach((todo, index) => {
//         row.innerHTML += `

// <div class="col text-dark">
//             <div class="card">
//               <div class="card-body">
//                 <h5 class="card-title"><i>Your ${i} Todo is Here</i></h5>
//                 <h5 class="card-title mt-3"> ${todo} </h5>

//             <button onclick="editTodo(${index})">Edit</button> <button onclick="deleteTodo(${index})">Delete</button>

//               </div>
//             </div>
//           </div>








//         <li>${todo} is your todo ${index + 1} <button onclick="editTodo(${index})">Edit</button> <button onclick="deleteTodo(${index})">Delete</button></li>
        
        
        
//         `;
//     });
// }






