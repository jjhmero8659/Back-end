const todoListSection = document.getElementById('todo-list');
const textInput = document.querySelector('input');
const [addBtn, removeBtn] = document.querySelectorAll('input[type="button"]');
const divs = document.getElementById('todo-list').getElementsByTagName('div');
const [allChooseCheck, allRemoveCheck] = divs.item(0).getElementsByTagName('input');

//할일 목록 추가하는 함수
function add_todo_list(){
    const text = textInput.value;
    if (text.trim() !== '') {
        todoListSection.insertAdjacentHTML('beforeend',
            `<div><span><input type="checkbox" /></span><span>${textInput.value}</span><span><input type="checkbox" /></span></div>`);
        //방금 만든 div를 가져온다
        const div = document.getElementById('todo-list').lastElementChild;
        const checkBox = div.querySelector('input'); //checkBox를 가져온다
        //체크박스가 변경되었다면
        checkBox.addEventListener('change', () => {
            //자신의 부모인 div의 배경을 바꾼다
            if(checkBox.checked) { //현재 체크되어 있는 상태이다
                div.style.backgroundColor = '#0066ff';
            }
            else{ //현재 체크되어 있지 않은 상태이다
                div.style.backgroundColor = '#EEE';
            }
        });

    }else{
        alert('글을 작성하세요!');
    }
    textInput.value = '';
}
//추가 버튼 눌렀을 시
addBtn.onclick = add_todo_list;
//인풋 박스 안에서 엔터 눌렀을 시
textInput.onkeydown = e => {
    if(e.key === 'Enter'){
        add_todo_list();
    }
}
//삭제 버튼 눌렀을 시
removeBtn.onclick = () => {
    const rmDivList = [];
    // 할일 목록 리스트에서 체크박스 부분만 전부 가져온다
    for(let i = divs.length - 1; i > 0; i--){
        //만약 해당 체크박스가 체크되어있다면
        if(divs.item(i).getElementsByTagName('input').item(1).checked){
            //삭제할 div들을 가져와서 list에 넣는다
            rmDivList.push(divs.item(i));
        }
    }
    // 삭제할게 하나라도 이상일 때, 정말 삭제할 것인지 물어본다
    if(rmDivList.length > 0 && confirm('정말 삭제할래요?')){
        //정말 삭제한다라고 하면 삭제한다
        while(rmDivList.length > 0){
            rmDivList.pop().remove(); //리스트에서 꺼내서 삭제시킨다
        }
    }
}
//전체 선택 버튼 눌렀을 시
allChooseCheck.onchange = () => { all_check(allChooseCheck.checked, 0); }
allRemoveCheck.onchange = () => { all_check(allRemoveCheck.checked, 1); }
//아래의 체크박스 다 체크해주거나 해제해주는 함수
function all_check(checked, index){
    for(let i = 1; i < divs.length; i++){
        divs[i].getElementsByTagName('input').item(index).checked = checked;
        //완료 체크였나?
        if(checked && index == 0){
            divs[i].style.backgroundColor = 'blue';
        }
        else if(!checked && index === 0){
            divs[i].style.backgroundColor = '#EEE';
        }
    }
}











