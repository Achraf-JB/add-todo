let button = document.querySelector("#push");
let liste = document.querySelector("ul");
let input = document.querySelector("input");
button.addEventListener("click", addTodo);
function addTodo() {
    if(input.value.length!=0)
  {
    liste.innerHTML += `
    <div class="task">
    <li>  <input type="checkbox" id="check"><span id="para"> ${input.value} </span>  </input> 
    <button id="delete">delete</button> </li>
    </div>`;
   input.value ="" ; 
  }
  else {
    alert("please type something")
  }}
 
  let current_task = document.querySelectorAll(".delete");
  for(let i = 0 ; i<current_task.lenght ; i++){
    current_task[i].onclick = function(){
       this.parentNode.removeChild(); 
    }
    
}
/*let button = document.querySelector('#push');
let input = document.querySelector('#newtask input');
let liste = document.querySelector('ul');
button.addEventListener("click", addTodo);
function addTodo() {
    if(input.value=="")
    {
       liste.innerHTML += `
       <div class="task">
       <li>  <input type="checkbox"> ${input.value} </input> 
       <button class="delete">delete</button> </li>
       </div>`;
      input.value ="" ; 
    }
    else{
         alert("please type something")
        } 
    }
    

let current_task = document.querySelectorAll(".delete");
for(let i = 0 ; i<current_task.lenght ; i++){
    current_task[i].onclick = function(){
       this.parentNode.removeChild(); 
    }
    
}*/