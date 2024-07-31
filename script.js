
const image = document.getElementById('leafImage');
let rotationDegree = 0;

window.addEventListener('scroll', () => {
    rotationDegree += 5;
    image.style.transform = `rotate(${rotationDegree}deg)`;
});