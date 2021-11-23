let items =document.getElementsByClassName('list-gruop-items')
console.log(items);
items[1].textContent='hello 2'
items[3].style.backgroundcolor='green'
for(let i=0;i<items.length;i++){
    items[i].style.fontweight='bold'
}