const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 50){
sec.classList.add('show');
}
});
});