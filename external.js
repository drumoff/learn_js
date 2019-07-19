let list = document.querySelectorAll('li a');
for(let i = 0; i < list.length; i++){
  
  if(list[i].href.indexOf('file://') < 0 && list[i].href.indexOf('internal') < 0){
      list[i].classList.add('external');
  }

  if(list[i].href === '' && list[i].classList.contains('external')){
      list[i].classList.remove('external');
  }
}
