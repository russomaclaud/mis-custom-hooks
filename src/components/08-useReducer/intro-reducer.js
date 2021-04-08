
// Tenemos la inicialización que es un arreglo de todos
const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];


/* 
    Definimos nuestro reducer que no es más que una función que tiene el state que si no recibe 
    ningun argumento va a ser el initialState y támbien recibe la action que es la que va a 
    modificar el state y esta función no puede hacer peticiones asyncronas, no puede disparar 
    efectos secundarios tiene que resolverse siempre con todos los argumentos que ellos tienen
    osea: esta función tiene que resolver lo que sea que le pida con su state y la action y
    lo importante es que siempre tiene que return(devolver) un state(estado)

 */
const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload];

    }

    return state;
}


/* 
   Tenemos la inicialización de todoReducer que me regresa el listado de todos 
*/
let todos = todoReducer();

// cuando quiero agregar un todo lo voy hacer mediante una action...
const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo,
}

// Y esa action se la voy a mandar al reducer
todos = todoReducer(todos, agregarTodoAction)


console.log(todos);