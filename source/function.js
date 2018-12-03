/**
 * 作用域
 * 一个需要注意的地方是，如果参数默认值是一个变量，则该变量所处的作用域，与其他变量的作用域规则是一样的，即先是当前函数的作用域，然后才是全局作用域。
 */
{
    var x = 1;
    function f(x,y=x){
        console.log(y)
    }
    f(2);//2
}
/**
 * 上面代码中，参数y的默认值等于x。调用时，由于函数作用域内部的变量x已经生成，所以y等于参数x，而不是全局变量x。

    如果调用时，函数作用域内部的变量x没有生成，结果就会不一样。
 */
{
    let x = 1;
    function f(y=x){
        let x = 2;
        console.log(y)
    }
    f();//1
}

/**
 * rest参数
 * ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
 * 注意，rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
 */
{
    function add(...values) {
        let sum = 0;
      
        for (var val of values) {
            sum += val;
        }
      
        return sum;
    }
    let summer = add(1,2,3,4,5);
    console.log('summer',summer);

    //排序
    const sortNumbers = (...numbers) => numbers.sort();
    console.log(sortNumbers(2,4,5,3,1));
}

/**
 * 扩展运算符
 * 扩展运算符（spread）是三个点（...）。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。
 * 该运算符主要用于函数调用。
 */
{
    console.log(...[1, 2, 3]);
    //1 2 3
    
    console.log([...document.querySelectorAll('div')])
    //[div, div]

    function add(x, y) {
        return x + y;
    }
    var numbers = [4, 38];
    console.log(add(...numbers))// 42
}

/**
 * 扩展运算符的应用
 * 
 */
{
    //合并数组
    //扩展运算符提供了数组合并的新写法。
    var arr1 = ['a', 'b'];
    var arr2 = ['c'];
    var arr3 = ['d', 'e'];

    //ES5
    console.log(arr1.concat(arr2, arr3));// ["a", "b", "c", "d", "e"]

    //ES6
    console.log([...arr1, ...arr2, ...arr3]);// ["a", "b", "c", "d", "e"]
}

{
    //与解构赋值结合
    //扩展运算符可以与解构赋值结合起来，用于生成数组。
    const [first, ...rest] = [1, 2, 3, 4, 5];
    console.log(first,rest)

    
}