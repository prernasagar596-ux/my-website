window.onload = function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";
        document.getElementById("main").style.display = "block";

    }, 3000);

};

function startSurprise() {

    document.getElementById("message").innerHTML = `
    ❤️ Happy Birthday Bubu ❤️ <br><br>

    Today is your special day. 🎂✨<br><br>

    I wish your life is always filled with happiness,
    love, success and countless beautiful memories. 💖<br><br>

    Thank you for being the most precious person in my life. 🌸<br><br>

    Stay happy...<br>
    Stay blessed...<br>
    Keep smiling forever... ❤️
    `;

    typeLetter();

}

function typeLetter(){

    const text = `

Dear Bubu ❤️,

Happy Birthday to the most beautiful soul.

Every smile of yours makes my day brighter.

Thank you for every beautiful memory.

I pray that God always keeps you happy,
healthy and successful.

No matter what happens,
you'll always have a very special place in my heart.

Happy Birthday once again. ❤️🎂

`;

    let i = 0;

    document.getElementById("letter").innerHTML = "";

    let timer = setInterval(function(){

        document.getElementById("letter").innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(timer);

        }

    },40);

}