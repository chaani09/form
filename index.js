const p = 20;
const string = "Hello World";
const boolean = true;
const Nullvalue = null;
const UndefinedValue = undefined;
const array = [0, 1, 2, 3, 4, true, [5, 6, 7, 8], "hello world"];
// this is possible in java script.
const object = {
    key: "value",
    key1: "value1",
    key2: "value2",
}
console.log(object.key1);

const object1 = {
    key: 'value',
    key2: 'value2',
    key3: 'value3',
    key4: {
        key5: 'value5',
        key6: 'value6',
    }
}
console.log(object1.key2, object1.key4.key5);