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

/**
 * Number.parseInt(), Number.parseFloat()
 * ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
 * 这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
 */
{
    //ES5的写法
    console.log(parseInt('12.34'));//12
    console.log(parseFloat('123.45#'));//123.45

    console.log(Number.parseInt === parseInt);//true
    console.log(Number.parseFloat === parseFloat);//true
}

/**
 * Number.isInteger()
 * Number.isInteger()用来判断一个值是否为整数。需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。
 */

{
    console.log(Number.isInteger(55));//true
    console.log(Number.isFinite(25.0));//true
    console.log(Number.isInteger('15'));//false
    console.log(Number.isInteger(true));//false
    //ES5可以通过下面的代码，部署Number.isInteger()。
    // (function(global){
    //     var floor = Math.floor,
    //         isFinite =  global.isFinite;
    //     object.defineProperty(Number,'isInteger',{
    //         value: function isInteger(value){
    //             return typeof value === 'number' && isFinite(value) && value > -9007199254740992 && value < 9007199254740992 && floor(value) === value;
    //         },
    //         configurable:true,
    //         enumerable:false,
    //         writable:true
    //     })
    // })(this);
}

/**
 * 安全整数和Number.isSafeInteger()
 * JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
 * ES6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
 */
{
    console.log(Math.pow(2, 53));// 2^53 == 9007199254740992
    console.log(Number.MAX_SAFE_INTEGER === Math.pow(2,53) -1 );//true
    //Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。
    console.log(Number.isSafeInteger('a'));//false
    console.log(Number.isSafeInteger(null));//false
    console.log(Number.isSafeInteger(NaN));//false
    console.log(Number.isSafeInteger(Infinity));//false
    console.log(Number.isSafeInteger(- Infinity));//false

    console.log(Number.isSafeInteger(3));//true
    console.log(Number.isSafeInteger(1.2));//false

}

/**
 * Math.trunc()
 * Math.trunc方法用于去除一个数的小数部分，返回整数部分。
 */
{
    console.log(Math.trunc(5.1));//5
    console.log(Math.trunc(5.9));//5
    console.log(Math.trunc(- 0.122));//-0
    console.log(Math.trunc(-5.9));//-5
}

/**
 * Math.sign()
 * Math.sign()方法用来判断一个数到底是正数,负数,还是零
 * 它会返回五种值。
    参数为正数，返回+1；
    参数为负数，返回-1；
    参数为0，返回0；
    参数为-0，返回-0;
    其他值，返回NaN。           
 */

{
    Math.sign(-5) // -1
    Math.sign(5) // +1
    Math.sign(0) // +0
    Math.sign(-0) // -0
    Math.sign(NaN) // NaN
    Math.sign('foo'); // NaN
    Math.sign();      // NaN
}