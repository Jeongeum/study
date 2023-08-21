const ball = document.querySelector('img');

ball.onmousedown = function (e) {
  let shiftX = e.clientX - ball.getBoundingClientRect().left;
  let shiftY = e.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  document.body.append(ball);

  moveAt(e.pageX, e.pageY);
  console.log('마우스 클릭!');

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
    console.log('~마우스 움직이기~');
  }

  document.addEventListener('mousemove', onMouseMove);

  ball.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
    console.log('마우스떼기!');
  };
};

// 드래그 앤 드롭 시작할 때 공을 찍어 올려서 계속 드래그하게 되는 문제 발생
// 브라우저 자체에서 이미지나 요소에 대한 드래그 앤 드롭을 지원
// 브라우저에서 제공하는 기능이 자동 실행되어 작성한 코드와 충돌
ball.ondragstart = function () {
  return false;
};
