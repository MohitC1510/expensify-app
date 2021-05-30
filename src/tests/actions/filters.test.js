import moment from 'moment';
import {setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../../actions/filters';
test('should test start date', ()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})
test('should test end date', ()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})
test('should test sort by date', ()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:"SORT_BY_DATE"
    })
})
test('should test sort by amount', ()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
    })
})
test('should test set text filter', ()=>{
    const action=setTextFilter('mohit');
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:'mohit'

    })
})
test('should test set text filter empty', ()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:''

    })
})