export default class Question {
    constructor(data) {
        this.Question = data.question
        this.Answer = data.answer
        this.Value = data.value
    }

    get Template() {
        return `
        <div class="col">
            <h1>${this.Question}</h1>
            <h5>${this.Value}</h5>
            <span>${this.Answer}</span>
        </div>

        `
    }
}