document.addEventListener('keydown', function(uno) {
  if (uno.key === 'y') {
   uno.preventDefault();
   document.addEventListener('keydown', function(due) {
     if (due.key === 'Y') {
       due.preventDefault();
       document.addEventListener('keydown', function(dri) {
         if (dri.key === 'y') {
           dri.preventDefault();
           alert('Aaaaaawh look at you - XSS @ Y-Sec');
         }
       });
     }
   });
  }
});
