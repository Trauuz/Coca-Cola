const MIN_PRELOAD_TIME = 2000; 
const preloadStart = performance.now();

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const elapsed = performance.now() - preloadStart;
    const remainingTime = MIN_PRELOAD_TIME - elapsed;

    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => preloader.style.display = "none", 500);
        }, remainingTime > 0 ? remainingTime : 0);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const catalogItems = document.querySelectorAll('.brands-catalog-item');
    const overlay = document.getElementById('brand-overlay');
    const overlayTitle = document.getElementById('brand-title');
    const overlayDescription = document.getElementById('brand-description');
    const closeBtn = document.getElementById('close-overlay');
    const viewAllBtn = document.querySelector('.primary-btn');

    const brandData = [
        { title: "Coca-Cola", description: "The original and refreshing soft drink loved worldwide.", href: "https://www.coca-cola.com/ph/en/brands/coca-cola" },
        { title: "Royal", description: "Orange-flavored soda bursting with citrus taste.", href: "https://www.coca-cola.com/ph/en/brands/royal" },
        { title: "Sprite", description: "Crisp lemon-lime soda with a clean, refreshing finish.", href: "https://www.coca-cola.com/ph/en/brands/sprite" },
        { title: "Wilkins", description: "Pure and trusted bottled water for everyday hydration.", href: "https://www.coca-cola.com/ph/en/brands/wilkins" },
        { title: "Lemon-Dou", description: "A Japanese-inspired lemon drink with a unique twist.", href: "https://www.coca-cola.com/ph/en/brands/lemon-dou" },
        { title: "Minute Maid", description: "Delicious fruit juices packed with real fruit goodness.", href: "https://www.coca-cola.com/ph/en/brands/minute-maid" },
        { title: "A&W", description: "Classic root beer with a rich and creamy taste.", href: "https://www.coca-cola.com/ph/en/brands/a-and-w" },
        { title: "Nutriboost", description: "Nutritious milk drinks for a healthy lifestyle.", href: "https://www.coca-cola.com/ph/en/brands/nutriboost" },
    ];

    catalogItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const brand = brandData[index];
            overlayTitle.textContent = brand.title;
            overlayDescription.textContent = brand.description;
            
            viewAllBtn.onclick = function() {
                window.location.href = brand.href;
            };
            
            overlay.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.add('hidden');
        }
    });

    function showTime() {
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            timeElement.innerHTML = new Date().toUTCString();
        }
    }

    showTime();
    setInterval(showTime, 1000);
});

function redirectTo(href) {
    window.location = href;
}

  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const dotsContainer = document.querySelector('.carousel-dots');

  let currentIndex = 0;

  function updateCarousel(index) {
    track.style.transform = 'translateX(-' + index * 100 + '%)';
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    document.querySelectorAll('.dot')[index].classList.add('active');
  }

  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel(currentIndex);
    });
    dotsContainer.appendChild(dot);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
  }, 7000); 