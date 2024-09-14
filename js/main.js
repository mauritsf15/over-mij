// main.js

// instant processing

const title = document.querySelector('.title');
const timeToAdd = 100;
let endValue = ".MauriTs FokKeNs";

for (let i = 0; i < endValue.length; i++) {
    setTimeout(() => {
        title.textContent += endValue[i];

        let localText = '';

        for (let j = 0; j < i; j++) {
            if (Math.random() < 0.5) {
                localText += title.textContent[j].toUpperCase();
            } else {
                localText += title.textContent[j].toLowerCase();
            }
        }

        title.textContent = localText;

        if (i + 1 == endValue.length) {
            nextIntroStage();
        }
    }, 250 + i * timeToAdd);
}

function nextIntroStage() {
    title.textContent = "MauriTs FokKeNs";
    setTimeout(() => {
        title.parentElement.classList.remove('intro');
    }, 1000)
}