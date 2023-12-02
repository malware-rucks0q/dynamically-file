// Script to include HTML files dynamically
document.getElementById('header-content').innerHTML = fetch('header.html').then(response => response.text());
document.getElementById('nav-content').innerHTML = fetch('navigation.html').then(response => response.text());
document.getElementById('main-content').innerHTML = fetch('main.html').then(response => response.text());
document.getElementById('footer-content').innerHTML = fetch('footer.html').then(response => response.text());
