$menu=document.querySelector(".menu")
$close=document.querySelector(".close")
$top=document.querySelector(".top")
$nav=document.querySelector(".nav")


$menu.addEventListener('click', ()=>{
    $top.classList.add('show')
    $close.classList.add('show')
})

$close.addEventListener('click', ()=>{
    $top.classList.remove('show')
    $close.classList.remove('show')
})

$nav.addEventListener('click', ()=>{
    $top.classList.remove('show')
    $close.classList.remove('show')
})