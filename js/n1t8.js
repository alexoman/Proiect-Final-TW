var imageVisible = true;

var btn = document.getElementById('buton');

btn.addEventListener('click', function () {
    console.log('bla');
    var images = document.getElementsByTagName('img');
    if (imageVisible) {
        btn.innerHTML="Afiseaza imagini";
        for (var i = 0; i < images.length; i++)
        images[i].style.display = 'none'
        imageVisible = false;
    } else {
        btn.innerHTML="Ascunde Imagini";
        for (var i = 0; i < images.length; i++)
        images[i].style.display = 'inline'
        imageVisible = true;
    }
});