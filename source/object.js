/**
 * Object.is()
 * 它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
 */
{
    console.log(Object.is('foo', 'foo'));//true
    console.log(Object.is({},{}));//false
    console.log(Object.is(+0,-0));//false
    console.log(Object.is(NaN,NaN));//true
}

/**
 * 
 */