'use strict';

const qa = document.querySelectorAll(".js-ac"); // js-ac要素すべて取得
function acToggle() {
const content = this.nextElementSibling;
content.classList.toggle("is-open");
const qa = this;
qa.classList.toggle('is-open');
}

for (let i = 0; i < qa.length; i++) { // for文でjs-acメニューをループ処理
qa[i].addEventListener("click", acToggle);
}