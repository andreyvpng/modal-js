document.querySelector('#btn').onclick = function() {
  Modal.init({'text': 'just a text'});
}

var elem = document.createElement('div');

elem.appendChild(document.createTextNode('elem'));

document.querySelector('#btn1').onclick = function() {
  Modal.init({'elem': elem});
}

document.querySelector('#btn2').onclick = function() {
  Modal.init();
}
