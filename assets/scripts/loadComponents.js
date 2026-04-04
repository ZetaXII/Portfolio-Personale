fetch('/components/navbar/navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

fetch('/components/about-me/about-me.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('about-me').innerHTML = data;
    });