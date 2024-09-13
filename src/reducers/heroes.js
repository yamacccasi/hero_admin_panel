import {createReducer} from "@reduxjs/toolkit";

// import {
//     heroesFetching,
//     HeroesFetched,
//     heroesFetchingError,
//     heroCreated,
//     heroDeleted, heroesFetched
// } from "../actions";
//
// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }
//
// const heroes = createReducer(initialState, {
//     [heroesFetching]: state => {
//         state.heroesLoadingStatus = 'loading';
//     },
//     // ES6 syntax deprecated
// }, [], state => state)


// const heroes = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = 'loading'
//         })
//         .addCase(heroesFetched, (state,action) => {
//             state.heroesLoadingStatus = 'idle'
//             state.heroes = action.payload
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'idle'
//         })
//         .addCase(heroDeleted, (state,action) => {
//             state.heroes.filter(item => item.id !== action.payload)
//         })
//         .addCase(heroCreated, (state,action) => {
//             state.heroes.push(action.payload)
//         })
//         .addDefaultCase(() => {})
// });

// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HERO_CREATED':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload],
//             }
//         case 'HERO_DELETED':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(item => item.id !== action.payload)
//             }
//         default: return state
//     }
// }

// export default heroes;