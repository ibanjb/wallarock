import { createStore } from 'redux';

const defaultState = {
    items: [{ 
        id: 1,
        title: 'Title one',
        subTitle: 'Subtitle one',
        description: 'First element',
        stars: '18'
    }, { 
        id: 2,
        title: 'Title two',
        subTitle: 'Subtitle two',
        description: 'Second element',
        stars: '1.940'
    }, { 
        id: 3,
        title: 'Title three',
        subTitle: 'Subtitle three',
        description: 'Third element',
        stars: '258'
    }, { 
        id: 4,
        title: 'Title four',
        subTitle: 'Subtitle four',
        description: 'Fourth element',
        stars: '1974'
    }, { 
        id: 5,
        title: 'Title five',
        subTitle: 'Subtitle five',
        description: 'Fifth element',
        stars: '2'
    }],
};

function itemsStore(state = defaultState, action) {

    var result = null;
    switch(action.type) {
        case 'ADD_ITEM':
            result = Object.assign({}, state, {
                items: state.items.concat([{
                    id: action.id,
                    title: action.title,
                    subTitle: action.subTitle,
                    description: action.description,
                    stars: action.stars,
                }]),
            });
            break;
        case 'REMOVE_ITEM':
            break;
        default:
            result = state;
            break;
    }
    return result;
}

export default createStore(itemsStore);