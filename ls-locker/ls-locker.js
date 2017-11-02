var blurb = document.querySelector('#blurb');
blurb.addEventListener('input', function (event) {
    window.localStorage.setItem("blurb", event.target.value);
});

blurb.value = window.localStorage.getItem("blurb");