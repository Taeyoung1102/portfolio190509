var texts = ["좋은 원재료 ", "다양한 영양 파우더 ", "최적의 블렌딩 노하우"];
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
  setTimeout(type, 350);
}());
