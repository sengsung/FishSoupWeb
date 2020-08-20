<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>룰렛</title>
</head>

<body>
  <div style="position: absolute; background-color: red; left: 135px; width: 10px; height:20px; z-index: 5">

  </div>

  <div id="body" style="transform-origin: 132px 131.5px;">
    <div style="position: absolute; z-index: 0">
      <img src="https://ssl.pstatic.net/sstatic/keypage/outside/mobilegame/circle/im/im/bg_circle4.png" width="264"
        height="263">
    </div>

    <div id="label1" class="label" style="top: 50px; left: 113px;">첫번째</div>
    <div id="label2" class="label" style="top: 125px; left: 190px; transform: rotate(90deg);">두번째</div>
    <div id="label3" class="label" style="top: 200px; left: 115px; transform: rotate(180deg);">세번째</div>
    <div id="label4" class="label" style="top: 125px; left: 30px; transform: rotate(270deg);">네번째</div>
  </div>

  <div style="position: absolute; top: 300px">
    <div><span>1: </span><input type="text" id="input1" value="1"></div>
    <div><span>2: </span><input type="text" id="input2" value="2"></div>
    <div><span>3: </span><input type="text" id="input3" value="3"></div>
    <div><span>4: </span><input type="text" id="input4" value="4"></div>
    <button onclick="set()">설정</button>
    <button onclick="rotate()">돌리기</button>
  </div>
</body>

<style>
  .label {
    position: absolute;
    z-index: 2;
    font-size: 17px;
    color: white;
  }
</style>

<script>
  async function sleep(second) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), second);
    });
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function set() {
    document.getElementById('body').style.transform = 'rotate(0)';
    for (let i = 1; i < 5; i++) {
      document.getElementById(`label${i}`).innerText = document.getElementById(`input${i}`).value
    }
  }

  async function rotate() {
    const el = document.getElementById('body')
    let deg = 0;
    let speed = 0;

    for (; speed < 43; speed += 0.2) {
      deg += speed;
      deg %= 360;
      el.style.transform = `rotate(${deg}deg)`;
      await sleep(10);
    }
    deg = (deg + getRandomInt(0, 80) - 15) % 360
    for (; speed > 0; speed -= 0.2) {
      deg += speed;
      deg %= 360;
      el.style.transform = `rotate(${deg}deg)`;
      await sleep(10);
    }
  }
</script>

</html>
