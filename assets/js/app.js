'use strict';

//--- side-form mouse handler ------------------------------------------------
(function() {
  let sideForm = document.querySelector('.side-form');
  let orderButton = document.querySelector('.nav__button');
  let cancelButton = document.querySelector('.side-form__cancel');

  //- open side-form -
  orderButton.addEventListener('click', function(event) {
    sideForm.classList.add('side-form_open');
    event.preventDefault();
  });
  //- close side-form -
  cancelButton.addEventListener('click', function(event) {
    sideForm.classList.remove('side-form_open');
    event.preventDefault();
  });
  //- close side-form on click outside of the form -
  document.addEventListener('click', function(event) {
    if (event.target === orderButton) { // if click on orderButton
      event.preventDefault();
      return;
    }
    if (event.target.closest('.side-form') === sideForm) { // if click inside the form
      return;
    }
    sideForm.classList.remove('side-form_open');
  });
})();

//--- banner-show mouse handler ----------------------------------------------
(function() {
  let pickBoxSet = document.querySelectorAll('.pick-box');

  pickBoxSet.forEach = [].forEach;
  pickBoxSet.forEach(function(item) {
    let activeBanner = item.previousElementSibling;
    //- show banner -
    item.addEventListener('mouseenter', function() {
      activeBanner.classList.add('service__bg_active');
      activeBanner.style.left = '0';
    });
    //- show banner -
    item.addEventListener('mouseleave', function() {
      activeBanner.classList.remove('service__bg_active');
      activeBanner.style.left = '';
    });
  });
})();

//--- portfolio-show mouse handler -------------------------------------------
(function() {
  document.addEventListener('click', portfolioPopup);

  function portfolioPopup(event) {

    let activePopup = findActivePopup();
    let targetPopup = findTargetPopup();

    if (!activePopup) {           // if no active popup
      if (!targetPopup) return;   //    if no fired popup - exit
      targetPopup.hidden = false; //    turn on the fired popup

    } else if (!targetPopup) {    // if active popup & no fired popup
      activePopup.hidden = true;  //    turn off the active popup

    } else {                      // if active & fired popups
      activePopup.hidden = true;  //    turn off the active one
      targetPopup.hidden = false; //    turn on the fired one
    }

    //-- looking for an active popup --
    function findActivePopup() {
      let popupSet = document.querySelectorAll('.popup');
      let activePopup;

      popupSet.forEach = [].forEach;
      popupSet.forEach(function(item) {
        if (!item.hidden) {
          activePopup = item;
        }
      });
      return activePopup;
    }

    //-- searching for a target popup --
    function findTargetPopup() {
      let targetElement = event.target.closest('.portfolio__description');
      let targetPopup;
      if (targetElement) {
        targetPopup = targetElement.nextElementSibling;
      }
      return targetPopup;
    }
  }
})();
//--- discrete scroll --------------------------------------------------------
// will add code later
(function() {
  //- fired custom event -
  let scrollButton = document.querySelector('.scroll-control');

  scrollButton.addEventListener('click', function() {

    let myScrollEvent = new CustomEvent(
        'myScroll',
        {
          detail: 'scrollUp',
          bubbles: true,
        },
    );

    scrollButton.dispatchEvent(myScrollEvent);
  });
})();

