const colorList = ['#A8C5FA', '#BDB0F5', '#FADABC', '#D3DEC8', '#DFE0DA'];

const init = () => {
    let Note = new StickyNote().note;
    document.querySelector("#sticky_wrap").appendChild(Note);
}

function StickyNote(){
    this.note = document.createElement("div");
    this.note.classList.add("sticky");
    this.note.insertAdjacentHTML("beforeend",
        `
                    <nav class="menu">
                        <div>
                            <button class="add"><i class="fa-solid fa-plus"></i></button>
                            <span>UNTITLED</span>
                        </div>
                        <div class="right-menu">
                            <button class="save"><i class="fa-solid fa-floppy-disk"></i></button>
                            <button class="load"><i class="fa-solid fa-list-ul"></i></button>
                            <button class="close"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </nav>
                    <textarea></textarea>
                    <nav class="side-nav">
                        <ul class="color-list"></ul>
                        <ul class="memo-list"></ul>
                    </nav>
        `
    )

    this.loadBtn = this.note.querySelector(".right-menu > .load");
    this.saveBtn = this.note.querySelector(".right-menu > .save");
    this.sideNav = this.note.querySelector(".side-nav");
    this.colorlist_UL = this.note.querySelector(".color-list");
    this.textArea = this.note.querySelector("textarea");
    this.MemoList = this.note.querySelector(".memo-list");

    this.loadBtn.addEventListener("click",() => {
        this.sideNav.toggleAttribute("active");
    });

    colorList.forEach(colorValue => {
        this.colorlist_UL.insertAdjacentHTML("beforeend",`<li></li>`);
        const li = this.colorlist_UL.lastElementChild;
        li.style.backgroundColor = colorValue;
        li.addEventListener("click",()=>{
            this.textArea.style.backgroundColor = colorValue;
            this.note.style.backgroundColor = colorValue;
        });

    });

    this.saveBtn.addEventListener("click",()=>{
        let title = prompt("????????? ??????????????????")
        if(title){
            if(confirm("?????? ???????????????????")){
                if(this.textArea.value.trim("") !== ""){
                    if(localStorage.getItem(title)){
                        if(confirm("????????? ???????????????. ?????? ???????????????????")){
                            localStorage.setItem(title,this.textArea.value);
                            addStickyList(title);
                        }
                        else{
                            alert("????????? ?????? ???????????????.")
                        }
                    }
                    else{
                        localStorage.setItem(title,this.textArea.value);
                        addStickyList(title);
                    }
                }
                else{
                    alert("ERROR : ????????? ?????? ?????? ?????? ?????????.")
                }
            }
        }
        else{
            alert("ERROR : ????????? ?????? ?????? ?????? ?????????.")
        }
        
        
    });

    const addStickyList = (title) => {
        console.log(this.MemoList)
        this.MemoList.insertAdjacentHTML("beforeend",`<li><span>${title}</span><i class="fa-solid fa-trash-can"></i></li>`);
    }

}

init();