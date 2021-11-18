const promocodes = [
    "QWEFERE",
    "EWEQWWE",
    "14EQWDR",
    "JGDUMP5",
    "UOMK124"
]

//ссылки для шеринга
const fbLink = document.getElementById('fb-share');
const vkLink = document.getElementById('vk-share');
const fbLink2 = document.getElementById('fb-share2');
const vkLink2 = document.getElementById('vk-share2');
const fbLink3 = document.getElementById('fb-share3');
const vkLink3 = document.getElementById('vk-share3');
const fbLink4 = document.getElementById('fb-share4');
const vkLink4 = document.getElementById('vk-share4');
const fbLink5 = document.getElementById('fb-share5');
const vkLink5 = document.getElementById('vk-share5');
const fbLink6 = document.getElementById('fb-share6');
const vkLink6 = document.getElementById('vk-share6');

const promocode = document.querySelector('.promocode')
const promocodesArea = document.querySelector('.promocode__text');

const testArea = document.querySelector('.test');
const resultArea = document.querySelector('.result')
const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')
const result3 = document.querySelector('.result3')
const result4 = document.querySelector('.result4')
const result5 = document.querySelector('.result5')
const result6 = document.querySelector('.result6')

//кнопки ответов
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const ten = document.querySelector('.ten');
const eleven = document.querySelector('.eleven');
const twelve = document.querySelector('.twelve');
const thirteen = document.querySelector('.thirteen');
const fourteen = document.querySelector('.fourteen');
const fifteen = document.querySelector('.fifteen');
const sixteen = document.querySelector('.sixteen');
const seventeen = document.querySelector('.seventeen');
const eighteen = document.querySelector('.eighteen');
const nineteen = document.querySelector('.nineteen');

//вопросы
const questionOne = document.querySelector('.question_one');
const questionTwo = document.querySelector('.question_two');
const questionThree = document.querySelector('.question_three');
const questionFour = document.querySelector('.question_four');
const questionFive = document.querySelector('.question_five');

let score = 0;

//функция появления следующего вопроса и скрытие предыдущего
function changeQuestion(questionNumberAdd, questionNumberHide) {
    questionNumberAdd.classList.add('hidden');
    questionNumberHide.classList.remove('hidden');
}

//логика 1 вопроса:

function addEventListenerOneQuestion(button) { 
    if(button === one) {
        button.addEventListener('click', () => {
            changeQuestion(questionOne, questionTwo);
            score = score + 2;
        })
    } else if (button === two) {
        button.addEventListener('click', () => {
            changeQuestion(questionOne, questionTwo);
            score = score;
        })
    } else if(button === three) {
        button.addEventListener('click', () => {
            changeQuestion(questionOne, questionTwo);
            score = score + 1;
        })
    } else {
        console.log("произошла ошибка");
    }
}

addEventListenerOneQuestion(one);
addEventListenerOneQuestion(two);
addEventListenerOneQuestion(three);

//логика 2 вопроса:

function addEventListenerTwoQuestion(button) {
    if(button === four) {
        button.addEventListener('click', () => {
            changeQuestion(questionTwo, questionThree);
            score = score + 3;
        }) 
    } else if (button === five) {
        button.addEventListener('click', () => {
            changeQuestion(questionTwo, questionThree);
            score = score + 1;
        }) 
    } else if(button === six) {
        button.addEventListener('click', () => {
            changeQuestion(questionTwo, questionThree);
            score = score + 0;
        }) 
    } else if(button === seven) {
        button.addEventListener('click', () => {
            changeQuestion(questionTwo, questionThree);
            score = score + 2;
        }) 
    } else {
        console.log("произошла ошибка");
    }
}

addEventListenerTwoQuestion(four);
addEventListenerTwoQuestion(five);
addEventListenerTwoQuestion(six);
addEventListenerTwoQuestion(seven);

//логика 3 вопроса: 

function addEventListenerThreeQuestion(button) {
    if(button === eight) {
        button.addEventListener('click', () => {
            changeQuestion(questionThree, questionFour);
            score = score + 1;
        }) 
    } else if (button === nine) {
        button.addEventListener('click', () => {
            changeQuestion(questionThree, questionFour);
            score = score + 2;
        }) 
    } else if(button === ten) {
        button.addEventListener('click', () => {
            changeQuestion(questionThree, questionFour);
            score = score + 3;
        }) 
    } else if(button === eleven) {
        button.addEventListener('click', () => {
            changeQuestion(questionThree, questionFour);
            score = score + 0;
        }) 
    } else {
        console.log("произошла ошибка");
    }
}

addEventListenerThreeQuestion(eight);
addEventListenerThreeQuestion(nine);
addEventListenerThreeQuestion(ten);
addEventListenerThreeQuestion(eleven);

//логика 4 вопроса: 

