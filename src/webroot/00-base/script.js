document.addEventListener("DOMContentLoaded", function() {

const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, { edge: "right", inDuration: 700, outDuration: 700 });

//Parallax

const parallax = document.querySelector(".parallax");
M.Parallax.init(parallax, {});

//Pannel
const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleOpenActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach(panels => panels.addEventListener("click", toggleOpen));
panels.forEach(panels => panels.addEventListener("transitionend", toggleOpenActive)
);

//Video Youtube barre Vertical
//Surtout Ne pas oublier de faire un DOMContentLoaded pour signer cause The problem is that your selector does not return any elements at the stage when your script is executed.
//The solution will either need to wrap your script into an event callback for DOM ready

  let wrapper = document.getElementById("wrapper");
  let topLayer = wrapper.querySelector(".top");
  let handle = wrapper.querySelector(".handle");
  let skew = 0;
  let delta = 0;
  let switchs = document.querySelector(".switchs");

  switchs.addEventListener("change", function() {
    if (wrapper.className.indexOf("skewed") != -1) {
      skew = 1000;
    }

    wrapper.addEventListener("mousemove", function(e) {
      if (!switchs.checked) {
        return;
      }

      delta = (e.clientX - window.innerWidth / 2) * 0.5;
      handle.style.left = e.clientX + delta + "px";
      topLayer.style.width = e.clientX + skew + delta + "px";
    });
  });


//Zoom sur la description Materialize

let text = document.getElementById("flow-toggle");
let textZoom = document.querySelector(".textzoom");

text.addEventListener("click", function() {
  textZoom.classList.toggle("flow-text");
});
});
