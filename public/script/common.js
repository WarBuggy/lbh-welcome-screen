let carouselIntervalId = null;

let defaultPropertyName = "The Splash";
let defaultFamilyName = "Smiths Family";
let defaultCheckInDate = "mm/dd/yyyy";
let defaultCheckOutDate = "mm/dd/yyyy";

window.onload = function () {
    window.rootStyle = getComputedStyle(document.body);
    fillData();
    setTimeout(startTransition, 1000);
};

function fillData() {
    let propertyName = getURLParameter("propertyName", null, defaultPropertyName);
    let familyName = getURLParameter("familyName", null, defaultFamilyName);
    let checkInDate = getURLParameter("checkInDate", null, defaultCheckInDate);
    let checkOutDate = getURLParameter("checkOutDate", null, defaultCheckOutDate);
    document.getElementById("divWelcomeText2").innerText = propertyName;
    document.getElementById("divWelcomeText3").innerText = familyName;
    document.getElementById("divWelcomeText4").innerText = `${checkInDate} to ${checkOutDate}`;
    
};

function startTransition() {
    let framePerSecond = window.rootStyle.getPropertyValue("--transition-frame-per-second");
    let msPerFrame = 1000 / framePerSecond;
    welcomeTextTransition(msPerFrame);
}

function welcomeTextTransition(msPerFrame) {
    let totalTime = window.rootStyle.getPropertyValue("--welcome-text-transition-time");
    let totalFrame = totalTime * 1000 / msPerFrame;
    let divWelcomeText1 = document.getElementById("divWelcomeText1");
    let text1FinalSize = window.rootStyle.getPropertyValue("--welcome-text-1-size");
    let text1SizeIncrement = text1FinalSize / totalFrame;
    let divWelcomeText2 = document.getElementById("divWelcomeText2");
    let text2FinalSize = window.rootStyle.getPropertyValue("--welcome-text-2-size");
    let text2SizeIncrement = text2FinalSize / totalFrame;
    let divWelcomeText3 = document.getElementById("divWelcomeText3");
    let text3FinalSize = window.rootStyle.getPropertyValue("--welcome-text-3-size");
    let text3SizeIncrement = text3FinalSize / totalFrame;
    let divWelcomeText4 = document.getElementById("divWelcomeText4");
    let text4FinalSize = window.rootStyle.getPropertyValue("--welcome-text-4-size");
    let text4SizeIncrement = text4FinalSize / totalFrame;
    let divWelcomeText = document.getElementById("divWelcomeText");
    let divFinalWidth = 100;
    let divWidthIncrement = divFinalWidth / totalFrame;
    let divFinalHeight = 100;
    let divHeightIncrement = divFinalHeight / totalFrame;
    let divLogo = document.getElementById("divLogo");
    let logoFinalSize = 100;
    let logoSizeIncrement = logoFinalSize / totalFrame;

    let animationIntervalId = null;
    let frameNum = 0;
    animationIntervalId = setInterval(frame, msPerFrame);
    function frame() {
        if (frameNum >= totalFrame) {
            clearInterval(animationIntervalId);
            divWelcomeText.style.width = divFinalWidth + "%";
            divWelcomeText.style.height = divFinalHeight + "%";
            divWelcomeText1.style.fontSize = text1FinalSize + "vh";
            divWelcomeText2.style.fontSize = text2FinalSize + "vh";
            divWelcomeText3.style.fontSize = text3FinalSize + "vh";
            divWelcomeText4.style.fontSize = text4FinalSize + "vh";
            divLogo.style.backgroundSize = logoFinalSize + "%";
            showCarousel(msPerFrame);
        } else {
            frameNum++;
            divWelcomeText.style.width = (frameNum * divWidthIncrement) + "%";
            divWelcomeText.style.height = (frameNum * divHeightIncrement) + "%";
            divWelcomeText1.style.fontSize = (frameNum * text1SizeIncrement) + "vh";
            divWelcomeText2.style.fontSize = (frameNum * text2SizeIncrement) + "vh";
            divWelcomeText3.style.fontSize = (frameNum * text3SizeIncrement) + "vh";
            divWelcomeText4.style.fontSize = (frameNum * text4SizeIncrement) + "vh";
            divLogo.style.backgroundSize = (frameNum * logoSizeIncrement) + "%";
        }
    };
}

function showCarousel(msPerFrame) {
    let totalTime = window.rootStyle.getPropertyValue("--carousel-transition-time");
    let totalFrame = totalTime * 1000 / msPerFrame;
    let divCarouselInner = document.getElementById("divCarouselInner");
    let divCarouselInnerFinalRight = 0;
    let divCarouselInnerRightIncrement = 100 / totalFrame;

    let animationIntervalId = null;
    let frameNum = 0;
    animationIntervalId = setInterval(frame, msPerFrame);
    function frame() {
        if (frameNum >= totalFrame) {
            clearInterval(animationIntervalId);
            divCarouselInner.style.right = divCarouselInnerFinalRight + "%";
            showRemote(msPerFrame);
        } else {
            frameNum++;
            divCarouselInner.style.right = (-100 + (frameNum * divCarouselInnerRightIncrement)) + "%";
        }
    };
}

