var audio = document.getElementById("audioPlayer"),
    loader = document.getElementById("preloader");

function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function playpause() {
    if (!document.getElementById("switchforsound").checked) {
        audio.pause();
    } else {
        audio.play();
    }
}

function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function (element) {
        element.classList.toggle("invertapplied");
    });
}

window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

let emptyArea = document.getElementById("emptyarea"),
    mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    mobileTogglemenu.classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    mobileTogglemenu.classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section"),
    navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
    mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    mobilenavLi.forEach(li => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(currentSection)) {
            li.classList.add("activeThismobiletab");
        }
    });

    navLi.forEach(li => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(currentSection)) {
            li.classList.add("activeThistab");
        }
    });
});

console.log(
    "%c Designed and Developed by Vinod Jangid ",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
);

let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

document.addEventListener("contextmenu", function (event) {
    if (event.target.nodeName === "IMG") {
        event.preventDefault();
    }
}, false);

let Pupils = document.getElementsByClassName("footer-pupil"),
    pupilsArr = Array.from(Pupils),
    pupilStartPoint = -10,
    pupilRangeX = 20,
    pupilRangeY = 18,
    mouseXStartPoint = 0,
    mouseXEndPoint = window.innerWidth,
    currentXPosition = 0,
    fracXValue = 0,
    mouseYEndPoint = window.innerHeight,
    currentYPosition = 0,
    fracYValue = 0,
    mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    fracXValue = (currentXPosition = event.clientX - mouseXStartPoint) / mouseXRange;
    fracYValue = (currentYPosition = event.clientY) / mouseYEndPoint;
    
    let translateX = pupilStartPoint + fracXValue * pupilRangeX;
    let translateY = pupilStartPoint + fracYValue * pupilRangeY;
    
    pupilsArr.forEach(pupil => {
        pupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
};

const windowResize = () => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);



// Add this to your main.js file or include it in a script tag at the end of your HTML before the closing body tag

// First, make sure to include GSAP library
document.addEventListener("DOMContentLoaded", function() {
    // Check if GSAP is not already loaded
    if (typeof gsap === 'undefined') {
      // Create and load GSAP script
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
      gsapScript.onload = initJourneyAnimations;
      document.body.appendChild(gsapScript);
      
      // Load ScrollTrigger plugin
      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
      scrollTriggerScript.onload = initJourneyAnimations;
      document.body.appendChild(scrollTriggerScript);
    } else {
      // GSAP is already loaded
      initJourneyAnimations();
    }
  });
  
  function initJourneyAnimations() {
    // Wait for ScrollTrigger to be available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setTimeout(initJourneyAnimations, 100);
      return;
    }
  
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  
    // Animate the neon line
    gsap.to('.neon-line', {
      scrollTrigger: {
        trigger: '.journey-section-container',
        start: 'top 70%',
        end: 'top 20%',
        scrub: 1,
        toggleActions: 'play none none reverse'
      },
      height: '100%',
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out'
    });
  
    // Get all the journey items
    const journeyItems = document.querySelectorAll('.journey-item');
    
    // Create a timeline for each journey item
    journeyItems.forEach((item, index) => {
      const dot = item.querySelector('.journey-dot');
      const content = item.querySelector('.journey-content');
      const direction = item.classList.contains('left') ? -50 : 50;
      
      // Set initial states
      gsap.set(item, { opacity: 1, visibility: 'visible' });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'center 60%',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      });
      
      // Add animations to the timeline
      tl.fromTo(dot, 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
      )
      .fromTo(content, 
        { x: direction, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
      );
      
      // Add color pulse animation to dots
      gsap.to(dot, {
        boxShadow: '0 0 15px rgba(0, 255, 234, 0.9), 0 0 30px rgba(143, 0, 255, 0.7)',
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut'
      });
    });
    
    // Create a pin for the entire journey section for smooth scrolling experience
    ScrollTrigger.create({
      trigger: '.roadmap-container',
      start: 'top 20%', 
      end: 'bottom 80%',
      pin: false, // Set to true if you want to pin the container
      pinSpacing: true,
      markers: false // Set to true for debugging
    });
    
    // Cosmic particles background effect
    createCosmicParticles();
  }
  
  // function createCosmicParticles() {
  //   const journeySection = document.querySelector('.journey-section-container');
    
  //   // Create a container for particles
  //   const particlesContainer = document.createElement('div');
  //   particlesContainer.className = 'cosmic-particles';
  //   particlesContainer.style.position = 'absolute';
  //   particlesContainer.style.top = '0';
  //   particlesContainer.style.left = '0';
  //   particlesContainer.style.width = '100%';
  //   particlesContainer.style.height = '100%';
  //   particlesContainer.style.overflow = 'hidden';
  //   particlesContainer.style.pointerEvents = 'none';
  //   particlesContainer.style.zIndex = '0';
    
  //   journeySection.insertBefore(particlesContainer, journeySection.firstChild);
    
  //   // Create particles
  //   for (let i = 0; i < 50; i++) {
  //     createParticle(particlesContainer);
  //   }
  // }
  
  // function createParticle(container) {
  //   const particle = document.createElement('div');
    
  //   // Random size between 2-4px
  //   const size = Math.random() * 2 + 2;
    
  //   // Random color from our color scheme
  //   const colors = ['#00ffe7', '#8f00ff', '#ff00a2', '#ffe600'];
  //   const color = colors[Math.floor(Math.random() * colors.length)];
    
  //   // // Apply styles
  //   particle.style.position = 'absolute';
  //   particle.style.width = `${size}px`;
  //   particle.style.height = `${size}px`;
  //   particle.style.backgroundColor = color;
  //   particle.style.borderRadius = '50%';
  //   particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
  //   particle.style.opacity = Math.random() * 0.5 + 0.2;
    
  //   // Random position
  //   particle.style.left = `${Math.random() * 100}%`;
  //   particle.style.top = `${Math.random() * 100}%`;
    
  //   // Add to container
  //   container.appendChild(particle);
    
  //   // Animate with GSAP
  //   animateParticle(particle);
  // }
  
  // function animateParticle(particle) {
  //   // Get current position
  //   const currentLeft = parseFloat(particle.style.left);
  //   const currentTop = parseFloat(particle.style.top);
    
  //   // Random destination within 10%
  //   const destX = currentLeft + (Math.random() * 20 - 10);
  //   const destY = currentTop + (Math.random() * 20 - 10);
    
  //   // Animation duration between 10-20 seconds
  //   const duration = Math.random() * 10 + 10;
    
  //   // Create animation
  //   gsap.to(particle, {
  //     left: `${destX}%`,
  //     top: `${destY}%`,
  //     duration: duration,
  //     ease: 'none',
  //     opacity: Math.random() * 0.5 + 0.1,
  //     onComplete: () => {
  //       // Recursively animate for continuous movement
  //       animateParticle(particle);
  //     }
  //   });
  // }

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  };
  
  document.querySelector("#theme-toggle").addEventListener("click", toggleTheme);
  