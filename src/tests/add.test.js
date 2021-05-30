const add = (a,b) => a+b+1;
const greeting = (name) => (`hello ${name}`)

test('should add two numbers', ()=>{
    const result=add(2,3);
    expect(result).toBe(6);
});
test('should print greetings', ()=>{
    const result1=greeting('Mohit');
    expect(result1).toBe('hello Mohit')
})
