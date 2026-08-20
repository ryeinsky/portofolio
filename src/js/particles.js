
const canvas = document.getElementById("stars");

if (canvas) {
    const ctx = canvas.getContext("2d");

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);


const stars = [];
const STAR_COUNT = 120;

for (let i = 0; i < STAR_COUNT; i++) {

    stars.push({

        // Posisi
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        // Ukuran
        radius: Math.random() * 2 + 0.8,

        // Kecepatan bergerak
        dx: (Math.random() - 0.5) * 0.08,
        dy: (Math.random() - 0.5) * 0.08,

        // Twinkle
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,

        // Glow
        glow: Math.random() * 18 + 10,

        // Warna
        color:
            Math.random() < 0.3
                ? "253,108,156"
                : "255,255,255"

    });

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {

        // -------------------------
        // Gerak perlahan
        // -------------------------

        star.x += star.dx;
        star.y += star.dy;

        // Muncul lagi jika keluar layar
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;

        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // -------------------------
        // Twinkle
        // -------------------------

        star.phase += star.twinkleSpeed;

        const opacity =
            0.45 + Math.sin(star.phase) * 0.35;

        // Ukuran ikut "bernapas"
        const size =
            star.radius + Math.sin(star.phase) * 0.2;

        // -------------------------
        // Draw
        // -------------------------

        ctx.beginPath();

        ctx.fillStyle = `rgba(${star.color},${opacity})`;

        ctx.shadowBlur = star.glow * opacity;
        ctx.shadowColor = `rgba(${star.color},1)`;

        ctx.arc(
            star.x,
            star.y,
            size,
            0,
            Math.PI * 2
        );

        ctx.fill();

        ctx.shadowBlur = 0;

    });

    requestAnimationFrame(animate);

    animate();
}