
//Identifie les quesitons
//https://stackoverflow.com/questions/43893667/adding-answers-to-a-random-questions-quiz-javascript
const questions = [
    {
question: "Les deux possibilité de X sont égaux à quoi?: 4x(x) = 0",
answer: "0"
    },
    {
question: "Dans un triangle isocèle les trois angles sont de: ?",
answer: "60"
    },
    {
question: "Lequel est faux?: \nSin()=Opposé ÷ Hypoténuse, \nCos()=Adjacent ÷ Hypoténuse, \ntan()=Adjacent ÷ Opposée",
answer: "tan()" || "tan"
    },
{
question:"Les électrons retire de quoi?:",
answer: "Électrons"

},
{
question:"Nom le 5ième planet le plus proche au soleil:",
answer: "Jupiter"
},
{
question:"Combien de planètes sont dans ceinture d'astéroïdes:",
answer: "4"
},
{
question:"Le participe passé ____ est JAMAIS accorder en genre et nombre avec le sujet",
answer: "Avoir"
},
{
question:"C’est quoi le type de subordonnée dans la phrase suivant: \nLe coeur a ses raisons que la raison en connaît point.",
answer: "Relative"
},
{
question:"Il y a combien de propositions (Proposition Subordonnée et Proposition Principal): \nParce que le milliardaire n’a pas récolté sans peine, il s’imagine qu’il a semé",
answer: "3"
},
{
question:"La lune et le soleil, les deux sont des étoiles",
answer: "Faux"
},
  ];

//https://www.programiz.com/javascript/examples/get-random-item#:~:text=Example:%20Get%20Random%20Item%20From%20an%20Array&text=In%20the%20above%20program%2C%20a,access%20a%20random%20array%20element. 
//Prend les questions et utilise math.random et math.floor pour les choisir au hazard
function trouveQuestionAuhazard() {
{
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}
}
//Affiche le question au utilisateur et leur fais répondre, les points sont accorder dépendant du difficulté et résultat
function donneQuestion(){
const questionChoisis = trouveQuestionAuhazard(questions);
let réponse = prompt(questionChoisis.question);

if (réponse && réponse.toLowerCase() === questionChoisis.answer.toLowerCase()) {
    updateScore(700)
} else{
    updateScore(-350)
}
}