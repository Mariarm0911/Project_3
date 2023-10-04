function formatText(command) {
    document.execCommand(command, false, null);
}

$(document).ready(function() {
    $('.navbar ul li').hover(
      function() {
        $(this).find('a').css('color', '#C8DCB8'); 
        $(this).find('::after').css('width', '100%'); 
      },
      function() {
        $(this).find('a').css('color', '#fff'); 
        $(this).find('::after').css('width', '0');
      }
    );
  });

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    const revealElements = document.querySelectorAll('.reveal-element');
  
    revealElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  
  handleScroll();
  