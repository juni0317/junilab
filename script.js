const electronContainer = document.querySelector(".electron-container");
const electrons = document.querySelectorAll(".electron");
const nucleus = document.querySelector(".nucleus");

let rotation = 0;

function animateElectrons() {
  rotation += 1;
  electrons.forEach((electron, index) => {
    const angle = rotation + index * (360 / electrons.length);
    const x = Math.cos(angle * (Math.PI / 180)) * 200;
    const y = Math.sin(angle * (Math.PI / 180)) * 200;
    electron.style.transform = `translate(${x}px, ${y}px)`;
  });
  requestAnimationFrame(animateElectrons);
}

animateElectrons();
nucleus.addEventListener('mouseover', () => {
  nucleus.classList.add('active');
});
nucleus.addEventListener('mouseout', () => {
  nucleus.classList.remove('active');
});
