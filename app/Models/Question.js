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
            <form onsubmit="app.controllers.jeopardyController.userAnswerCheck(event)">
            <div class="form-group">
                <label for="questionAnswer">Your Answer:</label>
                <input type="text" class="form-control" id="questionAnswer" placeholder="Enter Answer">
                <button class="btn btn-outline-danger mt-1" type="submit">Answer</button>
            </div>
            </form>
            <span id="answer">What/Who is ${this.Answer}</span>
            <button class="btn btn-outline-primary mt-1" onclick="app.controllers.jeopardyController.showAnswer()">Show Answer</button>
            <button class="btn btn-outline-success mt-1" onclick="app.controllers.jeopardyController.nextQuestion()">Next Question</button>
        </div>

        `
    }
}