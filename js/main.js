const btns = document.querySelectorAll('li');


    btns.forEach((btn, idx) => {
      
      btn.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('on'));
        
        btns[idx].classList.add('on');
      })
    })

const box = document.querySelector('.box');

btns[0].addEventListener('click', () => {
	box.style.backgroundColor = 'hotpink';
	console.dir(box);

});
btns[1].addEventListener('click', () => {
	box.style.backgroundColor = 'blue';
	console.dir(box);

});
btns[2].addEventListener('click', () => {
	box.style.backgroundColor = 'orange';
	console.dir(box);

});
