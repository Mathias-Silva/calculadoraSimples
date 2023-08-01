const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedkeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
   charKeyBtn.addEventListener('click', function() {
        const value = charKeyBtn.dataset.value
        input.value += value
   })
} )

document.getElementById('clear').addEventListener('click', function() {
   input.value = ''
   resultInput.value=''
   input.focus()
})


const calculate = () => {
   resultInput.value = 'ERROR'
   resultInput.classList.add('error')
   const result = eval(input.value)
   resultInput.value = result
   resultInput.classList.remove('error')
}

document.getElementById('igual').addEventListener('click', calculate)

const btnSwitcher = document.getElementById('themeSwitcher')
btnSwitcher.addEventListener('click', () => {
   main.classList.toggle('light')
})