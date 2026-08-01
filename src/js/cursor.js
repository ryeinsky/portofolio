const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (isDesktop) {

    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");

    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";

    });

    function animateCursor() {

        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        outline.style.left = outlineX + "px";
        outline.style.top = outlineY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    document.querySelectorAll("a, button").forEach(el => {

        el.addEventListener("mouseenter", () => {
            outline.classList.add("cursor-hover");
        });

        el.addEventListener("mouseleave", () => {
            outline.classList.remove("cursor-hover");
        });

    });

    document.addEventListener("mousemove", (e) => {

        createSpark(e.clientX, e.clientY);

    });

    function createSpark(x, y) {

        const spark = document.createElement("div");

        spark.className = "spark";

        document.body.appendChild(spark);

        const offsetX = (Math.random() - 0.5) * 18;
        const offsetY = (Math.random() - 0.5) * 18;

        spark.style.left = x + offsetX + "px";
        spark.style.top = y + offsetY + "px";

        const size = Math.random() * 5 + 2;

        spark.style.width = size + "px";
        spark.style.height = size + "px";

        const colors = [
            "#ffffff",
            "#93c5fd",
            "#60a5fa",
            "#bfdbfe"
        ];

        spark.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        setTimeout(() => {
            spark.remove();
        }, 800);

    }

}