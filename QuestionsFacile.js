//Identifie les quesitons
//https://stackoverflow.com/questions/43893667/adding-answers-to-a-random-questions-quiz-javascript
const questions = [
    {
question: "Écris le théorème de pythagore",
answer: "a²+b²= c²"
    },
    {
question: "Dans un triangle rectangle, il y a toujours un angle de ? degré",
answer: "90"
    },
    {
question: "Trouve X: 12²x -2 = 24x + 16",
answer: "3"
    },
{
question:"Pluto, est t'il un planet?",
answer: "Non"

},
{
question:"Quelle est l'élément au période 1 et le groupe 1 dans le tableau périodique?",
answer: "Hydrogène"
},
{
question:"Proton, électron et ?",
answer: "Neutron"
},
{
question:"Trouve le type du subordonnée circonstancielle: Dès que l’examen a commencé, ça a stressé beaucoup de gens",
answer: "Temps"
},
{
question:"Vrai ou Faux: (y,x)",
answer: "Faux"
},
{
question:"Qui a découervt la gravité?:",
answer: "Isaac Newton"
},
{
question:"Ca veut dire quoi le S dans PPS (participe passé):",
answer: "Seul"
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
    updateScore(500)
} else{
    updateScore(-250)
}
}