let btn=document.querySelector('button');
let inp=document.querySelector('input');
let ol=document.querySelector('ol');

btn.addEventListener("click", function(){
    let item=document.createElement('li');
    item.innerText=inp.value;
    ol.appendChild(item);
    inp.value='';


    let deleteBtn=document.createElement('button');
    deleteBtn.innerText='Delete';
    deleteBtn.classList.add('delete');
    item.appendChild(deleteBtn);
})

ol.addEventListener("click", function(event){
    if(event.target.nodeName=='BUTTON'){
        let itemList=event.target.parentElement;
        itemList.remove();
        console.log('deleted');
    }
})