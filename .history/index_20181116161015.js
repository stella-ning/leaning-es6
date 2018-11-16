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
    console.log('0',str.codePointAt(0));//134071
    console.log('1',str.codePointAt(1));// 57271
    console.log('2',str.codePointAt(2));//97
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
    //20bb7
    //61
}

/**
 * codePointAt方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。
 */
{
    function is32Bit(c){
        return c.codePointAt(0) > 0xFFFF;
    }
    console.log(is32Bit('𠮷'));//true
    console.log(is32Bit('a'));//false
}

/**
 * 字符串的遍历器接口
 * ES6为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历
 * 
 * 除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
 */

 {
    for(let codePoint of 'foo'){
        console.log(codePoint)
    }
    // 'f'
    // '0'
    // '0'
 }

 /**
  * includes()：返回布尔值,表示是否找到了参数字符串;
  * startsWith()：返回布尔值,表示参数字符串是否在源字符串的头部;
  * endsWith()：返回布尔值,表示参数字符串是否在源字符串的尾部;
  */
 {
    let s = 'hello ningyuexin';

    console.log(s.startsWith('hello'));//true;
    console.log(s.startsWith('ning'));//false;

    console.log(s.endsWith('xin'));//true;

    console.log(s.includes('ning'));//true;
 }