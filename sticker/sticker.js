const colorList = ['#A8C5FA', '#BDB0F5', '#FADABC', '#D3DEC8', '#DFE0DA'];

const stickyWrap = document.getElementById('sticky_wrap');

init();

function init(){
    const newNote = new StickNote();
    stickyWrap.appendChild(newNote.note);
}

function StickNote(){
    this.note = document.createElement('div');
    this.note.classList.add('sticky');
    this.note.insertAdjacentHTML('beforeend',
        '            <nav class="menu">\n' +
        '                <div>\n' +
        '                    <button class="add"><i class="fa-solid fa-plus"></i></button>\n' +
        '                    <span>UNTITLED</span>\n' +
        '                </div>\n' +
        '                <div class="right-menu">\n' +
        '                    <button class="save"><i class="fa-solid fa-floppy-disk"></i></button>\n' +
        '                    <button class="load"><i class="fa-solid fa-list-ul"></i></button>\n' +
        '                    <button class="close"><i class="fa-solid fa-xmark"></i></button>\n' +
        '                </div>\n' +
        '            </nav>\n' +
        '            <textarea></textarea>\n' +
        '            <nav class="side-nav">\n' +
        '                <ul class="color-list"></ul>\n' +
        '                <ul class="memo-list">\n' +
        '                    <li><span>목록1</span><i class="fa-solid fa-trash-can"></i></li>\n' +
        '                </ul>\n' +
        '            </nav>\n'
    );

    this.addBtn = this.note.querySelector('.add');
    this.saveBtn = this.note.querySelector('.save');
    this.loadBtn = this.note.querySelector('.load');
    this.closeBtn = this.note.querySelector('.close');
    this.sideNav = this.note.querySelector('.side-nav');
    this.textArea = this.note.querySelector('textarea');
    this.colorListUL = this.note.querySelector('.color-list');
    this.memoList = this.note.querySelector('.memo-list');

    //초기화
    this.init = function (){

    }

    //메모장에 색깔 값을 설정하는 부분 + 색을 눌렀을 시 배경색 변경하는 동작
    this.setting_color = function () {
        colorList.forEach( (colorValue) => {
            const li = document.createElement('li');
            li.style.backgroundColor = colorValue;
            this.colorListUL.appendChild(li);

            li.onclick = () => {
                this.note.style.backgroundColor = colorValue;
                this.textArea.style.backgroundColor = colorValue;
                this.sideNav.toggleAttribute('active');
            }
        });
    }
    this.setting_color();

    //메모 저장 버튼을 눌렀을 시 동작
    this.saveBtn.onclick = () => {
        const memoTitle = prompt('메모 제목을 입력하세요');
        let addCheck = true; //메모를 저장할지 판단하는 변수
        if(memoTitle.trim() === ''){
            alert('Error: 제목은 필수 값입니다!');
        }
        else if(localStorage.getItem(memoTitle)){
            addCheck = confirm('이미 해당 제목의 노트가 존재합니다. 덮어쓰시겠습니까?');
        }
        if(addCheck){
            //현재 노트의 텍스트 에리어 요소를 가져온다
            if(this.textArea.value.trim() === ''){
                alert('Error: 내용은 필수 값입니다!');
            }
            else {
                //로컬 스토리지에 저장해준다
                localStorage.setItem(memoTitle, this.textArea.value);
            }
        }
    }

    //메모 로드 버튼 눌렀을 시
    this.loadBtn.onclick = () => {
        // 왼쪽 추가 메뉴를 보이게 한다
        this.sideNav.toggleAttribute('active');
        // 메모 목록을 전부 초기화한다
        this.memoList.innerHTML = '';
        // localStrage에 있는 모든 값들을 가져와서 메모 목록을 생성한다
        for(let i = 0; i < localStorage.length; i++){
            const memoTitle = localStorage.key(i);
            this.memoList.insertAdjacentHTML('beforeend', `<li><span>${memoTitle}</span><i class="fa-solid fa-trash-can"></i></li>`);
        }
    }
}