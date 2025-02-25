document.addEventListener("DOMContentLoaded", function () {
    // Modal de Redirecionamento
    const modal = document.getElementById("custom-modal");
    const closeModal = document.getElementById("close-modal");

    function showModal() {
        modal.classList.add("show"); // Usa a classe 'show' para exibir corretamente o modal
    }

    function closeModalAndRedirect(url) {
        modal.classList.remove("show"); // Oculta o modal
        setTimeout(() => {
            window.location.href = url;
        }, 300); // Pequeno delay para suavizar a transição
    }

    // Evento no botão de compra
    const buyButton = document.getElementById("buy-button");
    if (buyButton) {
        buyButton.addEventListener("click", function (event) {
            event.preventDefault();
            showModal();
            closeModal.onclick = function () {
                closeModalAndRedirect("https://pay.hotmart.com/K98281319H?off=ensy7ak0");
            };
        });
    }

    // Evento no botão CTA (rodapé)
    const ctaButton = document.getElementById("cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("click", function (event) {
            event.preventDefault();
            showModal();
            closeModal.onclick = function () {
                closeModalAndRedirect("https://pay.hotmart.com/K98281319H?off=ensy7ak0");
            };
        });
    }

    // Animação suave de rolagem ao clicar nos links internos
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Efeito de digitação no título principal com cursor animado
    const title = document.querySelector(".hero-content h1");
    if (title) {
        let text = title.innerText;
        title.innerHTML = '<span id="typing-text"></span><span class="cursor">|</span>';
        let typingText = document.getElementById("typing-text");
        let cursor = document.querySelector(".cursor");
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                blinkCursor();
            }
        }
        typeWriter();
    }

    // Função para piscar o cursor
    function blinkCursor() {
        const cursor = document.querySelector(".cursor");
        if (cursor) {
            setInterval(() => {
                cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
            }, 500);
        }
    }

    // Animação da capa do livro ao passar o mouse
    const bookCover = document.querySelector(".book-cover");
    if (bookCover) {
        bookCover.addEventListener("mouseover", function () {
            bookCover.style.transform = "scale(1.05)";
            bookCover.style.transition = "transform 0.3s ease-in-out";
        });
        bookCover.addEventListener("mouseout", function () {
            bookCover.style.transform = "scale(1)";
        });
    }

    // Efeito de fade-in para as seções ao rolar a página
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
