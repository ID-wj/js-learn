/**
 * js 八大类型
 */

/**
 * 1. Boolean 由原始值false true组成
 */

/**
 * 2. String
 * String值是String类型的成员。序列中的每个整数值通常表示一个16位的UTF-16文本单元。
 * 但是，ECMAScript对值没有任何限制或要求，除非它们必须是16位无符号整数。
 */

/**
 * 3. Number
 * JavaScript的Number类型为双精度IEEE 754 64位浮点类型。
 * Number 对象主要用于：

    如果参数无法被转换为数字，则返回 NaN。
    在非构造器上下文中 (如：没有 new 操作符)，Number 能被用来执行类型转换。
 * JavaScript 中最大的安全整数 (2^53 - 1)。
 * JavaScript 中最小的安全整数 (-(2^53 - 1)).
 */

/**
 * 4. null
 * 表示有意不存在任何对象值
 * primitive value that represents the intentional absence of any object value
 */

/**
 * 5. undefined
 * 当一个变量未被赋值时使用的原始值
 */

/**
 * 6. BigInt
 * 表示任意大的整数，突破number的限制
 */

const theBiggestInt = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);
console.log(alsoHuge);

/**
 * 7. Symbol
 * 表示一个唯一的、非string对象属性键的原始值
 */

/**
 * 8. Object
 */
