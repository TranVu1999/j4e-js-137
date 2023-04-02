// ====================== Hero Handle ======================
(function() {
  const elmHeroDots = document.querySelectorAll(".hero .slider__dots button");
  const elmFirstHeroSlideItem = document.querySelector(".hero .slider__item");

  function handleOnDots(currentIndex) {
    elmHeroDots.forEach((dot) => {
      dot.classList.remove("active");
    });

    elmHeroDots[currentIndex].classList.add("active");
  }

  function handleSlide(currentIndex) {
    elmFirstHeroSlideItem.style.marginLeft = `-${currentIndex * 100}vw`;
  }

  for (let idx in elmHeroDots) {
    elmHeroDots[idx].onclick = function () {
      handleOnDots(idx);
      handleSlide(idx);
    };
  }
})();
