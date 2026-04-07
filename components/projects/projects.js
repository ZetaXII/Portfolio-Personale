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
        images: [
            "portfolio1.jpg",
            "portfolio2.jpg"
        ]
    },
    {
        name: "FOUR Pizza",
        skills: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript"],
        images: [
            "portfolio1.jpg",
            "portfolio2.jpg"
        ]
    }
];

function getProjects() {
    const container = document.querySelector('.projects-container');

    container.innerHTML = projects.map((project, index) => `
        <div class="project-item">

            <!-- CAROUSEL -->
            <div id="carousel-${index}" class="carousel slide project-img-wrapper" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${project.images.map((img, i) => `
                        <div class="carousel-item ${i === 0 ? 'active' : ''}">
                            <img src="${img}" alt="${project.name}">
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

            <!-- INFO -->
            <h2 class="project-name poppins-bold">${project.name}</h2>

            <ul class="project-skills poppins-light d-flex align-items-center gap-3 flex-wrap">
                ${project.skills.map(skill => `
                    <li class="skill-item">${skill}</li>
                `).join('')}
            </ul>

        </div>
    `).join('');
}