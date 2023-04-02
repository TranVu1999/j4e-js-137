(function () {
  const elmQuestionTitle = document.querySelectorAll(
    ".faqs .question__item .label"
  );

  for (let idx in elmQuestionTitle) {
    elmQuestionTitle[idx].onclick = function () {
      this.parentNode.classList.toggle("active");
    };
  }
})();
