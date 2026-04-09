fetch('components/navbar/navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

fetch('components/about-me/about-me.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('about-me').innerHTML = data;
        getExperiences();
    });

fetch('components/projects/projects.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('projects').innerHTML = data;

        getProjects();

        const modalEl = document.getElementById('projectModal');

        if (modalEl) {
            modalEl.addEventListener('hidden.bs.modal', () => {
                if (carouselInstance) {
                    carouselInstance.dispose();
                    carouselInstance = null;
                }

                document.getElementById("modalCarouselInner").innerHTML = "";

                if (document.activeElement) {
                    document.activeElement.blur();
                }
                document.body.focus();
            });
        }
    });

fetch('components/contacts/contacts.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('contacts').innerHTML = data;
        initMailSenderContacts();
        charCounterTextArea();
    });

fetch('components/footer/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        document.getElementById("credits-year").innerHTML = new Date().getFullYear();
    });