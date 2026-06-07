'use strict';

// プロフィール画像のフェードインアニメーション
const profileImg = document.getElementById('profile-img');
let opacityValue = 0;
const fadeIn = setInterval(() => {
  if (opacityValue >= 1) {
    clearInterval(fadeIn);
  } else {
    opacityValue += 0.05;
    profileImg.style.opacity = opacityValue;
  }
}, 50);
