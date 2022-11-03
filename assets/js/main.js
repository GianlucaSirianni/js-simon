// const griglia = document.getElementById("griglia");
// // console.log(griglia);

// function createSquare(counter) {
//   const div = document.createElement("div");

//   div.classList.add("square100");
//   div.innerHTML = `<span>${counter}</span>`;
//   return div;
// }

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// Funzione per generare un numero casuale

// function randNum(){
//     num = Math.floor(Math.random() * 100) + 1;
//     console.log(num);
// }


// function play(){
//     numArray = [];
//     while(numArray.length < 5){
//         randNum();
//         if (numArray.includes(num) !== false){
//             numArray.push(num);
//         }
//     }
//     console.log(numArray);
// }

// `<p>${numArray[i]}</p>`;

function start() {
    setTimeout(play, 3000);
    document.getElementById('numContainer').innerHTML = 'Prepara la tua memoria, tra 5 secondi questi numeri spariranno, prova a ricordartene il più possibile';
    console.log('preparati');

    function play() {
        setTimeout(hideNum, 5000);
        setTimeout(askNum, 6000)
        document.getElementById('numContainer').innerHTML = ' ';
        console.log('lets play');
        numArray = [];
        guess = [];
        while (numArray.length < 5) {
            console.log('siamo dentro al while')
            let num = Math.floor(Math.random() * 100) + 1;
            if (numArray.includes(num) !== true) {
                numArray.push(num);
            }
        }
        console.log(numArray);

        function createDiv() {
            const div = document.createElement("div");
            return div;
        }


        for (i = 0; i < numArray.length; i++) {
            document.getElementById('numContainer').innerHTML += numArray[i] + ' ';
        }

        function hideNum() {
            document.getElementById('numContainer').innerHTML = ' ';
        }

        function askNum() {
            for (i = 1; i < 6; i++) {
                var input = parseInt(prompt("Inserisci il " + (i) + "° numero"))
                guess.push(input);
                console.log(guess);
            }

            for (i=0; i<numArray.length; i++){
                if ((numArray.includes(input) == true) && (numArray.length == guess.length)){
                    document.getElementById('numContainer').innerHTML = 'Bravissim*, li hai indovinati tutti';
                } else {
                    document.getElementById('numContainer').innerHTML = 'ahi ahi ahi, qualcosa non va';
                }
            }
        }


    }



}

