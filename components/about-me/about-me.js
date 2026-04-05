const experiences = [
    { name: "Angular", start: 2024 },
    { name: "TypeScript", start: 2024 },
    { name: "SCSS", start: 2024 },
    { name: "HTML", start: 2017 },
    { name: "JavaScript", start: 2017 },
    { name: "CSS", start: 2017 },
    { name: "Bootstrap", start: 2019 },
    { name: "Java", start: 2021 },
    { name: "Spring Boot", start: 2024 },
    { name: "PHP", start: 2018 },
    { name: "C / C++", start: 2018 },
    { name: "SQL", start: 2017 },
];

function getExperiences() {
    const container = document.getElementById('experiences-container');

    experiences.forEach(exp => {
        const item = document.createElement('div');
        item.classList.add('experiences-item');

        const years = getYears(exp.start);

        item.innerHTML = `
            <h2 class="experience-name poppins-semibold">${exp.name}</h2>
            <p class="experience-years poppins-light">
                ${years} ${years === 1 ? 'anno' : 'anni'} di esperienza
            </p>
        `;

        container.appendChild(item);
    });
}

function getYears(start, end = new Date().getFullYear()) {
    return end - start;
}