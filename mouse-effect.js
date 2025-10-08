// --- Эффект свечения за курсором ---
document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(124, 58, 237, 0.25),
            #000 80%
        )
    `;
});

// --- Создание и движение фиолетовых частиц ---
const particleCount = 25;
const particles = [];

for (let i = 0; i < particleCount; i++) {
    const span = document.createElement("span");
    span.classList.add("particle");
    document.body.appendChild(span);
    particles.push({
        el: span,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
    });
}

function animateParticles() {
    particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;

        p.el.style.left = p.x + "px";
        p.el.style.top = p.y + "px";
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();
