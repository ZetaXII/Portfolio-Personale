const experiences = [
    { name: "Angular", start: 2024 },
    { name: "React", start: 2023 },
    { name: "Vue", start: 2024 },
    { name: "JavaScript", start: 2021 }
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