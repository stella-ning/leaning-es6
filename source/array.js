/**
 * Array.from()
 * Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
 * 下面是一个类似数组的对象，Array.from将它转为真正的数组。
 */
{
    let arrayLike = {
        '0':'a',
        '1':'b',
        '2':'c',
        length:3
    };

    //ES5的写法
    var arr1 = [].slice.call(arrayLike);
    console.log(arr1);//['a','b','c']

    //ES6的写法
    let arr2 = Array.from(arrayLike);
    console.log(arr2);//['a','b','c']
}
/**
 * Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
 */

{
    let array = Array.from([1,2,3],(item)=>item*item);
    console.log('array',array)
}

/**
 * Array.of()
 * Array.of方法用于将一组值，转换为数组。
 */
{
    Array.of(3, 11, 8) // [3,11,8]
    Array.of(3) // [3]
    Array.of(3).length // 1
}
/**
 * 数组实例的copyWithin()
 * 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
 * Array.prototype.copyWithin(target, start = 0, end = this.length)
 * 它接受三个参数。
 * target（必需）：从该位置开始替换数据。
    start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
    end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
    这三个参数都应该是数值，如果不是，会自动转为数值。
 */
{
    let copyArray = [1,2,3,4,5].copyWithin(0,3);
    console.log(copyArray);//[4, 5, 3, 4, 5]
    //上面代码表示将从3号位直到数组结束的成员（4和5），复制到从0号位开始的位置，结果覆盖了原来的1和2。
}

/**
 * 数组实例的find()和findIndex()
 * 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，
 * 然后返回该成员。如果没有符合条件的成员，则返回undefined。
 * find()只找出数组中第一个符合条件的并返回该成员
 * 
 * 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
 */

{
    let findArray = [1, 4, -5, 10].find((n)=>n<0);
    console.log(findArray);//-5

    let findArray2 = [1, 5, 10, 15].find((value,index,arr)=>value > 9);
    console.log(findArray2)

}

/**
 * 数组实例的fill()
 * fill方法使用给定值，填充一个数组。
 * 上面代码表明，fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。
 * 
 */
{
    ['a', 'b', 'c'].fill(7);//[7, 7, 7]
    new Array(3).fill(7);//[7, 7, 7]

}