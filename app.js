const form = document.querySelector("#todolist-form");
const input = document.querySelector("#todolist-adder-input");
const btn_del_all = document.querySelector("#delete-all");
const todo_collection = document.querySelector("#todolist-collection");
const btn = document.getElementById("clear");
const a = document.getElementById("a");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const wrap_btn = document.getElementById("btn_desc");

form.addEventListener('submit', addPost);


function addPost(e) {
    e.preventDefault();

    
    const inputValue = input.value;
    const todolistLi = document.createElement('li');
    todolistLi.classList.add('collection__item');
    const todolistText = document.createElement('p');
    todolistText.classList.add('crEl')
    todolistText.innerText = inputValue;
    todolistLi.appendChild(todolistText);
    todo_collection.appendChild(todolistLi);
    input.value = '';

    if(todo_collection){
        if(wrap_btn.style.cssText = `display: none`)
        todolistLi.appendChild(wrap_btn);
        wrap_btn.style.cssText = `display: flex`;
    } 
}




const icon = input.value;

btn.addEventListener('click', () => {
    if (icon.trim().length >= 0) {
        input.value = '';
    }

});

const modal = document.getElementById("todoModalka");
const pustoy = document.getElementById("pustoy");


btn_del_all.addEventListener('click', () => {
    
    if (!todo_collection.length) {
        const htmlTag = document.createElement('p');
        htmlTag.classList.add('todo_p')
        pustoy.appendChild(htmlTag);
        htmlTag.innerText = `
        No element!  
        `;

        if(todo_collection.firstChild){
            htmlTag.innerHTML = null;
        } 

    }

    if (todo_collection.firstChild) {
        if (modal.style.cssText = `display: non`) {
            modal.style.cssText = `display: block`;
        }
    }

});

yes.addEventListener('click', ()=>{
    if(todo_collection.childNodes.length){
       todo_collection.innerHTML = '';
       pustoy.innerHTML = '';
        modal.style.cssText = `display: none`;
    } 
});

no.addEventListener('click', ()=>{
    const block =  modal.style.cssText = `display: block`;
    if(block){
        modal.style.cssText = `display: none`;
    } 
});

// 




