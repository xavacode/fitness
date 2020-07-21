
// Help Message 
$('.helpBtn').click(function () {
    $('#helpText').css("right", "0");
});
$('#helpText button').click(function () {
    $('#helpText').css("right", "");
});






// ##### 1 (progress bar)

class ProgressBar {
    constructor(element, Value) {
        this.valueElem = element.querySelector('.progressBarValue');
        this.fillElem = element.querySelector('.progressBarFill ');

        this.setValue(Value);
    }
    setValue(newValue) {
        if (newValue < 0) {
            newValue = 0;
        }
        if (newValue > 100) {
            newValue = 100;
        }
        this.value = newValue;
        this.update();
    }
    update() {
        const percentage = this.value + '%';  // 60% 
        this.fillElem.style.width = percentage;
        this.valueElem.textContent = percentage;
    }

}


const progressValue = document.querySelector('.progressBar');

function handelingProgress() {
    var progressNumber = 0;
    const progress_ul = document.querySelector('#progressbar').children;
    for (let i = 0; i < progress_ul.length; i++) {
        if (progress_ul[i].classList.value == "active") {
            progressNumber += 25;
        }
    }
    const pb1 = new ProgressBar(progressValue, progressNumber);
}
setInterval(handelingProgress, 20)
























// ##### 1 (progress bar)

// class ProgressBar {
//     constructor(element, initialValue = 0) {
//         this.valueElem = element.querySelector('.progressBarValue');
//         this.fillElem = element.querySelector('.progressBarFill ');

//         this.setValue(initialValue);
//     }
//     setValue(newValue) {
//         if (newValue < 0) {
//             newValue = 0;
//         }
//         if (newValue > 100) {
//             newValue = 100;
//         }
//         this.value = newValue;
//         this.update();
//     }
//     update() {
//         const percentage = this.value + '%';  // 60% 
//         this.fillElem.style.width = percentage;
//         this.valueElem.textContent = percentage;
//     }

// }


// const progressValue = document.querySelector('.progressBar');
// var progressNumber = 0;


// const progress_ul = document.querySelector('#progressbar');
// const items = progress_ul.getElementsByTagName('li');

// for (let i = 0; i < items.length; i++) {
//     const progressActive = document.querySelector('li .active');
//     if (progressActive) {
//         progressNumber += 25;
//     }
// }

// const pb1 = new ProgressBar(progressValue, progressNumber);


