document.addEventListener("DOMContentLoaded", () => {
  const totalSlides = 5;
  const sectionHeight =
    (document.body.scrollHeight - window.innerHeight) / totalSlides;

  const slides = document.querySelectorAll(".slide");
  // debugger
  slides.forEach((slide, index) => {
    gsap.to(slide, {
      zIndex: (progress) => {
        return progress < 0.5 ? 1 : 5 - index;
      },
      scrollTrigger: {
        start: sectionHeight * index + " top",
        end: sectionHeight * (index + 1) + " top",
        scrub: 1,
      },
    });

    gsap.fromTo(
      slide,
      {
        scale: index === 0 ? 1 : 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          start: sectionHeight * index + " top",
          end: sectionHeight * (index + 1) + " top",
          scrub: 1,
        },
      }
    );

    if (index !== 0) {
      gsap.fromTo(
        slide.querySelector(".slide-img"),
        {
          scale: 2,
        },
        {
          scale: 1,
          top: "0%",
          scrollTrigger: {
            start: sectionHeight * index + " top",
            end: sectionHeight * (index + 1) + " top",
            scrub: 1,
          },
        }
      );
    }
  });
});
