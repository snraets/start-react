export const LOAD_CHORES = 'LOAD_CHORES';
export const CREATE_CHORES = 'CREATE_CHORES';
export const ADD_CHORE = 'ADD_CHORE';

export const NEW_CHORE = 'NEW_CHORE';

export const loadChores = () => ({type: LOAD_CHORES});
export const createChores = payload => ({type: CREATE_CHORES, payload})
export const addChore = payload => ({type: ADD_CHORE, payload})

export const newChore = payload => ({type: NEW_CHORE, payload})

export const choresReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_CHORES:
            return state;
        case CREATE_CHORES:
            return action.payload;
        case ADD_CHORE:
        
            newChoreReducer(state, {type: NEW_CHORE, payload: {id: state.length + 1, name: action.payload} })
            return [...state, {id: state.length + 1, name: action.payload}]
        default:
            return state;
    }
};

export const newChoreReducer = (state = {}, action) => {
    switch(action.type){
        case NEW_CHORE:
            debugger;
            return action.payload;
        default:
            return {};
    }
};
