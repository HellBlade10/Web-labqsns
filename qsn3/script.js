
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('nav ul').classList.toggle('show');
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelector('nav ul').classList.remove('show');
        });
    });
