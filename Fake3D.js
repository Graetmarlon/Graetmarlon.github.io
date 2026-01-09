document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.ImagePostContainer');

  const MAX_ROT_X = 25;
  const MAX_ROT_Y = 25;
  const DEPTH = 500;
  const SMOOTHING = 0.1;

  for (const el of elements) {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    let isLeaving = false;
    let leaveStartX = 0;
    let leaveStartY = 0;
    let leaveProgress = 0;

    function easeOutBack(t) {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }

    el.addEventListener('mousemove', e => {
      isLeaving = false;

      const rect = el.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const py = ((e.clientY - rect.top)  / rect.height) * 2 - 1;

      targetX = -py * MAX_ROT_X;
      targetY =  px * MAX_ROT_Y;
    });

    el.addEventListener('mouseleave', () => {
      isLeaving = true;
      leaveStartX = currentX;
      leaveStartY = currentY;
      leaveProgress = 0;
    });

    function update() {
      if (!isLeaving) {
        currentX += (targetX - currentX) * SMOOTHING;
        currentY += (targetY - currentY) * SMOOTHING;
      } else {

        leaveProgress += 0.004;
        const eased = easeOutBack(Math.min(leaveProgress, 1));

        currentX = leaveStartX + (0 - leaveStartX) * eased;
        currentY = leaveStartY + (0 - leaveStartY) * eased;
      }

      el.style.transform = `
        translateZ(${DEPTH}px)
        rotateX(${currentX}deg)
        rotateY(${currentY}deg)
        rotateZ(0deg)
      `;

      requestAnimationFrame(update);
    }

    update();
  }
});
