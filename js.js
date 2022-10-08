// vyber elementov
let questionBox = document.getElementById('questionBox')
let option1 = document.getElementById('opt1')
let option2 = document.getElementById('opt2')
let option3 = document.getElementById('opt3')
let option4 = document.getElementById('opt4')
let nextBtn = document.getElementById('btnNext')
let scoreText = document.getElementById('scoreCard')
let ul = document.getElementById('ul')
let playAgain = document.getElementById('againBtn')

// play again Btn
playAgain.style.display = 'none'
function again(){
    window.location.href = 'quiz.html'
}
// otazky a odpivede do quiz

let quizData = [{
    question: '1. Name Harry Potter`s parents.',
    options:['James and Lily Potter','Sirius and Lily Potter','Godric and Lily Potter','James and Amelia Potter'],
    answer: 'James and Lily Potter'
},{
    question: '2. Name Luna`s father.',
    options:['Vincent Crabbe','Dudley Dursley','Argus Filch','Xenophillius Lovegood'],
    answer: 'Xenophillius Lovegood'
},{
    question: '3. What animal could Peter Pettigrew turn into?',
    options:['Dog','Rat','Cat','Wolf'],
    answer: 'Rat'
},{
    question: '4. What spell would you use to open a door?',
    options:['Alohomora','Anteoculatia','Avada Kedavra','Alarte Ascendare'],
    answer: 'Alohomora'
},{
    question: '5. What was Harry’s Patronus?',
    options:['Black Swan','Dragon','Python','Stag'],
    answer: 'Stag'
},{
    question: '6. What position did Harry Potter play at Quidditch?',
    options:['Keeper','Seeker','Chaser','Commentator'],
    answer: 'Seeker'
},{
    question: '7. How did Harry find the Philosopher`s Stone?',
    options:['It was a gift.','It appeared in his hand.','It appeared in his backpack.','It appeared in his pocket.'],
    answer: 'It appeared in his pocket.'
},{
    question: '8. Who was Harry Potter`s first crush?',
    options:['Hermione Grange','Cho Chang','Amelia Bones','Hannah Abbott'],
    answer: 'Cho Chang'
}
]

index = 0 

// Nacitavanie otazky a odpovede

function next(){
    
    ul.style.pointerEvents="auto"
    
    option1.className = ''
    option2.className = ''
    option3.className = ''
    option4.className = ''
    
    if (quizData.length > index) {  
        questionBox.textContent = quizData[index].question
        option1.textContent = quizData[index].options[0]
        option2.textContent = quizData[index].options[1]
        option3.textContent = quizData[index].options[2]
        option4.textContent = quizData[index].options[3]
        index++
        
    } else {
        questionBox.textContent = 'You finished quiz.'
        ul.style.display = 'none'
        playAgain.style.display = 'block'
        nextBtn.style.display = 'none'
    } 
}
next()

// nacita body za spravnu odpoved

score = 0
function btn_a(){
    if (this.event.target.innerHTML == quizData[index - 1].answer) {
        score++
    }
    scoreText.textContent = `${score}/8`
}

// zafarbi vybranu odpoved ci je spravna alebo nespravna

option1.addEventListener('click', function(){
    if (quizData[index -1].options[0] == quizData[index -1].answer) {
        this.className = 'correct'
        ul.style.pointerEvents="none"
    } else {
        this.className = 'wrong'
        ul.style.pointerEvents="none"
    }
})
option2.addEventListener('click', function(){
    if (quizData[index -1].options[1] == quizData[index -1].answer) {
        this.className = 'correct'
        ul.style.pointerEvents="none"
    } else {
        this.className = 'wrong'
        ul.style.pointerEvents="none"
    }
})
option3.addEventListener('click', function(){
    if (quizData[index -1].options[2] == quizData[index -1].answer) {
        this.className = 'correct'
        ul.style.pointerEvents="none"
    } else {
        this.className = 'wrong'
        ul.style.pointerEvents="none"
    }
})
option4.addEventListener('click', function(){
    if (quizData[index -1].options[3] == quizData[index -1].answer) {
        this.className = 'correct'
        ul.style.pointerEvents="none"
    } else {
        this.className = 'wrong'
        ul.style.pointerEvents="none"
    }
})