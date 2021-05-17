const cleanInput = document.querySelector('#cleanInput');
const nameInput = document.querySelector('#name');
// console.log(cleanInput);
// console.log(nameInput);

cleanInput.addEventListener('click', handleCleanInput);

function handleCleanInput(){
  nameInput.value = '';
}