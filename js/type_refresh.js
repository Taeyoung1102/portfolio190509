var texts = ["과일듬뿍", "영양 가득한"];
var count = 0;
var index = 0;
var currentText = '';
var letter = '';

(function type(){
  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, index++);
  document.querySelector('span.type').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type, 300);
}());
