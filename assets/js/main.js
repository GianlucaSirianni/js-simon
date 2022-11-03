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
    setTimeout(play, 1500);
    document.getElementById('numContainer').innerHTML += `<p>Preparati</p>`;
    console.log('preparati');

    function play() {
        setTimeout(hideNum, 5000);
        setTimeout(askNum, 5200)
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
            for (z = 0; z < 5; z++) {
                var input = parseInt(prompt("Inserisci il " + (z+1) + "° numero"))
                guess.push(input);
                console.log(guess);
            }

            let diff = numArray.filter(x => !guess.includes(x));
            if (diff.length !== 0){
                document.getElementById('numContainer').innerHTML = 'peccato, mancava qualcosa!'; 
                document.getElementById('forgottenNum').innerHTML = 'questi sono i numeri che ti sei dimenticat* ' + diff; 
            } else {
                document.getElementById('numContainer').innerHTML = 'Bravissim*, li hai indovinati tutti';
            }
        }


    }



}

