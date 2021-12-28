$menu=document.querySelector(".menu")
$close=document.querySelector(".close")
$top=document.querySelector(".top")

$menu.addEventListener('click', ()=>{
    $top.classList.add('show')
    $close.classList.add('show')
    console.log('hola')
})

$close.addEventListener('click', ()=>{
    $top.classList.remove('show')
    $close.classList.remove('show')
})