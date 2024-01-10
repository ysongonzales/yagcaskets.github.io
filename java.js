const header = document.querySelector("header") ;

window.addEventListener("scroll" ,function(){
    header.classList.toggle ("sticky" , this.window.scrollY > 0);
}) 

let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('.navmenu')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}


let previewContainer = document.querySelector('.product-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

       previewContainer.style.display = 'flex';

document.querySelectorAll('.products .row ').forEach(row =>{
    row.onclick = () =>{
     let name = row.getAttribute('data-name');
     previewBox.forEach(preview =>{
     let target = preview.getAttribute('data-target');
           if (name == target){
        preview.classList.add('active');
     }
     });
   }
});