function checkAnswer(){
const answer = event.target.dataset.correct
const buttons = document.querySelectorAll('button')
if (answer == 'true') {
event.target.classList.add('correct')
}
else{
 event.target.classList.add('incorrect')

}

}
