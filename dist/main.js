(()=>{"use strict";document.querySelector("#add-todo").addEventListener("click",(()=>{event.preventDefault(),console.log({title:document.querySelector("#todo-title").value,description:document.querySelector("#todo-description").value,dueDate:document.querySelector("#todo-due-date").value,priority:document.querySelector("#todo-priority").value}),console.log("click")}))})();