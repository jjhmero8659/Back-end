const titles = ["짱구1","짱구2","짱구3"];
const describe = ["다람쥐 짱구","멍한 짱구","흰둥이 짱구"];
const D_image = document.getElementsByClassName("thumb");
const D_lightbox = document.getElementById("lightbox");
const D_closeBtn = document.getElementById("close-btn");
const D_indicator = document.querySelector(".indicator");
const D_img = document.querySelector("figure").querySelectorAll("img");
const D_indiBtn = document.querySelectorAll("#indicator > input");
const D_Title = document.querySelector("#lightbox > h1");
const D_describe = document.querySelector("#lightbox > p");

[...D_image].forEach((item,index)=>{
    item.addEventListener("click",()=>{
        D_lightbox.setAttribute("class","active");
        InnerLightBox(index);
    })

    D_indicator.insertAdjacentHTML("beforeend",
        `<input type="button" value="${index+1}">`
    )

    D_indicator.lastElementChild.addEventListener("click",()=>{
        InnerLightBox(index);
    })
});

const InnerLightBox = (index) => {
    D_Title.textContent = titles[index];
    D_describe.textContent = describe[index];
    for (let i = 0; i < D_image.length; i++) {
        if(index == i){
            D_img[i].setAttribute("class","active");
        }
        else{
            D_img[i].classList.remove("active");
        }   
    }
}

D_closeBtn.addEventListener("click",()=>{
    D_lightbox.classList.remove("active");
});