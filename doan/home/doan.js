document.addEventListener("DOMContentLoaded", function() {
    console.log('Loaded page')
    window.addEventListener('scroll', function() {
        // trả về vị trí chuột hiện tại
        if(window.pageYOffset < 300) {
            console.log('Dang o vi tri: ', window.pageYOffset); 
        }
        if(window.pageYOffset > 300)
        console.log('Đang ở vị trí lớn hơn 300');
    })
})
document.addEventListener("DOMContentLoaded", function() {
    var thaydoimenu = document.querySelector('.menu');

    window.addEventListener('scroll', function() {
        if(window.pageYOffset > 300) {
            thaydoimenu.classList.add('menunho');
        }
        else {
            thaydoimenu.classList.remove('menunho');
        }
    })
})
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('myShow').addEventListener('click', function () {
        toggle(document.querySelectorAll('#myDIV'));
    });

    function toggle (elements, specifiedDisplay) {
        var element, index;
      
        elements = elements.length ? elements : [elements];
        for (index = 0; index < elements.length; index++) {
          element = elements[index];
      
          if (isElementHidden(element)) {
            element.style.display = '';
      
            // If the element is still hidden after removing the inline display
            if (isElementHidden(element)) {
              element.style.display = specifiedDisplay || 'block';
            }
          } else {
            element.style.display = 'none';
          }
        }
        function isElementHidden (element) {
          return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
        }
    }
})
