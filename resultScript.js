
const resultDiv = document.getElementById('level');
const imageContainer = document.getElementById('image-container');
const resultContentLabel = document.getElementById('result');

const facebookShareButton = document.getElementById('facebookShareButton');
const twitterShareButton = document.getElementById('twitterShareButton');
const kakaoShareButton = document.getElementById('kakaoShareButton');

const useMona = document.getElementById('use-mona');
const restartButton = document.getElementById('restart');

// 현재 페이지의 URL에서 매개변수 값 읽기
const urlParams = new URLSearchParams(window.location.search);
const point = urlParams.get('option');

// 공유하기 버튼
facebookShareButton.addEventListener('click', function () {
    shareOnFacebook();
});
twitterShareButton.addEventListener('click', function () {
    shareOnTwitter();
});
kakaoShareButton.addEventListener('click', function () {
    // shareOnFacebook();
});

// 테스트 다시하기 버튼
restartButton.addEventListener('click', function () {
    window.location.href = 'question.html'
});
// 모나 서비스 이용해보기 버튼
useMona.addEventListener('click', function () {
    window.location.href = 'https://mobilemona.co.kr'
});

// 결과창
function showLevel() {
    imageContainer.innerHTML = `<img src='./Images/demo.png' alt="Image">`;

    resultDiv.textContent = `${resultContent(point)}`;
    resultDiv.style.fontSize = '24px';
    resultDiv.style.textAlign = 'center';
    resultDiv.style.whiteSpace = 'pre-line';
    resultDiv.style.lineHeight = 1.5;
    resultDiv.style.font = 'bold';

}

function resultContent(point) {
    if(point >= 0 && point <= 20) {
        level = "Lv. 0\n오늘만 사는 파산아티스트"
    } else if(point >= 30 && point <= 40) {
        level = "Lv. 20\n상상으로 절약하는 메타버스 절약러"
    } else if(point >= 50 && point <= 60) {
        level = "Lv. 39\n아낀다고 아꼈는데! 알뜰 초급자"
    } else if(point >= 70 && point <= 80) {
        level = "Lv. 63\n내꿈은 저축왕 알뜰살뜰 주부7단"
    } else if(point >= 90 && point <= 100) {
        level = "Lv. 99\n매너온도 99% 맑은 눈의 절약킹"
    } 

    return level
}

function showResult() {
    resultContentLabel.textContent = "결과입니다.".repeat(100)
    resultContentLabel.style.fontSize = '18px';
    resultContentLabel.style.textAlign = 'center';
    resultContentLabel.style.whiteSpace = 'pre-line';
    resultContentLabel.style.lineHeight = 1.5;
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}
function shareOnTwitter() {
    const text = encodeURIComponent('Check out this awesome website!');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

showLevel();
showResult();