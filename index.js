
    let list_to_do=[];
    let counter=0; 

    function addTodo(){  
        console.log("hi"); 
        list_to_do.push(
            {
                title: document.querySelector(".add_bar_input").value 
            
            }
        ) 
        document.querySelector(".add_bar_input").value=""
        render();  
       
    }
        function delete_todo(index){ 
           /*   list_to_do.splice(index,1);  */  
           console.log("came to delete "+ index);
           let new_todo=[]; 
           for(let i=0;i<list_to_do.length;i++){ 
            if(i!=index){ 
                new_todo.push(list_to_do[i]);
            }
           }            
           list_to_do=new_todo; 
           render(); 
        } 
        function edit_todo(index){  
             render_modified(index); 
        } 
        function edit_ith_todo(index){ 
            let val=document.querySelectorAll("input")[1].value; 
            if(val===''){ 
                alert("Please enter a value"); 
    
            } 
            list_to_do[index]["title"]=val;
            render();  
        }
        function Create_a_edit_component(todo,index){
            let small_div=document.createElement("div"); /* todo-index div */
            small_div.setAttribute("class","todo-"+index);
            small_div.style.background="background:#1c1f2b;"; 
            small_div.style.borderColor="rgba(255, 255, 255, 0.12)";
            small_div.style.width= "280px"; 
            small_div.style.height= "230px"; 
            small_div.style.border="solid";
            small_div.style.textAlign="left";
            small_div.style.borderRadius="5%";
            small_div.style.cursor="pointer";
            small_div.style.marginRight="4px";
  
            small_div.addEventListener("mouseover", () => {
            // Change the element's style on hover
            small_div.style.background = "#1c1f2b"; 
            small_div.style.borderColor = "rgba(255,255,255,0.12)";
            small_div.style.borderWidth= "1px";     
            }); 
            
            small_div.addEventListener("mouseout", () => {
            // Change the element's style on hover
                small_div.style.background="#1c1f2b"; 
                small_div.style.borderColor="rgba(255, 255, 255, 0.12)";
                small_div.style.width= "280px"; 
                small_div.style.height= "230px"; 
                small_div.style.border="solid"; 
                small_div.style.textAlign="left";
                small_div.style.borderRadius="5%";
                small_div.style.cursor="pointer";
                small_div.style.marginRight="4px";
            }); 
            let new_input_div=document.createElement("div"); 
            let new_input=document.createElement("input"); 
		    new_input.setAttribute("placeholder","Edit Your Task"); 
            new_input.setAttribute("class","new_input"); 
            new_input_div.setAttribute("style","margin-top:10px;"); 
            new_input_div.appendChild(new_input); 
            let update_button_div=document.createElement("div"); 
		    let update=document.createElement("button"); 
		    update.setAttribute("onclick","edit_ith_todo("+ index +")"); 
		    update.setAttribute("class","update_button");    
            update.textContent='Update'; 
            update_button_div.appendChild(update); 
            update_button_div.setAttribute("style","display:flex;justify-content:center;margin-top:10px;");
            small_div.appendChild(new_input_div); 
            small_div.appendChild(update_button_div); 
            return small_div; 
         } 
        function Create_a_component(todo,index){
            let small_div=document.createElement("div"); /* todo-index div */
            small_div.setAttribute("class","todo-"+index);
            small_div.style.backgroundColor="rgba(255, 255, 255, 0.04)"; 
            small_div.style.borderColor="rgba(255, 255, 255, 0.12)";
            small_div.style.width= "280px"; 
            small_div.style.height= "230px"; 
            small_div.style.border="solid";
            small_div.style.textAlign="left";
            small_div.style.borderRadius="5%";
            small_div.style.cursor="pointer";
            small_div.style.marginRight="4px";
  
            small_div.addEventListener("mouseover", () => {
            // Change the element's style on hover
            small_div.style.backgroundColor = "rgba(255, 255, 255, 0.08)"; 
            small_div.style.borderColor = "rgba(255,255,255,0.12)";
            small_div.style.borderWidth= "1px";     
            }); 
            
            small_div.addEventListener("mouseout", () => {
            // Change the element's style on hover
                small_div.style.backgroundColor="rgba(255, 255, 255, 0.04)"; 
                small_div.style.borderColor="rgba(255, 255, 255, 0.12)";
                small_div.style.width= "280px"; 
                small_div.style.height= "230px"; 
                small_div.style.border="solid"; 
                small_div.style.textAlign="left";
                small_div.style.borderRadius="5%";
                small_div.style.cursor="pointer";
                small_div.style.marginRight="4px";
            });    
            let work=document.createElement('h2'); 
            work.innerText=todo["title"];   
            work.setAttribute("style","text-align:center;color:white;font-size:35px; height:75px;");
            small_div.appendChild(work);  
            /* creating buttons portion */  
            let buttons_div=document.createElement("div"); 
            buttons_div.setAttribute("class","buttons_div"); 
            let edit_button=document.createElement("button"); 
            edit_button.setAttribute("class","edit_button"); 
            edit_button.innerText="Edit"; 
            edit_button.setAttribute("onclick","edit_todo(" +index+ ")"); /* check and update here */
            buttons_div.appendChild(edit_button);  /* added edit button to buttons div */ 
            let delete_button=document.createElement("button"); 
            delete_button.setAttribute("class","delete_button"); 
            delete_button.setAttribute("onclick","delete_todo(" + index + ")");
            delete_button.innerText="Completed"; 
            buttons_div.appendChild(delete_button);  /* added delete button to buttons div */
            buttons_div.setAttribute("class","buttons_div"); 
            small_div.appendChild(buttons_div);
            return small_div; 
        }
        
        function render(){ 
            document.querySelector(".all_todos").innerHTML=""; 
            for(let i=0;i<list_to_do.length;i++){ 
                let p=Create_a_component(list_to_do[i],i); 
                document.querySelector(".all_todos").appendChild(p); 
            } 
            
        }
        function render_modified(index){ 
            document.querySelector(".all_todos").innerHTML=""; 
            for(let i=0;i<list_to_do.length;i++){ 
                if(i!=index){ 
                    let p=Create_a_component(list_to_do[i],i); 
                    document.querySelector(".all_todos").appendChild(p); 
                }
                else{ 
                    let p=Create_a_edit_component(list_to_do[i],i); 
                    document.querySelector(".all_todos").appendChild(p); 
                } 
            }
        }