function showRemote(msPerFrame) {
    let totalTime = window.rootStyle.getPropertyValue("--remote-transition-time");
    let totalFrame = totalTime * 1000 / msPerFrame;
    let divRemoteInner = document.getElementById("divRemoteInner");
    let divRemoteInnerFinalLeft = 0;
    let divRemoteInnerLeftIncrement = 100 / totalFrame;

    let animationIntervalId = null;
    let frameNum = 0;
    animationIntervalId = setInterval(frame, msPerFrame);
    function frame() {
        if (frameNum >= totalFrame) {
            clearInterval(animationIntervalId);
            divRemoteInner.style.left = divRemoteInnerFinalLeft + "%";
            showQR(msPerFrame);
        } else {
            frameNum++;
            divRemoteInner.style.left = (-100 + (frameNum * divRemoteInnerLeftIncrement)) + "%";
        }
    };
}

function showQR(msPerFrame) {
    let totalTime = window.rootStyle.getPropertyValue("--qr-transition-time");
    let totalFrame = totalTime * 1000 / msPerFrame;
    let divQRInner = document.getElementById("divQRInner");
    let divQRInnerFinalBottom = 0;
    let divQRInnerBottomIncrement = 100 / totalFrame;

    let animationIntervalId = null;
    let frameNum = 0;
    animationIntervalId = setInterval(frame, msPerFrame);
    function frame() {
        if (frameNum >= totalFrame) {
            clearInterval(animationIntervalId);
            divQRInner.style.bottom = divQRInnerFinalBottom + "%";
            startCarousel(msPerFrame);
        } else {
            frameNum++;
            divQRInner.style.bottom = (-100 + (frameNum * divQRInnerBottomIncrement)) + "%";
        }
    };
}


function startCarousel(msPerFrame) {
    let carouselItemHeightInCss = window.rootStyle.getPropertyValue("--carousel-item-height");
    let carouselItemHeight = parseInt(carouselItemHeightInCss);
    let visibleElementNum = Math.floor(100 / carouselItemHeight);
    let divCarousel = document.getElementById("divCarouselInner");
    let elementNum = divCarousel.children.length;
    if (elementNum <= visibleElementNum) {
        return;
    }
    let elementList = [];
    for (let i = 0; i < elementNum; i++) {
        elementList.push(divCarousel.children[i]);
    }
    let carouselRotationInterval = window.rootStyle.getPropertyValue("--carousel-rotation-interval") * 1000;
    let carouselRotateTime = window.rootStyle.getPropertyValue("--carousel-rotate-time");
    let totalFrame = carouselRotateTime * 1000 / msPerFrame;
    let carouselFinalTop = -30;
    let carouselTopIncrement = carouselFinalTop / totalFrame;

    let carouselTimeoutId = null;
    let carouselMoveIntervalId = null;

    countdownCarousel(msPerFrame, 0);

    function countdownCarousel(msPerFrame, currentTopIndex) {
        carouselTimeoutId = setTimeout(function () {
            moveCarousel(msPerFrame, currentTopIndex);
        }, carouselRotationInterval);
    }

    function moveCarousel(msPerFrame, currentTopIndex) {
        let frameNum = 0;
        carouselMoveIntervalId = setInterval(function () {
            frame(currentTopIndex)
        }, msPerFrame);
        function frame(currentTopIndex) {
            if (frameNum >= totalFrame) {
                clearInterval(carouselMoveIntervalId);
                divCarousel.children[0].remove();
                divCarousel.style.top = "0%";
                let removedELement = elementList[currentTopIndex];
                divCarousel.appendChild(removedELement);
                let newTopIndex = currentTopIndex + 1;
                if (newTopIndex >= elementNum) {
                    newTopIndex = 0;
                }
                clearTimeout(carouselTimeoutId);
                countdownCarousel(msPerFrame, newTopIndex);
            } else {
                frameNum++;
                divCarousel.style.top = (frameNum * carouselTopIncrement) + "%";
            }
        };
    }

};

function getURLParameter(sParam, locationSearch, defaultValue) {
    if (locationSearch == null) {
        locationSearch = document.location.search;
    }
    let sPageURL = locationSearch.substring(1);
    let sURLVariables = sPageURL.split('&');
    for (let i = 0; i < sURLVariables.length; i++) {
        let sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0].trim() == sParam) {
            return sParameterName[1].trim();
        }
    }
    return defaultValue;
};