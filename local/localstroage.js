const textArea = document.getElementById("text");
const textColor = document.getElementById("textcolor");
const bgColor = document.getElementById("bgcolor");
const [settingBtn, loadBtn] = document.getElementsByTagName("button");

textColor.addEventListener("change",()=>{
    textArea.style.color = textColor.value;
});
bgColor.addEventListener("change",()=>{
    textArea.style.backgroundColor = bgColor.value;
});

settingBtn.addEventListener("click",()=>{
    localStorage.setItem("textColor",textColor.value);
    localStorage.setItem("bgColor",bgColor.value);
})

loadBtn.addEventListener("click",()=>{
    let L_textColor = localStorage.getItem("textColor");
    let L_backColor = localStorage.getItem("bgColor");

    textColor.value = L_textColor;
    bgColor.value = L_backColor;
    textArea.style.color = L_textColor;
    textArea.style.backgroundColor = L_backColor;
})