function addEventListenerFourQuestion(button) {
    if(button === twelve) {
        button.addEventListener('click', () => {
            changeQuestion(questionFour, questionFive);
            score = score + 0;
        }) 
    } else if (button === thirteen) {
        button.addEventListener('click', () => {
            changeQuestion(questionFour, questionFive);
            score = score + 2;
        }) 
    } else if(button === fourteen) {
        button.addEventListener('click', () => {
            changeQuestion(questionFour, questionFive);
            score = score + 1;
        }) 
    } else if(button === fifteen) {
        button.addEventListener('click', () => {
            changeQuestion(questionFour, questionFive);
            score = score + 3;
        }) 
    } else {
        console.log("произошла ошибка");
    }

    button.addEventListener('click', () => {
        changeQuestion(questionFour, questionFive);
        console.log(score)
    })
}

addEventListenerFourQuestion(twelve);
addEventListenerFourQuestion(thirteen);
addEventListenerFourQuestion(fourteen);
addEventListenerFourQuestion(fifteen);

//логика 5 вопроса: 

function addEventListenerFiveQuestion(button) {
    if(button === sixteen) {
        button.addEventListener('click', () => {
            score = score + 1;
            console.log(score)
            result();
        }) 
    } else if (button === seventeen) {
        button.addEventListener('click', () => {
            score = score + 0;
            console.log(score)
            result();
        }) 
    } else if(button === eighteen) {
        button.addEventListener('click', () => {
            score = score + 3;
            console.log(score)
            result();
        }) 
    } else if(button === nineteen) {
        button.addEventListener('click', () => {
            score = score + 2;
            result();
        }) 
    } else {
        console.log("произошла ошибка");
    }
}

function result() {
    if(score <= 2) {
        testArea.classList.add('result1');
        questionFive.classList.add('hidden');
        result1.classList.remove('hidden');
    } else if(score >=3 && score <=5) {
        testArea.classList.add('result2');
        questionFive.classList.add('hidden');
        result2.classList.remove('hidden');
    } else if(score >=6 && score <=7) {
        testArea.classList.add('result3');
        questionFive.classList.add('hidden');
        result3.classList.remove('hidden');
    } else if(score >=8 && score <=9) {
        testArea.classList.add('result4');
        questionFive.classList.add('hidden');
        result4.classList.remove('hidden');
    } else if(score >=10 && score <=11) {
        testArea.classList.add('result5');
        questionFive.classList.add('hidden');
        result5.classList.remove('hidden');
    } else if(score >=12 && score <=14) {
        testArea.classList.add('result6');
        questionFive.classList.add('hidden');
        result6.classList.remove('hidden');
    } 
}

addEventListenerFiveQuestion(sixteen);
addEventListenerFiveQuestion(seventeen);
addEventListenerFiveQuestion(eighteen);
addEventListenerFiveQuestion(nineteen);

//добавление кнопки плеера 
// const startVideoButton = document.querySelector('.play1')
// const startVideoButton3 = document.querySelector('.play3')

// window.onload = function() {
// 	video = document.querySelector(".result__video");
// };



// function play() {
//     if(video.paused) {
//         video.play();
//         startVideoButton.style.opacity = '0';
//     } else {
//         startVideoButton.style.opacity = '';
//     }
// }

// startVideoButton.addEventListener('click', play)
// startVideoButton3.addEventListener('click', play)


//логика выдачи промокода
const randomPromocode = promocodes[Math.floor(Math.random() * promocodes.length)];

function changeThemeAndTextPromocodes() {
    promocode.classList.remove('hidden');
    promocodesArea.textContent = randomPromocode; 
}

fbLink.addEventListener('click', () => {
    testArea.classList.remove('result1');
    result1.classList.add('hidden');
    changeThemeAndTextPromocodes();
})
vkLink.addEventListener('click', () => {
    testArea.classList.remove('result1');
    result1.classList.add('hidden');
    changeThemeAndTextPromocodes();
})
fbLink2.addEventListener('click', () => {
    testArea.classList.remove('result2');
    result2.classList.add('hidden');
    changeThemeAndTextPromocodes(); 
})
vkLink2.addEventListener('click', () => {
    testArea.classList.remove('result2');
    result2.classList.add('hidden');
    changeThemeAndTextPromocodes(); 
})
fbLink3.addEventListener('click', () => {
    testArea.classList.remove('result3');
    result3.classList.add('hidden');
    changeThemeAndTextPromocodes();
})
vkLink3.addEventListener('click', () => {
    testArea.classList.remove('result3');
    result3.classList.add('hidden');
    changeThemeAndTextPromocodes();
})
fbLink4.addEventListener('click', () => {
    testArea.classList.remove('result4');
    result4.classList.add('hidden');
    changeThemeAndTextPromocodes();
})
vkLink4.addEventListener('click', () => {
    testArea.classList.remove('result4');
    result4.classList.add('hidden');
    changeThemeAndTextPromocodes();
})
fbLink5.addEventListener('click', () => {
    testArea.classList.remove('result5');
    result5.classList.add('hidden');
    changeThemeAndTextPromocodes();
})
vkLink5.addEventListener('click', () => {
    testArea.classList.remove('result5');
    result5.classList.add('hidden');
    changeThemeAndTextPromocodes();
})
fbLink6.addEventListener('click', () => {
    testArea.classList.remove('result6');
    result4.classList.add('hidden');
    changeThemeAndTextPromocodes();
})
vkLink6.addEventListener('click', () => {
    testArea.classList.remove('result6');
    result4.classList.add('hidden');
    changeThemeAndTextPromocodes();
})




