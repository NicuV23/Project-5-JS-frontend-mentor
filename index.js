const switcher = document.getElementsByClassName('switcher')[0];
const stylesheet =document.getElementById('stylesheet');

switcher.addEventListener('click', function() {
    if (stylesheet.getAttribute('href') === 'style1.css') {
        stylesheet.setAttribute('href', 'style2.css');
    
    }
    else{
        stylesheet.setAttribute('href', 'style1.css');
    }
});