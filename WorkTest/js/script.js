let shareBtn = document.querySelector(".media-top button");
let shareMenu = document.querySelector(".media-conteiner");

shareBtn.onclick = function () {
  shareMenu.style.display = "flex";
};

let closeBtn = document.querySelector(".close-btn");
closeBtn.onclick = function () {
  shareMenu.style.display = "none";
};

const sizes = document.querySelectorAll("#sizes");
const colors = document.querySelectorAll("#colors");
const examples = document.querySelectorAll("#examples");
console.log(examples);

sizes.forEach((event) => {
  event.addEventListener("click", (current) => {
    sizes.forEach((event) => {
      event.classList.remove("active");
    });
    current.target.classList.add("active");
  });
});

colors.forEach((event) => {
  event.addEventListener("click", (current) => {
    colors.forEach((event) => {
      event.classList.remove("active");
    });
    current.target.classList.add("active");
  });
});

examples.forEach((event) => {
  event.addEventListener("click", (current) => {
    examples.forEach((event) => {
      event.classList.remove("active");
    });
    current.target.classList.add("active");
    console.dir(event);
  });
});
