import { createStore } from 'redux';

const defaultState = {
    todos: [{ 
        title: 'Title one',
        subTitle: 'Subtitle one',
        description: 'First element',
        stars: '18'
    }, { 
        title: 'Title two',
        subTitle: 'Subtitle two',
        description: 'Second element',
        stars: '1.940'
    }, { 
        title: 'Title three',
        subTitle: 'Subtitle three',
        description: 'Third element',
        stars: '258'
    }],
};

function todoStore(state = defaultState, action) {

    var result = null;
    switch(action.type) {
        case 'ADD_TODO':
            result = Object.assign({}, state, {
                todos: state.todos.concat([{
                    title: action.title,
                    subTitle: action.subTitle,
                    description: action.description,
                    stars: action.stars,
                }]),
            });
            break;
        case 'REMOVE_TODO':
            break;
        default:
            result = state;
            break;
    }
    return result;
}

export default createStore(todoStore);