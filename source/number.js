/**
 * 二进制和八进制表示法
 * ES6提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。
 * 如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。
 */
{
    console.log(0b111110111 === 503);//true 二进制 -- 十进制
    console.log(0o767 === 503);// true 八进制 -- 十进制

    console.log(Number('0b111'));//7 二进制转成十进制
    console.log(Number('0o10'));//7 八进制转成十进制
}

/**
 * Number.isFinite(), Number.isNaN();
 * ES6在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。
 * Number.isFinite()用来检查一个数值是否为有限的（finite）。
 * Number.isNaN()用来检查一个值是否为NaN。
 */

{
    console.log('isFinite',Number.isFinite(15));//true
    console.log('isFinite1',Number.isFinite(Infinity));//false

    console.log('isNAN',Number.isNaN(NaN));//true
    console.log('isNAN',Number.isNaN(15));//false
    console.log('isNAN',Number.isNaN('15'));//false
    console.log('isNAN',Number.isNaN(true));//false
    console.log('isNAN',Number.isNaN('true'/0));//true
    
}