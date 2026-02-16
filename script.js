// ========== Smooth Scroll para Enlaces ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ========== Animación al scroll para elementos ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease-out forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar elementos
document
  .querySelectorAll(
    ".highlight-card, .news-card, .benefit-item, .staff-card, .recognition-box, .training-card",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });

// ========== Efecto de scroll en header ==========
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    header.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
  } else {
    header.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ========== Animación de Progress Bars ==========
const animateProgressBars = () => {
  const progressBars = document.querySelectorAll(".progress-fill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetWidth = entry.target.style.width;
          entry.target.style.width = "0%";
          setTimeout(() => {
            entry.target.style.width = targetWidth;
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  progressBars.forEach((bar) => observer.observe(bar));
};

animateProgressBars();

// ========== Animación de números ==========
const animateNumbers = () => {
  const numbers = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const finalNumber = parseInt(element.textContent);
          let currentNumber = 0;
          const increment = Math.ceil(finalNumber / 30);
          const interval = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
              element.textContent = finalNumber;
              clearInterval(interval);
            } else {
              element.textContent = currentNumber;
            }
          }, 30);
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.5 },
  );

  numbers.forEach((number) => observer.observe(number));
};

animateNumbers();

// ========== Tabla responsive con scrolling ==========
const addTableScroll = () => {
  const tables = document.querySelectorAll(".raffle-table, .recognition-table");
  tables.forEach((table) => {
    const wrapper = table.closest(".raffle-table-wrapper, .recognition-box");
    if (wrapper && table.offsetWidth > wrapper.offsetWidth) {
      wrapper.style.overflowX = "auto";
    }
  });
};

window.addEventListener("load", addTableScroll);
window.addEventListener("resize", addTableScroll);

// ========== Tooltip para información adicional ==========
document.querySelectorAll("[title]").forEach((element) => {
  element.addEventListener("mouseenter", function () {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = this.getAttribute("title");
    tooltip.style.cssText = `
            position: absolute;
            background: var(--primary-color);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 0.85rem;
            white-space: nowrap;
            pointer-events: none;
            z-index: 1000;
        `;
    document.body.appendChild(tooltip);

    const rect = this.getBoundingClientRect();
    tooltip.style.left = rect.left + "px";
    tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + "px";
  });
});

// ========== Copy to clipboard para datos ==========
const addCopyFeature = () => {
  document
    .querySelectorAll(".staff-card p strong, .recognition-table .name")
    .forEach((element) => {
      element.style.cursor = "pointer";
      element.title = "Haz clic para copiar";

      element.addEventListener("click", function (e) {
        e.stopPropagation();
        const text = this.textContent;
        navigator.clipboard.writeText(text).then(() => {
          const notification = document.createElement("div");
          notification.textContent = "✓ Copiado";
          notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--success);
                    color: white;
                    padding: 12px 20px;
                    border-radius: 6px;
                    z-index: 2000;
                    animation: slideIn 0.3s ease;
                `;
          document.body.appendChild(notification);
          setTimeout(() => notification.remove(), 2000);
        });
      });
    });
};

addCopyFeature();

// ========== Animación de entrada al cargar ==========
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// ========== Print-friendly styles ==========
if (window.matchMedia) {
  const mediaQueryList = window.matchMedia("print");
  mediaQueryList.addListener(() => {
    if (mediaQueryList.matches) {
      document.body.style.backgroundColor = "white";
    }
  });
}

// ========== Datos para compartir en redes (opcional) ==========
const addShareFeatures = () => {
  const shareButton = document.createElement("div");
  shareButton.className = "share-button";
  shareButton.innerHTML = "📤 Compartir";
  shareButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--primary-color);
        color: white;
        padding: 12px 20px;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 999;
        font-weight: 600;
        transition: all 0.3s ease;
    `;

  shareButton.addEventListener("mouseenter", () => {
    shareButton.style.transform = "scale(1.1)";
    shareButton.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
  });

  shareButton.addEventListener("mouseleave", () => {
    shareButton.style.transform = "scale(1)";
    shareButton.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
  });

  shareButton.addEventListener("click", () => {
    const url = window.location.href;
    const text =
      "Informativo InnoPrint Nº 15 - Descubre nuestros hitos, reconocimientos y beneficios";

    if (navigator.share) {
      navigator.share({
        title: "InnoPrint Informativo",
        text: text,
        url: url,
      });
    } else {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText(`${text}\n${url}`);
      alert("Enlace copiado al portapapeles");
    }
  });

  document.body.appendChild(shareButton);
};

// Uncomment para habilitar botón de compartir
// addShareFeatures();

// ========== Estadísticas de vista ==========
const trackPageMetrics = () => {
  const metrics = {
    loadTime: performance.now(),
    sections: document.querySelectorAll(".section").length,
    images: document.querySelectorAll("img").length,
  };

  console.log("📊 Métricas de la página:", metrics);
};

window.addEventListener("load", trackPageMetrics);

// ========== Modo oscuro (opcional) ==========
const toggleDarkMode = () => {
  document.documentElement.style.colorScheme =
    document.documentElement.style.colorScheme === "dark" ? "light" : "dark";
};

// Descomentar para agregar soporte de modo oscuro
// const darkModeToggle = document.createElement('button');
// darkModeToggle.innerHTML = '🌙';
// darkModeToggle.style.cssText = `...`;
// darkModeToggle.addEventListener('click', toggleDarkMode);
// document.body.appendChild(darkModeToggle);
