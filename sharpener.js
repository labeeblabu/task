<li>item 5</li>


let li =document.getElementsByClassName('li')
console.log(li);
li[1].textContent='hello 2'
li[3].style.backgroundcolor='green'
for(let i=0;i<li.length;i++){
    li[i].style.fontweight='bold'
}