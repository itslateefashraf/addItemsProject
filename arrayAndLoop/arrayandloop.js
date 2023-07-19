
button = document.getElementById('btn')


const todo = [{
    name:'make dinner',
    dueDate:'2022-02-01',
    time:'5:41 pm'
},{
    name:'wash dishes',
    dueDate:'2022-03-04',
    time:'5:41 pm'

}];

render();

function render(){

let todoHTML ='';

for(let i = 0; i < todo.length;i++){
    const addtodo = todo[i];
    // const name = addtodo.name;
    // const dueDate = addtodo.duedate;

    const {name,dueDate,time}  =addtodo;
    const html = 
    `<div>${name}</div>
         <div>${dueDate}</div>
         <div>${time}</div>
        <button class ="dlt" onclick="
        todo.splice(${i}, 1);
        render()
        ">delete</button>
    `;
    todoHTML += html;
}

document.querySelector('.div').innerHTML = todoHTML;

}
button.addEventListener('click',()=>{
    const  input = document.getElementById('input')
    const  name = input.value
    const dateInputElement = document.getElementById('date')
       const dueDate = dateInputElement.value;
       const timeInputElement = document.getElementById('time')
       const time = timeInputElement.value

    todo.push({
        name: name,
        dueDate: dueDate,
        time:time
    });
    input.value =''
    dateInputElement.value=''

    render();

})