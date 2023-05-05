
var contents=document.querySelectorAll('.content');
var btnList=document.querySelectorAll('.nav-btn');
btnList.forEach(btn=>{
  btn.addEventListener('click',()=>{
    btnList.forEach((b)=>{
      b.classList.remove('active');
    })
    contents.forEach((c)=>{
      c.classList.remove('active');
    })
    var content_id=btn.getAttribute('flag');
    var contentItem=document.getElementById(content_id);
    btn.classList.add('active');
    contentItem.classList.add('active');
  })
})
