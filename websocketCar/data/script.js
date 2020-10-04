var Socket;
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  Socket = new WebSocket('ws://'+window.location.hostname+':81/');
  Socket.onmessage = function(event){
    console.log(event.data);
  }
}

function _send(head, data){
  console.log(head+data)
  Socket.send(head+data);
}

function doc(id){
  return document.getElementById(id);
}

doc('forward').addEventListener('touchstart', buttonPress);
doc('backward').addEventListener('touchstart', buttonPress);
doc('left').addEventListener('touchstart', buttonPress);
doc('right').addEventListener('touchstart', buttonPress);
doc('stop').addEventListener('touchstart', buttonPress);


function buttonPress(){
  _send(this.id[0], 1);
}

doc('forward').addEventListener('touchend', buttonRelease);
doc('backward').addEventListener('touchend', buttonRelease);
doc('left').addEventListener('touchend', buttonRelease);
doc('right').addEventListener('touchend', buttonRelease);
doc('stop').addEventListener('touchend', buttonRelease);

function buttonRelease(){
  _send(this.id[0], 0);
}

doc('range').addEventListener('input', function(){
  doc('rangeVal').innerHTML = this.value;
  _send('v', this.value);
});
