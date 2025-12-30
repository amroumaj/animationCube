animations.width = 900;
animations.height = 900;

let bg = '#050505ff';
let fg = '#d40707ff';

let ctx = animations.getContext("2d");

let clear = () => {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, animations.width, animations.height)
}

let point = ({x, y}) => {
  let s = 10;
  ctx.fillStyle = fg;
  ctx.fillRect(x - s/2, y - s/2, s, s);
}

let screen = (p) => {
  return {
    x: (p.x + 1)/2 * animations.width,
    y: (1 - (p.y + 1)/2) * animations.height,
  }
}

let projection = ({x, y, z}) => {
  return {
    x: x/z,
    y: y/z
  }
}

clear();
point(screen({x: 0, y: 0}))
