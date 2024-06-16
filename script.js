console.log("img ->", "https://wallhaven.cc/w/gj2wge");

const d = document;

let zoom = (e, elemento, percent) => {
  let x, y;
  let objVB = "object-view-box";

  if (e.type.startsWith("touch")) {
    const touch = e.touches[0];
    const rect = elemento.getBoundingClientRect();
    x = touch.clientX - rect.left;
    y = touch.clientY - rect.top;
  } else {
    x = e.offsetX;
    y = e.offsetY;
  }

  let $oneThird = elemento.clientWidth / 3,
    $twoThird = $oneThird + $oneThird;

  if (x <= $oneThird && y <= $oneThird) {
    elemento.style.setProperty(objVB, `inset(0% ${percent}% ${percent}% 0%)`);
  } else if (x >= $oneThird && y <= $oneThird && x <= $twoThird) {
    elemento.style.setProperty(
      objVB,
      `inset(0% ${percent}% ${percent}% ${percent}%)`
    );
  } else if (x >= $twoThird && y <= $oneThird) {
    elemento.style.setProperty(objVB, `inset(0% 0% ${percent}% ${percent}%)`);
  } else if (x <= $oneThird && y >= $oneThird && y <= $twoThird) {
    elemento.style.setProperty(
      objVB,
      `inset(${percent - 10}% ${percent - 10}% ${percent - 10}% 0%)`
    );
  } else if (
    x >= $oneThird &&
    x <= $twoThird &&
    y >= $oneThird &&
    y <= $twoThird
  ) {
    elemento.style.setProperty(objVB, `inset(${percent - 10}%)`);
  } else if (x >= $twoThird && y >= $oneThird && y <= $twoThird) {
    elemento.style.setProperty(
      objVB,
      `inset(${percent - 10}% 0% ${percent - 10}% ${percent - 10}%)`
    );
  } else if (x >= $twoThird && y >= $twoThird) {
    elemento.style.setProperty(objVB, `inset(${percent}% 0% 0% ${percent}%)`);
  } else if (x >= $oneThird && y >= $twoThird && x <= $twoThird) {
    elemento.style.setProperty(
      objVB,
      `inset(${percent}% ${percent}% 0% ${percent}%)`
    );
  } else {
    elemento.style.setProperty(objVB, `inset(${percent}% ${percent}% 0% 0%)`);
  }
};

d.addEventListener("mousemove", (e) => {
  if (e.target.matches(".imagen-vb")) {
    zoom(e, e.target, 25);
  }
});

d.addEventListener("mouseout", (e) => {
  if (e.target.matches(".imagen-vb")) {
    let objVB = "object-view-box";
    e.target.style.setProperty(objVB, `inset(0%)`);
  }
});

d.addEventListener("mouseup", (e) => {
  if (e.target.matches(".imagen-vb")) {
    let objVB = "object-view-box";
    e.target.style.setProperty(objVB, `inset(0%)`);
  }
});

d.addEventListener("mousedown", (e) => {
  if (e.target.matches(".imagen-vb")) {
    zoom(e, e.target, 40);
  }
});

d.addEventListener("touchmove", (e) => {
  if (e.target.matches(".imagen-vb")) {
    zoom(e, e.target, 25);
  }
});

d.addEventListener("contextmenu", (e) => {
  if (e.target.matches(".imagen-vb")) {
    e.preventDefault();
  }
});
