var elForm = document.querySelector('.js-form');
var elInp = document.querySelector('.js-inp');
var elList = document.querySelector('.js-list');
var elBtn = document.querySelector('.js-btn');

elForm.addEventListener('submit', function(evt){
   evt.preventDefault()
   var elInpVal = elInp.value;
   elInp.value = '';
   var newItem = document.createElement('li')
   newItem.textContent = elInpVal;
   elList.appendChild(newItem);

})
var record = new webkitSpeechRecognition();
record.lang = 'uz-UZ'

elBtn.addEventListener('click', function () {
   record.start();
   document.body.style.backgroundColor = 'green';
})


record.onend = function () {
   document.body.style.backgroundColor = 'red'
}
record.onresult = function (evt) {
   elInp.value = evt.results[0][0].transcript;
}
