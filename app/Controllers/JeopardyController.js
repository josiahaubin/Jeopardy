import JeopardyService from "../Services/JeopardyService.js";

//Private
let _jeopardyService = new JeopardyService()
let _value = 0

function _draw() {
    let question = _jeopardyService.Question
    document.getElementById('question').innerHTML = question.Template
}

//Public
export default class JeopardyController {
    constructor() {
        //NOTE Register all subscribers
        _jeopardyService.addSubscriber("question", _draw)

        //NOTE Retrieve data
        _jeopardyService.getRandomQuestion()
    }

    showAnswer() {
        document.getElementById('answer').style.display = "block"
    }

    nextQuestion() {
        _jeopardyService.getRandomQuestion()
    }
    userAnswerCheck(event) {
        event.preventDefault()

        let userAnswer = (event.target.questionAnswer.value).toLowerCase()
        let jeoAnswer = (_jeopardyService.Question.Answer).toLowerCase()

        if (userAnswer == jeoAnswer) {
            _value += _jeopardyService.Question.Value
            alert("correct")
            _jeopardyService.getRandomQuestion()
        } else {
            _value -= _jeopardyService.Question.Value
            alert("incorrect, the answer was" + " " + jeoAnswer)
            _jeopardyService.getRandomQuestion()
        }

        document.getElementById('pointTotal').innerText = "Points: " + _value.toString()
    }
}