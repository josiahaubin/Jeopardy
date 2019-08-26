export default class Question {
    constructor(data) {
        this.Question = data.question
        this.Answer = data.answer
        this.Value = data.value
    }

    get Template() {
        return `
        <div class="col">
            <h4>${this.Question}</h4>
            <h6>Value: ${this.Value}</h6>
            <span id="answer">What/Who is ${this.Answer}</span>
            <button class="btn btn-outline-primary mt-1" onclick="app.controllers.jeopardyController.showAnswer()">Show Answer</button>
            <button class="btn btn-outline-success mt-1" onclick="app.controllers.jeopardyController.nextQuestion()">Next Question</button>
        </div>

        `
    }
}