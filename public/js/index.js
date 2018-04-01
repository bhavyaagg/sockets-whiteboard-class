/**
 * Created by bhavyaagg on 01/04/18.
 */
const socket = io();

$(document).ready(function () {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let current = {};
  let drawing = false;

  function drawLine(x1, y1, x2, y2) {
    if (!drawing) {
      return;
    }
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }


  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mouseout', onMouseOut);

  function onMouseDown(e) {
    current.x1 = e.clientX;
    current.y1 = e.clientY;
    drawing = true;
  }

  function onMouseUp(e) {
    drawLine(current.x1, current.y1, e.clientX, e.clientY);
    drawing = false;
  }

  function onMouseMove(e) {
    drawLine(current.x1, current.y1, e.clientX, e.clientY);
    current.x1 = e.clientX;
    current.y1 = e.clientY;
  }

  function onMouseOut(e) {
    console.log("Mouse Out")
  }
})