//--- slider -----------------------------------------------------------------
(function() {
  const duration = 600; //ms
  const transitionStyle = 'transform ' + duration + 'ms';

  document.addEventListener('myScroll', scrollScreen);

  function scrollScreen(event) {
    let screenSet = document.querySelectorAll('[data-screen]');
    let activeScreen = document.querySelector('[data-active-screen="true"]');
    let activeScreenNum = Number(activeScreen.dataset.screen);
    let nextScreenNum;
    let nextScreen;

    // check for scroll direction
    if (event.detail === 'scrollUp') {
      nextScreenNum = activeScreenNum + 1;
    } else {
      nextScreenNum = activeScreenNum - 1;
    }

    // check for screenSet range
    if (nextScreenNum >= screenSet.length) nextScreenNum = 0;
    if (nextScreenNum < 0) nextScreenNum = screenSet.length - 1;

    // search for nextScreen element
    let nextScreenAttr = '[data-screen="' + nextScreenNum + '"]';
    nextScreen = document.querySelector(nextScreenAttr);

    // prepare screens for animation
    nextScreen.style.zIndex = '-1';
    nextScreen.style.transition = transitionStyle;
    activeScreen.style.transition = transitionStyle;

    // animation
    activeScreen.style.transform = 'translate3d(0, -100%, 0)';
    nextScreen.classList.remove('screen_rotated');

    // change styles of the screens after animation
    setTimeout(function() {
      nextScreen.style.zIndex = '0';
      activeScreen.style.zIndex = '-10';
      nextScreen.style.transition = '';
      activeScreen.style.transition = '';

      activeScreen.style.transform = '';
      activeScreen.classList.add('screen_rotated');

      activeScreen.dataset.activeScreen = 'false';
      nextScreen.dataset.activeScreen = 'true';
    }, duration);

    //- redraw some interface -
    // header menu and order button fill
    let headerMenu = document.querySelector('.nav');
    let orderButton = document.querySelector('.nav__button');

    if (nextScreenNum === 0) {
      headerMenu.classList.remove('js_nav_black_bg');
      orderButton.classList.add('nav__button_filled_red');
    } else {
      headerMenu.classList.add('js_nav_black_bg');
      orderButton.classList.remove('nav__button_filled_red');
    }

    // controls fill
    let nextControlAttr = '[data-control-num="' + nextScreenNum + '"]';
    let activeControlAttr = '[data-control-num="' + activeScreenNum + '"]';
    let nextControl = document.querySelector(nextControlAttr);
    let activeControl = document.querySelector(activeControlAttr);
    nextControl.classList.add('controls_active');
    activeControl.classList.remove('controls_active');
  }
})();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vLy0tLSBzaWRlLWZvcm0gbW91c2UgaGFuZGxlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKGZ1bmN0aW9uKCkge1xyXG4gIGxldCBzaWRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWZvcm0nKTtcclxuICBsZXQgb3JkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19idXR0b24nKTtcclxuICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtZm9ybV9fY2FuY2VsJyk7XHJcblxyXG4gIC8vLSBvcGVuIHNpZGUtZm9ybSAtXHJcbiAgb3JkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgc2lkZUZvcm0uY2xhc3NMaXN0LmFkZCgnc2lkZS1mb3JtX29wZW4nKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbiAgLy8tIGNsb3NlIHNpZGUtZm9ybSAtXHJcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHNpZGVGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtZm9ybV9vcGVuJyk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG4gIC8vLSBjbG9zZSBzaWRlLWZvcm0gb24gY2xpY2sgb3V0c2lkZSBvZiB0aGUgZm9ybSAtXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gb3JkZXJCdXR0b24pIHsgLy8gaWYgY2xpY2sgb24gb3JkZXJCdXR0b25cclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2lkZS1mb3JtJykgPT09IHNpZGVGb3JtKSB7IC8vIGlmIGNsaWNrIGluc2lkZSB0aGUgZm9ybVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzaWRlRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLWZvcm1fb3BlbicpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxuLy8tLS0gYmFubmVyLXNob3cgbW91c2UgaGFuZGxlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbigpIHtcclxuICBsZXQgcGlja0JveFNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waWNrLWJveCcpO1xyXG5cclxuICBwaWNrQm94U2V0LmZvckVhY2ggPSBbXS5mb3JFYWNoO1xyXG4gIHBpY2tCb3hTZXQuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICBsZXQgYWN0aXZlQmFubmVyID0gaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgLy8tIHNob3cgYmFubmVyIC1cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBhY3RpdmVCYW5uZXIuY2xhc3NMaXN0LmFkZCgnc2VydmljZV9fYmdfYWN0aXZlJyk7XHJcbiAgICAgIGFjdGl2ZUJhbm5lci5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgfSk7XHJcbiAgICAvLy0gc2hvdyBiYW5uZXIgLVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFjdGl2ZUJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdzZXJ2aWNlX19iZ19hY3RpdmUnKTtcclxuICAgICAgYWN0aXZlQmFubmVyLnN0eWxlLmxlZnQgPSAnJztcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxuLy8tLS0gcG9ydGZvbGlvLXNob3cgbW91c2UgaGFuZGxlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBvcnRmb2xpb1BvcHVwKTtcclxuXHJcbiAgZnVuY3Rpb24gcG9ydGZvbGlvUG9wdXAoZXZlbnQpIHtcclxuXHJcbiAgICBsZXQgYWN0aXZlUG9wdXAgPSBmaW5kQWN0aXZlUG9wdXAoKTtcclxuICAgIGxldCB0YXJnZXRQb3B1cCA9IGZpbmRUYXJnZXRQb3B1cCgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlUG9wdXApIHsgICAgICAgICAgIC8vIGlmIG5vIGFjdGl2ZSBwb3B1cFxyXG4gICAgICBpZiAoIXRhcmdldFBvcHVwKSByZXR1cm47ICAgLy8gICAgaWYgbm8gZmlyZWQgcG9wdXAgLSBleGl0XHJcbiAgICAgIHRhcmdldFBvcHVwLmhpZGRlbiA9IGZhbHNlOyAvLyAgICB0dXJuIG9uIHRoZSBmaXJlZCBwb3B1cFxyXG5cclxuICAgIH0gZWxzZSBpZiAoIXRhcmdldFBvcHVwKSB7ICAgIC8vIGlmIGFjdGl2ZSBwb3B1cCAmIG5vIGZpcmVkIHBvcHVwXHJcbiAgICAgIGFjdGl2ZVBvcHVwLmhpZGRlbiA9IHRydWU7ICAvLyAgICB0dXJuIG9mZiB0aGUgYWN0aXZlIHBvcHVwXHJcblxyXG4gICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgYWN0aXZlICYgZmlyZWQgcG9wdXBzXHJcbiAgICAgIGFjdGl2ZVBvcHVwLmhpZGRlbiA9IHRydWU7ICAvLyAgICB0dXJuIG9mZiB0aGUgYWN0aXZlIG9uZVxyXG4gICAgICB0YXJnZXRQb3B1cC5oaWRkZW4gPSBmYWxzZTsgLy8gICAgdHVybiBvbiB0aGUgZmlyZWQgb25lXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLSBsb29raW5nIGZvciBhbiBhY3RpdmUgcG9wdXAgLS1cclxuICAgIGZ1bmN0aW9uIGZpbmRBY3RpdmVQb3B1cCgpIHtcclxuICAgICAgbGV0IHBvcHVwU2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XHJcbiAgICAgIGxldCBhY3RpdmVQb3B1cDtcclxuXHJcbiAgICAgIHBvcHVwU2V0LmZvckVhY2ggPSBbXS5mb3JFYWNoO1xyXG4gICAgICBwb3B1cFNldC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICBpZiAoIWl0ZW0uaGlkZGVuKSB7XHJcbiAgICAgICAgICBhY3RpdmVQb3B1cCA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGFjdGl2ZVBvcHVwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0gc2VhcmNoaW5nIGZvciBhIHRhcmdldCBwb3B1cCAtLVxyXG4gICAgZnVuY3Rpb24gZmluZFRhcmdldFBvcHVwKCkge1xyXG4gICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucG9ydGZvbGlvX19kZXNjcmlwdGlvbicpO1xyXG4gICAgICBsZXQgdGFyZ2V0UG9wdXA7XHJcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGFyZ2V0UG9wdXAgPSB0YXJnZXRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGFyZ2V0UG9wdXA7XHJcbiAgICB9XHJcbiAgfVxyXG59KSgpO1xyXG4vLy0tLSBkaXNjcmV0ZSBzY3JvbGwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gd2lsbCBhZGQgY29kZSBsYXRlclxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgLy8tIGZpcmVkIGN1c3RvbSBldmVudCAtXHJcbiAgbGV0IHNjcm9sbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtY29udHJvbCcpO1xyXG5cclxuICBzY3JvbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBsZXQgbXlTY3JvbGxFdmVudCA9IG5ldyBDdXN0b21FdmVudChcclxuICAgICAgICAnbXlTY3JvbGwnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRldGFpbDogJ3Njcm9sbFVwJyxcclxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgc2Nyb2xsQnV0dG9uLmRpc3BhdGNoRXZlbnQobXlTY3JvbGxFdmVudCk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG4vLy0tLSBzbGlkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGR1cmF0aW9uID0gNjAwOyAvL21zXHJcbiAgY29uc3QgdHJhbnNpdGlvblN0eWxlID0gJ3RyYW5zZm9ybSAnICsgZHVyYXRpb24gKyAnbXMnO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdteVNjcm9sbCcsIHNjcm9sbFNjcmVlbik7XHJcblxyXG4gIGZ1bmN0aW9uIHNjcm9sbFNjcmVlbihldmVudCkge1xyXG4gICAgbGV0IHNjcmVlblNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNjcmVlbl0nKTtcclxuICAgIGxldCBhY3RpdmVTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY3RpdmUtc2NyZWVuPVwidHJ1ZVwiXScpO1xyXG4gICAgbGV0IGFjdGl2ZVNjcmVlbk51bSA9IE51bWJlcihhY3RpdmVTY3JlZW4uZGF0YXNldC5zY3JlZW4pO1xyXG4gICAgbGV0IG5leHRTY3JlZW5OdW07XHJcbiAgICBsZXQgbmV4dFNjcmVlbjtcclxuXHJcbiAgICAvLyBjaGVjayBmb3Igc2Nyb2xsIGRpcmVjdGlvblxyXG4gICAgaWYgKGV2ZW50LmRldGFpbCA9PT0gJ3Njcm9sbFVwJykge1xyXG4gICAgICBuZXh0U2NyZWVuTnVtID0gYWN0aXZlU2NyZWVuTnVtICsgMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHRTY3JlZW5OdW0gPSBhY3RpdmVTY3JlZW5OdW0gLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGZvciBzY3JlZW5TZXQgcmFuZ2VcclxuICAgIGlmIChuZXh0U2NyZWVuTnVtID49IHNjcmVlblNldC5sZW5ndGgpIG5leHRTY3JlZW5OdW0gPSAwO1xyXG4gICAgaWYgKG5leHRTY3JlZW5OdW0gPCAwKSBuZXh0U2NyZWVuTnVtID0gc2NyZWVuU2V0Lmxlbmd0aCAtIDE7XHJcblxyXG4gICAgLy8gc2VhcmNoIGZvciBuZXh0U2NyZWVuIGVsZW1lbnRcclxuICAgIGxldCBuZXh0U2NyZWVuQXR0ciA9ICdbZGF0YS1zY3JlZW49XCInICsgbmV4dFNjcmVlbk51bSArICdcIl0nO1xyXG4gICAgbmV4dFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV4dFNjcmVlbkF0dHIpO1xyXG5cclxuICAgIC8vIHByZXBhcmUgc2NyZWVucyBmb3IgYW5pbWF0aW9uXHJcbiAgICBuZXh0U2NyZWVuLnN0eWxlLnpJbmRleCA9ICctMSc7XHJcbiAgICBuZXh0U2NyZWVuLnN0eWxlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uU3R5bGU7XHJcbiAgICBhY3RpdmVTY3JlZW4uc3R5bGUudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25TdHlsZTtcclxuXHJcbiAgICAvLyBhbmltYXRpb25cclxuICAgIGFjdGl2ZVNjcmVlbi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApJztcclxuICAgIG5leHRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnc2NyZWVuX3JvdGF0ZWQnKTtcclxuXHJcbiAgICAvLyBjaGFuZ2Ugc3R5bGVzIG9mIHRoZSBzY3JlZW5zIGFmdGVyIGFuaW1hdGlvblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgbmV4dFNjcmVlbi5zdHlsZS56SW5kZXggPSAnMCc7XHJcbiAgICAgIGFjdGl2ZVNjcmVlbi5zdHlsZS56SW5kZXggPSAnLTEwJztcclxuICAgICAgbmV4dFNjcmVlbi5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbiAgICAgIGFjdGl2ZVNjcmVlbi5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcblxyXG4gICAgICBhY3RpdmVTY3JlZW4uc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgIGFjdGl2ZVNjcmVlbi5jbGFzc0xpc3QuYWRkKCdzY3JlZW5fcm90YXRlZCcpO1xyXG5cclxuICAgICAgYWN0aXZlU2NyZWVuLmRhdGFzZXQuYWN0aXZlU2NyZWVuID0gJ2ZhbHNlJztcclxuICAgICAgbmV4dFNjcmVlbi5kYXRhc2V0LmFjdGl2ZVNjcmVlbiA9ICd0cnVlJztcclxuICAgIH0sIGR1cmF0aW9uKTtcclxuXHJcbiAgICAvLy0gcmVkcmF3IHNvbWUgaW50ZXJmYWNlIC1cclxuICAgIC8vIGhlYWRlciBtZW51IGFuZCBvcmRlciBidXR0b24gZmlsbFxyXG4gICAgbGV0IGhlYWRlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Jyk7XHJcbiAgICBsZXQgb3JkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19idXR0b24nKTtcclxuXHJcbiAgICBpZiAobmV4dFNjcmVlbk51bSA9PT0gMCkge1xyXG4gICAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2pzX25hdl9ibGFja19iZycpO1xyXG4gICAgICBvcmRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZfX2J1dHRvbl9maWxsZWRfcmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoJ2pzX25hdl9ibGFja19iZycpO1xyXG4gICAgICBvcmRlckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX2J1dHRvbl9maWxsZWRfcmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29udHJvbHMgZmlsbFxyXG4gICAgbGV0IG5leHRDb250cm9sQXR0ciA9ICdbZGF0YS1jb250cm9sLW51bT1cIicgKyBuZXh0U2NyZWVuTnVtICsgJ1wiXSc7XHJcbiAgICBsZXQgYWN0aXZlQ29udHJvbEF0dHIgPSAnW2RhdGEtY29udHJvbC1udW09XCInICsgYWN0aXZlU2NyZWVuTnVtICsgJ1wiXSc7XHJcbiAgICBsZXQgbmV4dENvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5leHRDb250cm9sQXR0cik7XHJcbiAgICBsZXQgYWN0aXZlQ29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYWN0aXZlQ29udHJvbEF0dHIpO1xyXG4gICAgbmV4dENvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbHNfYWN0aXZlJyk7XHJcbiAgICBhY3RpdmVDb250cm9sLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRyb2xzX2FjdGl2ZScpO1xyXG4gIH1cclxufSkoKTtcclxuXHJcbiJdfQ==
