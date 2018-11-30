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
 * fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
 * 
 */
{
    ['a', 'b', 'c'].fill(7);//[7, 7, 7]
    new Array(3).fill(7);//[7, 7, 7]

    ['a', 'b', 'c'].fill(7, 1, 2);//['a',7,'c']
}

/**
 * 数组实例的entries()，keys()和values()
 * ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
 */

 {
    for (let index of ['a', 'b'].keys()) {
        console.log(index);
    }
    //0
    //1

    for(let elem of ['a','b'].values()){
        console.log(elem);
    }
    //'a'
    //'b'

    for(let [index,elem] of ['a','b'].entries()){
        console.log(index,elem);
    }
    //0 'a';
    //1 'b'

    /**
     * 如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
    */
    let letter = ['a', 'b', 'c'];
    let entries = letter.entries();
    console.log(entries.next().value); // [0, 'a']
    console.log(entries.next().value); // [1, 'b']
    console.log(entries.next().value); // [2, 'c']
 }

 /**
  * 数组实例的includes()
  * Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。该方法属于ES7，但Babel转码器已经支持。
  * 
  */

{
    [1, 2, 3].includes(2);     // true
    [1, 2, 3].includes(4);     // false
    [1, 2, NaN].includes(NaN); // true

    /**
     * 该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），
     * 则会重置为从0开始。
     * 
     */
    [1, 2, 3].includes(3, 3);  // false
    [1, 2, 3].includes(3, -1); // true

    /**
     * 另外，Map和Set数据结构有一个has方法，需要注意与includes区分。
     * Map结构的has方法，是用来查找键名的，比如Map.prototype.has(key)、WeakMap.prototype.has(key)、Reflect.has(target, propertyKey)。
     * Set结构的has方法，是用来查找值的，比如Set.prototype.has(value)、WeakSet.prototype.has(value)。
     */
}