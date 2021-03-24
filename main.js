const highlightBtn = document.querySelector(".highlightBtn");
const clearBtn = document.querySelector(".clearBtn");
const numInput = document.querySelector(".numInput");
const errorContainer = document.querySelector(".error-container");
const numBox = Array.from(document.querySelectorAll(".numBox"));
const numRegex = /^[1-9|*,]$/;

highlightBtn.addEventListener("click", () => {
  const val = numInput.value;
  checkNum(val);
});

function checkNum(val) {
  let error;
  if (!numRegex.test(val)) {
    error = "Please enter a number between 1 and 9";
    errorContainer.style.display = "block";
    errorContainer.innerHTML = error;
  } else {
    errorContainer.style.display = "none";
    numBox.forEach((node, i) => {
      node.classList.remove("marker-highlight");
      if (node.textContent.indexOf(val) > -1) {
        node.classList.add("marker-highlight");
      }
    });
  }
}

clearBtn.addEventListener("click", () => {
  numInput.value = "";
  errorContainer.style.display = "none";

  numBox.forEach((node, i) => {
    node.classList.remove("marker-highlight");
  });
});
