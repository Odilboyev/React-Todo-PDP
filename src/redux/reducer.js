const initialState = {
    value: "",
    tasks: [
        {
            complete: true,
            editing: true,
            title: "ac facilisis in"
        },
        {
            complete: true,
            editing: false,
            title: "Morbi leo risus"
        },
        {
            complete: false,
            editing: false,
            title: "Porta ac consectetur ac"
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TYPING": return { ...state, value: action.payload }

        case "ADD_TASK": return {
            ...state,
            tasks: [...state.tasks, { title: action.payload }],
            value: ""
        }

        case "DELETE_TASK":
            let tasks = [...state.tasks];
            tasks.splice(action.payload, 1)

            return { ...state, tasks }

        case "COMPLETE":
            let tasksComplete = [...state.tasks];
            tasksComplete[action.payload].complete = !tasksComplete[action.payload].complete
            return { ...state, tasksComplete }
        case "EDIT": return { ...state, value: action.payload }
        default:
            return state
    }
}
export default reducer;