var Modal = (function(){
  'use strict';

  // create elems
  var modal_elem = document.createElement('div'),
      modal_wrapper = document.createElement('div'),
      modal_content = document.createElement('p'),
      modal_close_button = document.createElement('span');

  // set classes
  modal_elem.className = 'modal';
  modal_wrapper.className = 'modal-wrapper';
  modal_close_button.className = 'modal-close';

  // set button text
  modal_close_button.innerText = '❌';

  // event for close button
  modal_close_button.addEventListener('click', function(event) {
    modal_elem.remove();
  });

  modal_wrapper.appendChild(modal_close_button);
  modal_wrapper.appendChild(modal_content);
  modal_elem.appendChild(modal_wrapper);
  
  return {
    init: function(obj) {
      // create child element... and insert to body
      var new_elem;
      if (arguments.length == 1) {
        if (obj.text) {
          new_elem = document.createTextNode(obj.text);
        } else if (obj.elem) {
          new_elem = obj.elem;
        } else {
          new_elem = document.createTextNode('bad arguments');
        }
      } else {
        new_elem = document.createTextNode('bad arguments');
      }
      modal_wrapper.replaceChild(new_elem, modal_content);
      modal_content = new_elem;
      document.body.insertBefore(modal_elem, document.body.firstChild);
    }
  }
}());
