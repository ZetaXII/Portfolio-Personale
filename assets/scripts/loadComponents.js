fetch('/components/navbar/navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

fetch('/components/about-me/about-me.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('about-me').innerHTML = data;
        getExperiences();
    });

fetch('/components/projects/projects.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('projects').innerHTML = data;
        getProjects();
    });

fetch('/components/contacts/contacts.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('contacts').innerHTML = data;
        charCounterTextArea();
    });

fetch('/components/footer/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        document.getElementById("credits-year").innerHTML = new Date().getFullYear();
    });