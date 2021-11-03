"use strict";

(function () {
  'use strict';

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open');
  });
})();

function order() {
  document.querySelector(".form-card").classList.add("show");
}

;
document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".form-card").classList.remove("show");
});