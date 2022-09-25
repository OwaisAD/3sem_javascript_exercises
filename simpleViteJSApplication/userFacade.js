const makeOptions = (method, body) => {
    const opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if(body) {
        opts.body = JSON.stringify(body)
    }
    return opts
}

const handleHttpErrors = (res) => {
    if(!res.ok) {
        return Promise.reject({status : res.status, fullError: res.json()})
    }
    return res.json()
}

/*FACADE FUNCTIONS*/

const getAllUsers = () => {
    return fetch(`http://localhost:3333/api/users`)
        .then(handleHttpErrors)
}

const getUserById = (id) => {
    return fetch(`http://localhost:3333/api/users/${id}`)
        .then(handleHttpErrors)
}

const addUser = (user) => {
    const options = makeOptions(`POST`, user)
    return fetch(`http://localhost:3333/api/users`, options)
        .then(handleHttpErrors)
}

const updateUser = (id, user) => {
    const options = makeOptions(`PUT`, user)
    return fetch(`http://localhost:3333/api/users/${id}`, options)
        .then(handleHttpErrors)
}

const deleteUser = (id) => {
    const options = makeOptions(`DELETE`)
    return fetch(`http://localhost:3333/api/users/${id}`, options)
        .then(handleHttpErrors)
}

// we make a userFacade object consisting of all our methods
// we don't need to write properties and names both, because their names are the same
const userFacade = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
  }

//then we export the object for use elsewhere
export default userFacade