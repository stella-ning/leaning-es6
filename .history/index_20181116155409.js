// import './source/const';
// import './source/scope';
// import './source/proxy';
// import './source/arrow-function';
// import './source/parameter'

let log=(item)=>{console.log(item)};
log('我要学习ES6');


/**
 * ES6 字符串的codePointAt();
 * ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。
 */
{
    let str = `𠮷a`;
    console.log('0',str.codePointAt(0));//
    console.log('1',str.codePointAt(1));
    console.log('2',str.codePointAt(2));
}
/**
 * 你可能注意到了，codePointAt方法的参数，仍然是不正确的。比如，上面代码中，字符a在字符串s的正确位置序号应该是1，但是必须向codePointAt方法传入2。
 * 解决这个问题的一个办法是使用for...of循环，因为它会正确识别32位的UTF-16字符。
 */
{
    let s = `𠮷a`;
    for(let ch of s){
        console.log(ch.codePointAt(0).toString(16));
    }

}