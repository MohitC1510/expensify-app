import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', ()=>{
    const state=filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
    })
})
test('should setup sortBy to amount', ()=>{
    const state=filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})
test('should setup default filter values', ()=>{
    const CurrentState={
        text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
    }
    const action={type: 'SORT_BY_DATE'};
    const state=filtersReducer(CurrentState, action);
    expect(state.sortBy).toEqual('date')
})

test('should test text filter',()=>{
    const text='this is my text filter';
    const action={
        type:'SET_TEXT_FILTER',
        text
    }
    const state=filtersReducer(undefined,action);
    expect(state.text).toBe(text)
})
test('should test start date filter',()=>{
    const startDate=moment();
    const action={
        type:'SET_START_DATE',
        startDate
    }
    const state=filtersReducer(undefined,action);
    expect(state.startDate).toBe(startDate)
})
test('should test end date filter',()=>{
    const endDate=moment();
    const action={
        type:'SET_END_DATE',
        endDate
    }
    const state=filtersReducer(undefined,action);
    expect(state.endDate).toBe(endDate)
})