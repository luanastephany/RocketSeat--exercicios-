const buttonOpenModal = document.getElementById('openModal')

//const modalWrapper = document.querySelector('.modal-wrapper')
const modalWrapper = document.getElementsByClassName('modal-wrapper')[0]

buttonOpenModal.onclick = function () {
    modalWrapper
        .classList
        .remove('invisible') //vai remover a classe invisible
}

document.addEventListener('keydown', function (event) { //event para verificar se a tecla digitada é a ESC
    const escKey = event.key === 'Escape' //Escape o pc entende que é o ESC

    if (escKey) {
        modalWrapper.classList.add('invisible') //se apertar ESC, adiciona a classe Invisible de volta
    }
})

