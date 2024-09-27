// alert("working");
let todolist = [
    {
        item :'Buy milk',
        dueDate: '04/05/2004'
    }, 
    {
        item:'Buy bread',
        dueDate: '04/05/2004'
    }
];
displayItems();

function addTodo()
{
    let todoinput = document.querySelector('#todo-input');

    let todoDate = document.querySelector('#todo-date');

    let todoDateValue = todoDate.value;
    let todoText = todoinput.value;
    todolist.push({item: todoText, dueDate: todoDateValue});
    todoinput.value = "";  
    todoDate.value = "";
    displayItems();
}

function displayItems()
{
    let todoElement = document.querySelector(".todo-item");

    let newHtml ='';

    todoElement.innerText = "";
    for(let i = 0; i < todolist.length; i++)
    {
        let item = todolist[i].item;
        let dueDate = todolist[i].dueDate;
        // let {item, duedate} = todolist[i];

        newHtml += ` 
        <span>${item}</span>
        <sapn>${dueDate}</sapn>
        <button onclick="todolist.splice(${i},1);displayItems();">Delete
        </button>
        `;
    }
    todoElement.innerHTML = newHtml;
}