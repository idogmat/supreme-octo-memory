const GET_ITEMS ="GET_ITEMS";
const SORT_ITEMS ='SORT_ITEMS';
let initialState = {
        bags: [
            {id: '1',comments:'120', service: 'Black Genuine Leather Bags', price: '23.20', likes: '123'},
            {id: '2',comments:'120', service: 'Fashion Red Leather Bags', price: '20.16', likes: '2'},
            {id: '3',comments:'120', service: 'Fashion Genuine Leather Bags', price: '30.14', likes: '23'},
            {id: '4',comments:'120', service: 'Simply Leather Bags', price: '15.20', likes: '12'},
            {id: '5',comments:'120', service: 'New Fashion Leather Bags', price: '25.20', likes: '23'},
            {id: '6',comments:'120', service: 'Single Hand Models Bags', price: '17.6', likes: '42'},
        ],
    watches:[
            {id: '1',comments:'120', service: 'Fashion Genuine Chain Watch', price: '25.36', likes: '123'},
            {id: '2',comments:'120', service: 'Fashion Silver Chain Watch', price: '35.24', likes: '2'},
            {id: '3',comments:'120', service: 'Fashion Chain Watch', price: '23.12', likes: '23'},
            {id: '4',comments:'120', service: 'Fashion Black Chain Watch', price: '42.32', likes: '12'},
            {id: '5',comments:'120', service: 'Fashion Lether  Watch', price: '15.20', likes: '23'},
            {id: '6',comments:'120', service: ' Fashion Forign Watch', price: '36.12', likes: '42'},
        ],
    watches2:[
        {id: '4',comments:'120', service: 'Fashion Black Chain Watch', price: '42.32', likes: '12'},
        {id: '5',comments:'120', service: 'Fashion Lether  Watch', price: '15.20', likes: '23'},
        {id: '6',comments:'120', service: ' Fashion Forign Watch', price: '36.12', likes: '42'},
    ],
    watches3:[
        {id: '1',comments:'120', service: 'Fashion Genuine Chain Watch', price: '25.36', likes: '123'},
        {id: '2',comments:'120', service: 'Fashion Silver Chain Watch', price: '35.24', likes: '2'},
        {id: '3',comments:'120', service: 'Fashion Chain Watch', price: '23.12', likes: '23'},
        ]
};
const mainReducer = (state = initialState,action) => {
    let stateCopy = {...state};
    stateCopy.bags = [...state.bags];
    stateCopy.watches = [...state.watches];
    return stateCopy;

    switch (action.type) {
        case GET_ITEMS: {
            let stateCopy = {...state};
            stateCopy.bags = [...state.bags];
            stateCopy.watches = [...state.watches];
            return stateCopy;
        }
        // case SORT_ITEMS:{
        //     let stateCopy = {...state};
        //     stateCopy.watches = [...state.bags];
        //     return stateCopy;
        // }
        default:
            return state;
    }
}
export const getItemsDispatch=(state)=>{return {type: GET_ITEMS, state}}
// export const sortItemsDispatch=(state)=>{return {type: SORT_ITEMS, state}}

export const getItems = (state) => (dispatch) => {
    dispatch(getItemsDispatch(state));
}
// export const sortItems = (state) => (dispatch) => {
//     dispatch(sortItemsDispatch(state));
// }
export default mainReducer;
