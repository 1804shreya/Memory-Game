const cardArray=[
    {
        'name':'monkey',
        'img':'monkey.jpg'

    },
    {
        'name':'lion',
        'img':'lion.jpg'
    },
    {
        'name':'giraffe',
        'img':'giraffe.jpg'
    },
    {
    
        'name':'bird',
        'img':'bird.jpg'
    },
    {
    
        'name':'snake',
        'img':'snake.jpg'
    },
    {
    
        'name':'fish',
        'img':'fish.jpg'
    },
        
    {
        'name':'monkey',
        'img':'monkey.jpg'

    },
    {
        'name':'lion',
        'img':'lion.jpg'
    },
    {
        'name':'giraffe',
        'img':'giraffe.jpg'
    },
    {
    
        'name':'bird',
        'img':'bird.jpg'
    },
    {
    
        'name':'snake',
        'img':'snake.jpg'
    },
    {
    
        'name':'fish',
        'img':'fish.jpg'
    },

        
    ]

cardArray.sort(()=>0.5 - Math.random())

let cardsChosen=[]
let cardsChosenId=[]
let cardsWon=[]

const grid=document.querySelector('.grid')
const resultDisplay=document.querySelector('#result')
const congDisplay=document.querySelector('#cong')
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img');
        card.height=90;
        card.width=90;
       
        card.setAttribute('src','open.jpg');
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
    
}

function checkForMatch(){
    const cards=document.querySelectorAll('img');
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];

    if(optionOneId==optionTwoId){
        cards[optionOneId].setAttribute('src','open.jpg')
        cards[optionTwoId].setAttribute('src','open.jpg')
        alert("You have clicked the same image!")
    }
    else if(cardsChosen[0]===cardsChosen[1]){
        
        cards[optionOneId].setAttribute('src','right.png')
        cards[optionTwoId].setAttribute('src','right.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','open.jpg')
        cards[optionTwoId].setAttribute('src','open.jpg')
        
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent=cardsWon.length
    if(cardsWon.length===cardArray.length/2){
        congDisplay.textContent="Congratulations! You found them all"
    }

}

function flipCard(){
    
    let cardId=this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkForMatch,500)
    }

}

createBoard()
