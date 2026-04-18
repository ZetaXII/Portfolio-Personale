const experiences = [
    { name: "Angular", start: 2024, rating: 4.5 },
    { name: "TypeScript", start: 2024, rating: 4 },
    { name: "SCSS", start: 2024, rating: 4 },
    { name: "HTML", start: 2017, rating: 5 },
    { name: "JavaScript", start: 2017, rating: 4 },
    { name: "CSS", start: 2017, rating: 4 },
    { name: "Bootstrap", start: 2019, rating: 4 },
    { name: "Ionic", start: 2024, rating: 3.5 },
    { name: "Java", start: 2021, rating: 3.5 },
    { name: "Spring Boot", start: 2024, rating: 3 },
    { name: "PHP", start: 2018, rating: 3.5 },
    { name: "SQL", start: 2017, rating: 3.5 },
];

function getExperiences() {
    const container = document.getElementById('experiences-container');

    experiences.forEach(exp => {
        const item = document.createElement('div');
        item.classList.add('experiences-item');

        const years = getYears(exp.start);

        item.innerHTML = `
            <h2 class="experience-name poppins-semibold">${exp.name}</h2>

            <!--
            <p class="experience-years poppins-light">
                ${years} ${years === 1 ? 'anno' : 'anni'} di esperienza
            </p>
            -->

            <div class="experience-rating">
                ${renderRating(exp.rating)}
            </div>
        `;

        container.appendChild(item);
    });
}

function getYears(start, end = new Date().getFullYear()) {
    return end - start;
}

function renderRating(rating) {
    let html = '';

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            html += '<span class="dot full"></span>';
        } else if (rating >= i - 0.5) {
            html += '<span class="dot half"></span>';
        } else {
            html += '<span class="dot empty"></span>';
        }
    }

    return html;
}