var searchButton = document.getElementsByClassName('search-btn')[0]
var searchInput = document.querySelector('.search-input');

searchButton.addEventListener('click', function(e) {
    e.preventDefault();

    var searchValue = searchInput.value;

    if (searchValue) {
        window.location.href = '/search/' + searchValue + '/type/all';

    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {

        document.querySelector('.navabar').style.position = 'fixed';
        document.querySelector('.navabar').style.top = '0';
        document.querySelector('.navabar').style.zIndex = '22';
        document.querySelector('.navabar').style.backgroundColor = '#fff';
        document.querySelector('.navabar').style.boxShadow = '0px 0px 5px #eeeeee';
        document.querySelector('.navabar').style.left = '0';
        document.querySelector('.navabar').style.height = '60px';
        document.querySelector('.navabar').style.width = '100%';
        document.querySelector('.navabar').style.minHeight = '60px';
        document.querySelector('.navabar').style.background = 'rgba(255,255,255,0.8)';
        document.querySelector('.navabar').style.backdropFilter = 'blur(5px)';
        // if (window.innerWidth > 900) {
        //     document.querySelector('.navabar').appendChild(document.querySelector('.events'));

        // } else {
        //     if (document.querySelector('.navabar').contains(document.querySelector('.events'))) {
        //         document.querySelector('.navabar').removeChild(document.querySelector('.events'));
        //     }
        // }
    } else {
        document.querySelector('.navabar').style.position = 'relative';
        document.querySelector('.navabar').style.top = '0';

        document.querySelector('.navabar').style.backgroundColor = '#fff';
        document.querySelector('.navabar').style.boxShadow = 'none';
        document.querySelector('.navabar').style.left = '0';
        document.querySelector('.navabar').style.height = 'auto';
        document.querySelector('.navabar').style.width = '100%';
        document.querySelector('.navabar').style.minHeight = '100px';
        document.querySelector('.navabar').style.background = 'rgba(255,255,255,1)';
        document.querySelector('.navabar').style.backdropFilter = 'blur(0px)';
        // if (document.querySelector('.navabar').contains(document.querySelector('.events'))) {
        //     document.querySelector('.navabar').removeChild(document.querySelector('.events'));
        // }

    }

});



document.querySelector('.settings').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.settings-container-container').style.display = 'flex';
    document.querySelector('.settings-container').style.display = 'flex';

    document.querySelector('.body-search').style.overflow = 'hidden';

})

document.querySelector('.settings-container-container').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.settings-container-container').style.display = 'none';
    document.querySelector('.settings-container').style.display = 'none';

    document.querySelector('.body-search').style.overflow = 'auto';

})
document.querySelector('.close-settings').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.settings-container-container').style.display = 'none';
    document.querySelector('.settings-container').style.display = 'none';
    document.querySelector('.body-search').style.overflow = 'auto';

})
document.querySelector('.body-search').style.overflow = 'auto';