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
    console.log('0',str.codePointAt(0));
    console.log('1',str.codePointAt(1),str.codePointAt(1).toString(16));
    console.log('2',str.codePointAt(2));
}
