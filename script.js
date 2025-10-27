const icons = document.querySelectorAll('.iconqn');
const answers = document.querySelectorAll('.answer');

icons.forEach((icon, index) => {
  icon.addEventListener('click', function() {
    const answer = answers[index];
    // console.log(answer);
    
    if (answer.classList.contains("visible")) {
        answer.classList.remove('visible');
        newSrc = './assets/images/icon-plus.svg';
        icon.classList.add("fade"); // Start fade-out
        setTimeout(function () {
          icon.src = newSrc; // Swap image after fade-out
          icon.classList.remove("fade"); // Fade back in
        }, 100); 
    } else {
        // answer.style.display = 'none';
        answer.classList.add("visible")
        newSrc = './assets/images/icon-minus.svg';
        icon.classList.add("fade"); // Start fade-out
        setTimeout(function () {
          icon.src = newSrc; // Swap image after fade-out
          icon.classList.remove("fade"); // Fade back in
        }, 100); 
    }
  });
});
