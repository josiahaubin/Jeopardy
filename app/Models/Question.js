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
            <span>${this.Answer}</span>
        </div>

        `
    }
}