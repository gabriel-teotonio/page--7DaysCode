const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', (e)=>{
    e.preventDefault()
    const imgMenu = document.querySelector('#imgMenu');
    menu.classList.toggle('showMenu');


    if(menu.classList.contains('showMenu')){
    imgMenu.src = 'https://cdn-icons-png.flaticon.com/512/748/748122.png'
     }else{
      imgMenu.src = 'https://cdn-icons.flaticon.com/png/512/3053/premium/3053386.png?token=exp=1649090863~hmac=7d57986aa9973a868361a14f747fffec'
     }
})