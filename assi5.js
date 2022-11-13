function relode(){
    window.location.reload()
}
async function getData() {
    let Data = await fetch("https://official-joke-api.appspot.com/random_joke")
    let Joke = await Data.json();
    console.log(Joke);
    printData(Joke);
}
getData();


function printData(print) {

    let parant = document.querySelector('.parent');


    let setup = document.createElement('div');
    setup.classList.add("setup")
    let punchline = document.createElement('div');
    punchline.classList.add('punchline');
    setup.innerHTML = print.setup;
    punchline.innerHTML = print.punchline;
    parant.appendChild(setup);
    parant.appendChild(punchline);

}


