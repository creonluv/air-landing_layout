let currentIndex = 0;

function updateImage() {
  const imageDiv = document.querySelector(".header__bottom-image");

  if (currentIndex !== 1) {
    imageDiv.classList.add("image_2");
  } else {
    imageDiv.classList.remove("image_2");
  }

  console.log(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  console.log(nextButton);

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      console.log("Previous button clicked");
      currentIndex = currentIndex === 0 ? 1 : 0;
      updateImage();
    });

    nextButton.addEventListener("click", () => {
      console.log("Next button clicked");
      currentIndex = currentIndex === 1 ? 0 : 1;
      updateImage();
    });
  } else {
    console.error("Navigation buttons not found.");
  }

  updateImage(); // Initial load
});
