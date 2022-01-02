$form=document.getElementById('form')
$emailTo=document.getElementById('emailTo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $emailTo.setAttribute('href', `mailto:me@leonidasesteban.com?subject=nombre: ${form.get('name')}  correo: ${form.get('email')}&body=${form.get('message')}`)
  $emailTo.click()
  console.log('og')
}