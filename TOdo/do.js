// //selectors
// const taskinput=document.querySelector('#task-input');
// const tasksubmit=document.querySelector('#task-submit');
// // const taskinput=document.querySelector('#task-input');



// //Event Listner
// tasksubmit.addEventListener('click',addTodo);


// //Functions
// function addTodo(event){
//    event.preverntDefault();

     
//  }


const input = document.querySelector('input');
const btn = document.querySelector('.task_add > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? addList(e) : null);
})

if(!input.value)
{
  alert("No Input");
  return;
}
function addList(e){
    const task_work = document.querySelector('.task_work');
    const task_completed = document.querySelector('.task_completed');

    const newLi = document.createElement('li');
    newLi.setAttribute("readonly","readonly");
    const task_check = document.createElement('button');
    const task_delete = document.createElement('button');
    const task_edit = document.createElement('button');

    task_check.innerHTML = '<i class="fa fa-check"></i>';
    task_delete.innerHTML = '<i class="fa fa-trash"></i>';
    task_edit.innerHTML = '<i class="icon-edit"></i>';


    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        task_work.appendChild(newLi);
        newLi.appendChild(task_check);
        newLi.appendChild(task_delete);
        newLi.appendChild(task_edit);
    }

    task_check.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        task_completed.appendChild(parent);
        task_check.style.display = 'none';
    });

    task_delete.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });


    task_edit.addEventListener('click', ()=>{
        if( task_edit.innerText.toLowerCase() == "edit"){
        newLi .removeAttribute("readonly");
        task_edit.focus();
        }
        else{
            newLi .setAttribute("readonly","readonly");

        }
    
     });
     
}
