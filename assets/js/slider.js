export function runSlider() {
  let unit = 50;
  let count = 0;
  let moveX = window.innerWidth;
  const sliderIndicators = Array.from(
    document.querySelectorAll(".slider-indicator")
  );

  return setInterval(() => {
    if (count >= 3) {
      moveX = -moveX - 350;
      count = 0;
      unit = 50;
    } else {
      if (moveX < 0) {
        moveX = window.innerWidth;
      }
      count += 1;
      moveX += (moveX * 20) / 100;
      unit += 50;
    }

    sliderIndicators.forEach((slider) => {
      Number.parseInt(slider.dataset.index) == count
        ? slider.classList.add("slider-indicator-active")
        : slider.classList.remove("slider-indicator-active");
    });

    document.querySelector(".slider").scrollBy(moveX, 0);
  }, 4000);
}
