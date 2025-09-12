function readMore() {
    var moreWrapper = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (moreWrapper.classList.contains('expanded')) {
        moreWrapper.classList.remove('expanded');
        btnText.innerHTML = "Read more";
    } else {
        moreWrapper.classList.add('expanded');
        btnText.innerHTML = "Read less";
    }
}