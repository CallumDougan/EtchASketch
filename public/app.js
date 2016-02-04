window.onload = function(){
  console.log('App started');

// SETUP VARS

var canvas = document.getElementById('main');
var context = canvas.getContext('2d');
var colourSelect = document.getElementById('colours');
var colour = 'red';
var colours = ['red', 'green', 'blue', 'wheat'];
var colourList = document.createElement('select');
colourSelect.appendChild(colourList);
var x = 300;
var y = 100;


  // BUTTON VARS

  var clearButton = document.getElementById('clear');
  var leftButton = document.getElementById('left');
  var rightButton = document.getElementById('right');
  var upButton = document.getElementById('up');
  var downButton = document.getElementById('down');
  var upLeftButton = document.getElementById('up-left');
  var upRightButton = document.getElementById('up-right');
  var downLeftButton = document.getElementById('down-left');
  var downRightButton = document.getElementById('down-right');

  // SETUP SHAPES
  this.setup = function(){
    context.fillStyle = 'blue';
    context.fillRect(0, 0, 80, 50);

    context.fillStyle = 'green';
    context.fillRect(300, 100, 80, 80);

    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.moveTo(50, 0);
    context.lineTo(50, 500);
    context.stroke();
  }

  setup();

  this.buildSelect = function(colours){
    for (var i = 0; i < colours.length; i++) {
      var opt = document.createElement('option');
      opt.innerText = colours[i];
      colourList.appendChild(opt);
    };
  }

  buildSelect(colours);

  canvas.onclick = function(event){
    var x = event.x;
    var y = event.y;
    console.log('click detected at: x -', x, 'y -', y);
    clickLine(x, y);
  };

  colourList.onchange = function(){
    colour = colours[this.selectedIndex];
    console.log('colour selected: ', colour);
  };

  var clickLine = function(x, y){
    context.beginPath();
    console.log ('x is now: ', x)
    context.strokeStyle = colour;
    context.lineWidth = 5;
    context.moveTo(x, y);
    context.lineTo(300, 100);
    context.stroke();
    clickCircle(x, y);
  };

  var clickCircle = function(x, y){
    context.beginPath();
    context.strokeStyle = 'red'
    context.arc(x, y, 20, 0, Math.PI*2, true);
    context.stroke();
  };

  clearButton.onclick = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  // RESETTING STATE FOR LINE DRAWING

  context.moveTo(x, y);
  // context.strokeStyle = colour;




  leftButton.onclick = function(){
    console.log('clicked left');
    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = colour;
    context.lineTo((x - 25), y);
    context.stroke();
    x -= 25;
    context.closePath();
  }

  rightButton.onclick = function(){
    console.log('clicked right');
    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = colour;
    context.lineTo((x + 25), y);
    context.stroke();
    x += 25;
    context.closePath();
  }

  upButton.onclick = function(){
    console.log('clicked up');
    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = colour;
    context.lineTo(x, (y - 25));
    context.stroke();
    y -= 25;
    context.closePath();
  }

  downButton.onclick = function(){
    console.log('clicked down');
    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = colour;
    context.lineTo(x, (y + 25));
    context.stroke();
    y += 25;
    context.closePath();
  }

  upLeftButton.onclick = function(){
    console.log('clicked up left');
    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = colour;
    context.lineTo((x - 25), (y - 25));
    context.stroke();
    x -= 25;
    y -= 25;
    context.closePath();
  }

  upRightButton.onclick = function(){
    console.log('clicked up right');
    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = colour;
    context.lineTo((x + 25), (y - 25));
    context.stroke();
    x += 25;
    y -= 25;
    context.closePath();
  }

  downLeftButton.onclick = function(){
    console.log('clicked down left');
    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = colour;
    context.lineTo((x - 25), (y + 25));
    context.stroke();
    x -= 25;
    y += 25;
    context.closePath();
  }

  downRightButton.onclick = function(){
    console.log('clicked down right');
    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = colour;
    context.lineTo((x + 25), (y + 25));
    context.stroke();
    x += 25;
    y += 25;
    context.closePath();
  }

};
