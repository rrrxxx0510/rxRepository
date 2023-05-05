let $=(i)=>document.querySelectorAll("li")[i];
$(0).addEventListener("click", () => {
    $(0).style.color = "red";
});
$(1).addEventListener("click", () =>{
    var date=new Date();
    var y=date.getFullYear();
    var m=date.getMonth();
    var d=date.getDate();
    $(1).innerHTML=`${y}-${m+1}-${d}`;
})
$(2).addEventListener("click", () =>{
    $(2).classList.add("fn-active");
})
$(3).addEventListener("click", () =>{
    document.querySelector("ul").removeChild($(7));
})
$(4).addEventListener("click", () =>{ 
    window.open("https://www.taobao.com");
})
$(5).addEventListener("click", () =>{
    var newp=document.createElement("li");
    var node=document.createTextNode("p9");
    newp.appendChild(node);
    document.querySelector("ul").appendChild(newp);
})
$(6).addEventListener("click", () =>{
    var box=document.querySelector(".m-box");
    var height=window.innerHeight;
    var width=window.innerWidth;
    box.style.height=height;
    box.style.width=width;
})
const items=document.querySelectorAll("li");
items.forEach((item,index)=>{
    item.onclick=()=>{
        alert(index);
    };
});


let getEle=(e,all=false)=>{
    return (all)?DOC.querySelectorAll('$(e)'):DOC.querySelector('$(e)');
}