// Animate AOS
AOS.init({ duration: 1000, once: true });

// Testimonial carousel
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;
setInterval(() => {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[index].classList.add('active');
  index = (index + 1) % testimonials.length;
}, 3000);

// Animated counters for stats
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat span");
  const speed = 50;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const inc = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
