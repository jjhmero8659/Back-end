const colorList = ['#A8C5FA', '#BDB0F5', '#FADABC', '#D3DEC8', '#DFE0DA'];
const stickyWrap = document.getElementById('sticky_wrap');

init();

//메모장 하나 만들고 배치하기
function init(){
    // 메모장이 들어가는 전체 크기
    const windowSizeWidth = +window.getComputedStyle(stickyWrap).width.split('px')[0];
    const windowSizeHeight = +window.getComputedStyle(stickyWrap).height.split('px')[0];
    //랜덤 위치 값 설정
    const xPos = Math.random() * windowSizeWidth * 0.5;
    const yPos = Math.random() * windowSizeHeight * 0.5;
    // 메모장 생성
    const newNote = new StickNote();
    // 메모장 위치 설정
    newNote.note.style.top = `${yPos}px`;
    newNote.note.style.left = `${xPos}px`;
    // 현재 창에 넣어줌
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

    //메모장 선택 시 가장 상위로 올림
    this.note.onclick = () => {
        [...document.querySelectorAll('.sticky')].forEach(x => {
            x.style.zIndex = '0';
        });
        this.note.style.zIndex = '99';
    }

    //메모 추가 버튼 눌렀을 시
    this.addBtn.onclick = init;

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
            const li = document.createElement('li');
            const span = document.createElement('span');
            const iTag = document.createElement('i');

            li.onclick = () => {this.setting_note(memoTitle)};
            span.textContent = memoTitle;
            iTag.setAttribute('class', 'fa-solid fa-trash-can');
            iTag.onclick = () => { remove_data(li, memoTitle) };

            this.memoList.insertAdjacentElement('beforeend', li);
            li.insertAdjacentElement('beforeend', span);
            li.insertAdjacentElement('beforeend', iTag);
        }
    }

    //노트 저장 목록 클릭했을 때 메모 내용으로 설정하는 곳
    this.setting_note = (key) => {
        //노트의 제목, title을 key값으로 변경
        this.addBtn.nextElementSibling.textContent = key;
        //텍스트에리어의 값을 localStorage의 value값으로 설정
        this.textArea.value = localStorage.getItem(key).toString();
        //side-nav의 acitve값을 변경하여 다시 안나타나게 함
        this.sideNav.toggleAttribute('active');
    }

    //노트 닫기 버튼 눌렀을 시
    this.closeBtn.onclick = () => {
        if((!(this.textArea.value.trim() === '') && confirm('정말 삭제하시겠습니까?')) || this.textArea.value.trim() === '') {
            this.note.remove();
        }
    }

    //저장되어있는 메모장의 데이터 삭제하기 (쓰레기통 버튼 눌렀을 시) => 눌린 쓰레기통, title 전달
    function remove_data(element, key){
        if( confirm('정말 삭제하시겠습니까?')){
            localStorage.removeItem(key);
            element.remove();
        }
    }
}

//메모장 드래그 이동 이벤트
stickyWrap.addEventListener('mousedown', e => {
    if(e.target.className === 'menu') {
        const shiftX = e.clientX - e.target.parentElement.getBoundingClientRect().left;
        const shiftY = e.clientY - e.target.parentElement.getBoundingClientRect().top;
        
        stickyWrap.addEventListener('mousemove', move);

        stickyWrap.addEventListener('mouseup', () => {
            stickyWrap.removeEventListener('mousemove', move);
            stickyWrap.onmouseup = null;
        })

        function move(e){
            drag(e.pageX, e.pageY);
        }

        function drag(pageX, pageY){
            e.target.parentElement.style.left = pageX - shiftX + 'px';
            e.target.parentElement.style.top = pageY - shiftY + 'px';
        }
    }
})