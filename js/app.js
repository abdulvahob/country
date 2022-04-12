const body =  document.querySelector('body')
const btnToggle = document.querySelector(".btn-toggle")
console.log(btnToggle);
btnToggle.addEventListener('click'  , function(){
   body.classList.toggle('dark')
})