const projects = [
    {
        name: "MVMRapp",
        skills: ["Java", "Android Studio"],
        images: [
            "../../assets/images/mvmrapp_images/mvmrapp1.webp",
            "../../assets/images/mvmrapp_images/mvmrapp2.webp",
            "../../assets/images/mvmrapp_images/mvmrapp3.webp"
        ]
    },
    {
        name: "AlcoList",
        skills: ["Spring Boot", "HTML", "CSS", "Bootstrap", "JavaScript"],
        images: [
            "../../assets/images/alcolist_images/alcolist1.webp",
            "../../assets/images/alcolist_images/alcolist2.webp",
            "../../assets/images/alcolist_images/alcolist3.webp",
            "../../assets/images/alcolist_images/alcolist4.webp",
            "../../assets/images/alcolist_images/alcolist5.webp",
            "../../assets/images/alcolist_images/alcolist6.webp",
            "../../assets/images/alcolist_images/alcolist7.webp",
            "../../assets/images/alcolist_images/alcolist8.webp",
        ]
    },
    {
        name: "Spese Mensili",
        skills: ["Spring Boot", "Angular", "CSS", "Bootstrap", "TypeScript", "Ionic"],
        images: [
            "../../assets/images/spese_mensili_images/spese_mensili1.webp",
            "../../assets/images/spese_mensili_images/spese_mensili2.webp",
            "../../assets/images/spese_mensili_images/spese_mensili3.webp",
            "../../assets/images/spese_mensili_images/spese_mensili4.webp"
        ]
    },
    {
        name: "Progetto: L.I.F.E.",
        skills: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript"],
        images: [
            "../../assets/images/life_images/life1.webp",
            "../../assets/images/life_images/life2.webp",
            "../../assets/images/life_images/life3.webp",
        ]
    },
    {
        name: "BIG-BURGER",
        skills: ["Java Servlet", "HTML", "CSS", "Bootstrap", "JavaScript"],
        images: []
    },
    {
        name: "FOUR Pizza",
        skills: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript"],
        images: []
    }
];

let modalInstance = null;
let carouselInstance = null;

function getProjects() {
    const container = document.querySelector('.projects-container');

    container.innerHTML = projects.map((project, index) => `
        <div class="project-item">

            <div id="carousel-${index}" class="carousel slide project-img-wrapper" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${project.images.map((img, i) => `
                        <div class="carousel-item ${i === 0 ? 'active' : ''}">
                            <img 
                                src="${img}" 
                                alt="${project.name}" 
                                class="project-img"
                                data-project="${index}" 
                                data-img="${i}"
                                loading="lazy"
                            >
                        </div>
                    `).join('')}
                </div>

                ${project.images.length > 1 ? `
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${index}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel-${index}" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
                ` : ''}
            </div>

            <h2 class="project-name poppins-bold">${project.name}</h2>

            <ul class="project-skills poppins-light d-flex align-items-center gap-3 flex-wrap">
                ${project.skills.map(skill => `<li class="skill-item">${skill}</li>`).join('')}
            </ul>

        </div>
    `).join('');
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("project-img")) {
        openModal(e.target.dataset.project, e.target.dataset.img);
    }
});

function openModal(projectIndex, imageIndex) {
    const modalEl = document.getElementById('projectModal');
    const modalInner = document.getElementById("modalCarouselInner");
    const project = projects[projectIndex];

    if (carouselInstance) {
        carouselInstance.dispose();
        carouselInstance = null;
    }

    modalInner.innerHTML = project.images.map((img, i) => `
        <div class="carousel-item ${i == imageIndex ? 'active' : ''}">
            <img src="${img}" class="d-block w-100 modal-img">
        </div>
    `).join('');

    if (!modalInstance) {
        modalInstance = new bootstrap.Modal(modalEl);
    }

    modalInstance.show();

    modalEl.addEventListener('shown.bs.modal', () => {
        carouselInstance = new bootstrap.Carousel(
            document.getElementById('modalCarousel'),
            { interval: false }
        );
    }, { once: true });
}

document.getElementById('projectModal').addEventListener('hidden.bs.modal', () => {
    if (carouselInstance) {
        carouselInstance.dispose();
        carouselInstance = null;
    }

    document.getElementById("modalCarouselInner").innerHTML = "";
});