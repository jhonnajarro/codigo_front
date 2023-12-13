const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const accordionDescripcion = this.nextElementSibling;
    const plusIcon = this.querySelector(".plus-icon");
    const minusIcon = this.querySelector(".minus-icon");

    if (accordionDescripcion.style.maxHeight) {
      accordionDescripcion.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      accordionDescripcion.style.maxHeight =
        accordionDescripcion.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
