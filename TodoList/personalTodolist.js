const D_inputTxt = document.getElementById("todo-controller").querySelector("input");
const D_AddBtn = document.getElementById("Add-List-Btn");
const D_DelBtn = document.getElementById("Del-List-Btn");
const D_listArr = document.getElementsByClassName("list");
const [AllComplete , AllDelete] = document.getElementById("todo-list-menu").querySelectorAll("input[type='checkbox']");


const addBtn = () => {
    let textValue = D_inputTxt.value;
    if(textValue.trim() !== ""){
        let D_ListSec = document.getElementById("todo-list");

        D_ListSec.insertAdjacentHTML("beforeend",
        `<div class="list"><span><input type="checkbox" class="compBox"></span>
        <span>${textValue}</span>
        <span><input type="checkbox" class="delBox" ></span></div>`);

        const D_NewDiv = document.getElementById("todo-list").lastElementChild;
        const D_ChkBox = D_NewDiv.querySelector("input");
        D_ChkBox.addEventListener("change",()=>{
            if(D_ChkBox.checked){
                D_NewDiv.style.backgroundColor = "yellow";
            }
            else{
                D_NewDiv.style.backgroundColor = "#EEE";
            }
        })
    }
    D_inputTxt.value = "";
}

D_AddBtn.onclick = addBtn;
D_inputTxt.onkeydown = (e) =>{
    if(e.keyCode == 13){
        addBtn();
    }
}

const delBtn = () => {
    let delList = [];
    [...D_listArr].forEach((item) => {
        if(item.getElementsByTagName("input")[1].checked){
            delList.push(item);
        }
    })

    if(confirm("정말 삭제할래요?") && delList.length > 0){
        for (let index = 0; index < delList.length; index++) {
            delList[index].remove();
        }
    }
}

D_DelBtn.addEventListener("click",delBtn);

AllComplete.addEventListener("change",()=>{
    let D_compBox;
    if(AllComplete.checked){
        [...D_listArr].forEach((item)=>{
            D_compBox = item.getElementsByTagName("input")[0];
            if(D_compBox.checked == false){
                D_compBox.checked = true; 
                item.style.backgroundColor = "yellow";
            }
        })
    }
    else{
        [...D_listArr].forEach((item)=>{
            D_compBox = item.getElementsByTagName("input")[0];
            if(D_compBox.checked == true){
                D_compBox.checked = false;
                item.style.backgroundColor = "#EEE"; 
            }
        })
    }
    
})

AllDelete.addEventListener("change",()=>{
    let D_delBox;
    if(AllDelete.checked){
        [...D_listArr].forEach((item)=>{
            D_delBox = item.getElementsByTagName("input")[1];
            if(D_delBox.checked == false){
                D_delBox.checked = true; 
            }
        })
    }
    else{
        [...D_listArr].forEach((item)=>{
            D_delBox = item.getElementsByTagName("input")[1];
            if(D_delBox.checked == true){
                D_delBox.checked = false; 
            }
        })
    }
})





