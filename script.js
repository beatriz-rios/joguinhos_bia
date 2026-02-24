const spider = document.getElementById('spider');
let mouseX = 0;
let mouseY = 0;
let spiderX = 0;
let spiderY = 0;

// Velocidade de perseguição (0.01 lento a 0.2 rápido)
const speed = 0.08; 

// Atualiza a posição do mouse
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // Cálculo de interpolação (Lerp)
    // A aranha se move uma fração da distância entre ela e o mouse a cada frame
    spiderX += (mouseX - spiderX) * speed;
    spiderY += (mouseY - spiderY) * speed;

    // Calcular o ângulo para a aranha "olhar" para o mouse
    const angle = Math.atan2(mouseY - spiderY, mouseX - spiderX) * 180 / Math.PI;

    // Aplicar a posição e a rotação (compensando o centro da div)
    spider.style.transform = `translate(${spiderX - 20}px, ${spiderY - 20}px) rotate(${angle + 90}deg)`;

    requestAnimationFrame(animate);
}

// Inicia o loop de animação
animate();