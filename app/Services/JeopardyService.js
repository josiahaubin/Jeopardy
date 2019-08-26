import Question from "../models/Question.js";

//Private
let _state = {
    question: {}
}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    question: []
}

// @ts-ignore
let _jeopardyApi = axios.create({
    baseURL: "http://jservice.io/api/random"
})

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

//Public
export default class JeopardyService {
    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }


    getRandomQuestion() {
        _jeopardyApi.get()
            .then(res => {
                let q = new Question(res.data[0])
                _setState("question", q)
            })
    }

    get Question() {
        return _state.question
    }
}
