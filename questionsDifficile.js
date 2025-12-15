
//Identifie les quesitons
//https://stackoverflow.com/questions/43893667/adding-answers-to-a-random-questions-quiz-javascript
const questions = [
    {
question: "Quelle est le nom du prochaine ceinture après le celle d'astéroïdes:",
answer: "Kuiper"
    },
    {
question: "Laquelle est un métalloïde?: Og, B, Sc",
answer: "B"
    },
    {
question: "C’est quoi le nom de ce formule: x= -b ± (√b²-4ac) ÷ 2a",
answer: "Quadratique"
    },
{
question:"Écris la formule du discriminant dans la formule suivant: x= -b ± (√b²-4ac) ÷ 2a",
answer: "b² - 4ac" || "b²-4ac" ||"b² -4ac" || "b²- 4ac"

},
{
question:"Est-ce que la participe passé employé sans auxiliaire est accorder en genre et en nombre avec le sujet?",
answer: "Non"
},
{
question:"C’est un proposition subordonnée circonstancielle de quoi?: \nParce que le milliardaire n’a pas récolté sans peine, …",
answer: "Cause"
},
{
question:"C’est quoi le nom du components qui est activé/désactivé quand on utilise un lumière?: ",
answer: "Interrupteur"
},
{
question:"L’ampoule a plusieurs different symbole possible qui le représente dans un circuit?:",
answer: "Oui"
},
{
question:"Subordonnée Circonstancielle de temps, cause ou _____",
answer: "But"
},
{
question:"Un autre mot pour un angle opposé par le sommet",
answer: "Sécante"
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
    updateScore(900)
} else{
    updateScore(-500)
}
}