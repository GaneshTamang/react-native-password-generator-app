# Simple Password Generator App example App using React native



## custom dynamic keys opeartion example

```typescript


function main():void{
    // custom key example and how to operate on it 
const customkeylist:mykeys={
    key1:25,
    key2:26,
    key3:27,

}
// loop to read and write the custom keys 
for(const keys in customkeylist){

    console.log(keys+':'+customkeylist[keys])
}
// deleting keys 
delete customkeylist.key2;
console.log(customkeylist)
// adding  keys
customkeylist.key4=88
console.log(customkeylist)


}



interface mykeys{
    [key:string]:number
}



main();

```

