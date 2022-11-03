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



function play(){
    console.log('lets play');
    numArray = [];
    while(numArray.length < 5){
        console.log('siamo dentro al while')
        let num = Math.floor(Math.random() * 100) + 1;
        if (numArray.includes(num) !== true){
            numArray.push(num);
        }
    }
    console.log(numArray);

    function createDiv() {
        const div = document.createElement("div");
        return div;
      }

    for (i = 0; i< numArray.length; i++){
        let currentElement = createDiv();
        currentElement.classList.add('measure');
        currentElement.innerHTML += `<p>${numArray[i]}</p>`;
    }
}
