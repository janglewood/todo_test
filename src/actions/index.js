const addTask = value => {
    return {
        type: 'ADD_TASK',
        payload: value,
    }
}

export default addTask;