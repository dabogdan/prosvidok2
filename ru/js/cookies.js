const cookieBanner = document.getElementById('cookie');

let agreeCookiesButton = () => {
    localStorage.setItem('cookies_enabled', '1');
    cookieBanner.classList.add("none");
}

// local storage code
    if (localStorage.getItem('cookies_enabled') === '1') {
        // user accepted cookies
        cookieBanner.classList.add("none");
        cookieBanner.classList.remove("appear");
    }
    if (localStorage.getItem('cookies_enabled') === null) {
        // user have not accepted cookies yet - display banner
        cookieBanner.classList.add("appear");
        cookieBanner.classList.remove("none");
    }