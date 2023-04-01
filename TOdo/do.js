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

function addList(e){
    const task_notCompleted = document.querySelector('.task_notCompleted');
    const Completed = document.querySelector('.Completed');

    const task_Li = document.createElement('li');
    const task_Btn = document.createElement('button');
    const delBtn = document.createElement('button');

    task_Btn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';


    if(input.value !==''){
        task_Li.textContent = input.value;
        input.value = '';
        task_notCompleted.appendChild(task_Li);
        task_Li.appendChild(task_Btn);
        task_Li.appendChild(delBtn);
    }

    task_Btn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        task_Btn.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });
}
