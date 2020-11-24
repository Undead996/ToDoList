function toDoList(){
    let date = new Date;
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }
    let showDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
    let newDatePlace = document.querySelector(".todo-header h3");
    newDatePlace.append(showDate);

    let addBtn = document.querySelector(".todo-header button");
    let closeBtn = document.querySelector(`#not-ok`)
    let todoForm = document.querySelector(".todo-form");
    let blur = document.querySelector(".blur");
    let doBtn = document.querySelector(`#ok`);
    let toDoDate = document.querySelector(".todo-form input");
    let listCont = document.querySelector(".list-container");
    let txt = document.querySelector(".todo-form textarea");
    function openForm(){
        blur.style.filter = "blur(0.15em)";
        todoForm.style.display = "block";
    }
    function closeForm(){
        blur.style.filter = "blur(0em)";
        todoForm.style.display = "none";
    }
    function recolor(){
        txt.style.border = "1px solid rgb(133, 133, 133)"
    }
    function recolor2(){
        toDoDate.style.border = "1px inset rgb(133, 133, 133)"
    }
    function addTodo(){
        if(txt.value == ""){
            txt.style.border = "3px solid red";
            setTimeout(recolor, 200);
        }if(toDoDate.value == ""){
            toDoDate.style.border = "3px solid red";
            setTimeout(recolor2, 200);
        }else{
        let tl = document.createElement("DIV");
        tl.className = "todo-list";
        let p1 = document.createElement("P");
        p1.innerHTML = `TO DATE: <span>${toDoDate.value}</span>`;
        listCont.append(tl);
        tl.append(p1);
        let p2 = document.createElement("P");
        p2.append(txt.value);
        tl.append(p2);
        let btnDiv = document.createElement("DIV");
        btnDiv.className = "list-button";
        let check = document.createElement("BUTTON");
        check.innerHTML = "&#10004;";
        let del = document.createElement("BUTTON");
        del.innerHTML = "&#10008;";
        btnDiv.append(check);
        btnDiv.append(del);
        tl.append(btnDiv);
        closeForm();
        txt.value = "";
        toDoDate.value = "";
        check.addEventListener("click", checked);
        del.addEventListener("click", deleted);
        }
    }
    function checked(){
        if(this.parentNode.parentNode.style.background == ""){
            this.parentNode.parentNode.style.background = "rgb(210, 210, 210)";
        }else{
            this.parentNode.parentNode.style.background = ""
        }
    }
    function deleted(){
        this.parentNode.parentNode.remove();
    }
    addBtn.addEventListener("click", openForm);
    closeBtn.addEventListener("click", closeForm);
    doBtn.addEventListener("click", addTodo);
}