// main====================================================
const contentItems = document.querySelector('.content__items').children;

Array.from(contentItems).forEach(item => {
  item.addEventListener('click', handleContentItems);
});

function handleContentItems(){
  Array.from(contentItems).forEach(item => {
    item.classList.remove('item-active');
  })
  if(event.target.classList.contains('item')){
    event.target.classList.toggle('item-active');
  }else{
    event.target.parentElement.classList.toggle('item-active');
  }
}