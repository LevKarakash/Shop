// Zmiana obrazów

var index = 0

show_image(index)

function show_image(i) {
    var image = document.getElementsByClassName("image");

    index += i

    if (index >= image.length) {
        index = 0
    }
    else if (index < 0){
        index = image.length - 1
    }

    for (var j = 0; j < image.length; j++){
        image[j].style.display = 'none'
    }

    image[index].style.display = 'block';

}

var interval = setInterval(function() {
    show_image(1);
}, 15000);

// End Zmiana obrazów


// Uwaga Dodano do koszyka

document.addEventListener('DOMContentLoaded', function() {
    const myCart = document.querySelectorAll('.myCart')

    myCart.forEach(myCart => {
        myCart.addEventListener('click', () => {
            alert('Dodano do koszyka!')
        })
    })
})

// End Uwaga Dodano do koszyka

// Uwaga Dodano do ulubionych

document.addEventListener('DOMContentLoaded', function() {
    const myFavorite = document.querySelectorAll('.myFavorite')

    myFavorite.forEach(myFavorite => {
        myFavorite.addEventListener('click', () => {
            alert('Dodano do ulubionych!')
        })
    })
})

// End Uwaga Dodano do ulubionych