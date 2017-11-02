var muffinKey = "muffinCnt";

function muffinChange(n) {
    var muffinCnt = Math.max(0, Number(window.localStorage.getItem(muffinKey)) + n);
    window.localStorage.setItem(muffinKey, muffinCnt);
    document
        .querySelector("#counter")
        .innerText = window.localStorage.getItem(muffinKey);
}

document
    .querySelector("#decone")
    .addEventListener("click",
    function (event) {
        muffinChange(-1)
    }
    );

document
    .querySelector("#incfive")
    .addEventListener("click",
    function (event) {
        muffinChange(5)
    }
    );

if (isNaN(Number(window.localStorage.getItem(muffinKey)))) {
    window.localStorage.setItem(muffinKey, 10);
}
muffinChange(0)
