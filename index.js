animations.width = 900;
animations.height = 900;

let bg = '#050505ff';
let fg = '#d40707ff';

let ctx = animations.getContext("2d");

let clear = () => {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, animations.width, animations.height)
}

let point = (x, y) => {
  ctx.fillRect(0, 0, 100, 100);
  ctx.fillStyle = fg;
}

clear();
point(100, 100)
