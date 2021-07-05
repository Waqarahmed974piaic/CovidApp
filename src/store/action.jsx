const getTodos = () => {
    return (dispatch) => {
        var arr = []
        var promise = new Promise((res, reject) => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => arr.push(...json))
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => arr.push(...json))
        })
        promise.then((result) => {
            console.log(arr)
        }), error => {
            console.log(error)
        }
    }
}