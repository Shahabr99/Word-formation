const h1 = document.querySelector("h1");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

h1.addEventListener("mouseover", function (e) {
  let iterations = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return e.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= e.target.dataset.value.length) {
      clearInterval(interval);
    }
    iterations += 1 / 3;
  }, 30);
});
