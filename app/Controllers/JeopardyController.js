import JeopardyService from "../Services/JeopardyService.js";

//Private
let _jeopardyService = new JeopardyService()

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
}