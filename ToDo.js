let todolist = [];
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

        newHtml += ` 
        <span>${item}</span>
        <sapn>${dueDate}</sapn>
        <button style="background-color: red; color: black;text-weight: 800; border: none; padding: 10px 20px; font-size: 16px; cursor: pointer;margin: 5px;border-radius: 5px;" onclick="todolist.splice(${i},1);displayItems();">Delete</button>
        `;
    }
    todoElement.innerHTML = newHtml;
}