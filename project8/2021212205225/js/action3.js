var dataElem=document.querySelector("tbody");
var addBtn=document.querySelector(".add-btn");
var rowCount;
var idList;

dataElem.addEventListener('click',(event)=>{
    if(event.target.classList.contains("delete-btn")){
        var row=event.target.parentNode.parentNode;
        //删除行
        row.parentNode.removeChild(row);
        rowCount=dataElem.rows.length;
        idList=document.querySelectorAll('.id');
        for(var i=0;i<rowCount;i++){
            idList[i].textContent=i+1;
        }
    }
});
addBtn.addEventListener('click',()=>{
    //创建新行
    var newRow=document.createElement('tr');
    //创建新列
    var idCell=document.createElement('td');
    idCell.classList.add("id");

    var newCell=document.createElement('td');

    var deleteCell=document.createElement('td');
    var newDeleteBtn=document.createElement('button');
    newDeleteBtn.classList.add("delete-btn");
    newDeleteBtn.textContent="Delete";
    deleteCell.appendChild(newDeleteBtn);

    newRow.appendChild(idCell);
    newRow.appendChild(newCell);
    newRow.appendChild(deleteCell);

    dataElem.appendChild(newRow);
    rowCount=dataElem.rows.length;
    idList=document.querySelectorAll('.id');
    for(var i=0;i<rowCount;i++){
        idList[i].textContent=i+1;
    }

})