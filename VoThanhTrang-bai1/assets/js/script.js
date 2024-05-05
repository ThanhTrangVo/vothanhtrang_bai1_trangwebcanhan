'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// exp variables
const expItem = document.querySelectorAll("[data-exp-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const expModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < expItem.length; i++) {

  expItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-exp-avatar]").src;
    modalImg.alt = this.querySelector("[data-exp-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-exp-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-exp-text]").innerHTML;

    expModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", expModalFunc);
overlay.addEventListener("click", expModalFunc);











