javascript:

function skip() {
    cmg_remove_padg();
};

function fullscreen() {
    let gameField = document.getElementsByClassName("field-game")[0];
    gameField.requestFullscreen();
};

function changeFullscreenButton() {
    let button = document.getElementsByClassName("requestfullscreen")[0];
    button.firstChild.textContent = "Go Fullscreen";

    button.addEventListener("click", function() {
        fullscreen();
    });
};

skip();
changeFullscreenButton();