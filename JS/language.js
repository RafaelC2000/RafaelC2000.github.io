$es=document.querySelector(".spanish")
$en=document.querySelector(".english")

$es.addEventListener('click', ()=>{
    $es.classList.toggle('language_selected')
})

$en.addEventListener('click', ()=>{
    $en.classList.toggle('language_selected')
})
