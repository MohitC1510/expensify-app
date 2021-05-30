import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})
// SET_TEXT_FILTER
const settextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE",

})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",

})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})



const expenseDefaultReducerState = [];
const expenseReducer = (state = expenseDefaultReducerState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => {
                return id !== action.id
            })
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense;
                }
            })


        default:
            return state;
    }
};

const filterDefaultReducerState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterDefaultReducerState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: 'amount'
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: 'date'
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};
const getVisibleExpenses = (expenses, { text, sortBy, endDate, startDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
      if(sortBy==="date") {
          return a.createdAt<b.createdAt ?1:-1;
      }
      if(sortBy==="amount"){
          return a.amount<b.amount ? 1: -1;
      }  
    })
}


const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpense);
});
const expenseone = store.dispatch(addExpense({ description: "rent", amount: 500, createdAt: -21000 }));
const expensetwo = store.dispatch(addExpense({ description: "coffee", amount: 800, createdAt: -1000 }));
   store.dispatch(removeExpense({id: expensetwo.expense.id}));
//    store.dispatch(editExpense(expensetwo.expenses.id,{amount:1100}));
//    store.dispatch(settextFilter('ffe'));
//    store.dispatch(sortByAmount());
//    store.dispatch(sortByDate());
// store.dispatch(setStartDate(-125));

//    store.dispatch(setEndDate(1400));



const demoState = {
    expenses: [{
        id: 'dfbdsjfbjs',
        description: 'rent',
        note: 'This is my final payment to that address',
        amount: 545,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
};



