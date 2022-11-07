const modal = document.getElementById('modal')
const modalBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalInner = document.getElementById('modal-inner')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

modalBtn.addEventListener('click', function () {
    modal.style.display = 'none'

})

setTimeout(function () {
    modal.style.display = 'inline'
}, 1500)

declineBtn.addEventListener('mouseover', function () {
    modalChoiceBtns.classList.toggle('reverse-btn')
})


consentForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const saveData = new FormData(consentForm)
    const name = saveData.get('fullName')
    console.log(name)

    modalText.innerHTML = `<div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
        Uploading your data to the dark web...
        </p>
        </div>`


    setTimeout(function () {
        document.getElementById('uploadText').textContent = `Making the sale...`
    }, 1500)

    setTimeout(function () {
        modalInner.innerHTML = `<h2>Thanks  <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
        <img src="images/pirate.gif">
         </div>
        `
        consentForm.style.display = 'none';
        modalBtn.disabled = false;
    }, 3000)


    console.log('form submit')
})

