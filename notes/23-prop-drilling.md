# Block 23 | Prop Drilling

[Slides](https://docs.google.com/presentation/d/e/2PACX-1vRNyNeTpvWvNUZ8xhQJMkrqIWCp-ds-N9mY5LoY_zt1karGMbua0ww0lZcBjSqu8Sw9Wgay7Nqkpu3q/pub?start=false&loop=false&delayms=3000)\
[Workshop: Proper Plants](https://github.com/FullstackAcademy/Unit3.ProperPlants)\
[Workshop Solution: Proper Plants](https://github.com/FullstackAcademy/Unit3.ProperPlants.Solution)

## Action Items

- [ ] Complete and submit Block 23: Competency Check.
- [ ] Complete and submit Workshop: Proper Plants.

## Learning Objectives

- Update arrays of objects in component state
- Copy arrays and objects with the spread operator
- Share state between multiple generations of components by prop drilling

## Vocabulary

- prop drilling
- spread operator `...`
- mutable, immutable

### Immutability

Immutability is a core concept in functional programming. It means that once a value is created, it cannot be changed. Instead, any operation that modifies the value will return a new value. This is in contrast to imperative programming, where values can be modified at any time.

In JavaScript, strings and numbers are immutable. For example, the following code does not modify the original string, but instead returns a new string with the modified value:

```js
const str = "Hello";
const newStr = str.toUpperCase();
```

Objects and arrays, on the other hand, are mutable. For example, the following code modifies the original array:

```js
const arr = [1, 2, 3];
arr.push(4);
```

In React, immutability is important because it allows us to compare the previous state with the new state to determine if a component needs to re-render. If we were to modify the state directly, React would not be able to detect the change and would not re-render the component. In addition, modifying the state directly can lead to hard-to-track bugs.

There are a few different ways to work with immutable data in JavaScript. The most common way is to use the spread operator to create a copy of an object or array. For example, the following code creates a new array with the new value added to the end:

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4];
```

For nested objects and arrays, you can use the spread operator to create a copy of the outer object or array, and then use the spread operator again to create a copy of the inner object or array. For example, the following code creates a new object with the new value added to the end:

```js
const obj = { name: "Lincoln", age: 6, address: { city: "Baltimore" } };
const newObj = {
  ...obj,
  address: { ...obj.address, country: "United States" },
};
```

In this example, the object `obj` has three properties: `name`, `age`, and `address`. The `address` is itself an object with a property `city`.

The next line of code creates a new object `newObj` using the spread operator (`...`), which is a way to create a copy of an object while also allowing for modifications.

Here's what's happening:

1. `{...obj}`: This creates a new object that has the same properties as `obj`. If `obj` has properties `name`, `age`, and `address`, then `newObj` will have these same properties with the same values. At this point, `newObj` is effectively a shallow copy of `obj`.

2. `address: {...}`: This is where the `address` property in `newObj` gets redefined. This will overwrite the previous `address` property copied from `obj`.

3. `{ ...obj.address, country: "United States" }`: Inside the `address` property definition, we're creating a new object that has the same properties as `obj.address` and an additional `country` property. The `{...obj.address}` part copies all properties from `obj.address` (in this case, just `city`). Then `country: "United States"` adds an additional property `country` to the `address` object.

So the resulting `newObj` is a shallow copy of `obj`, but with an updated `address` object that contains all the original properties plus a new `country` property.

Here's what `newObj` looks like:

```javascript
{
  name: "Lincoln",
  age: 6,
  address: {
    city: "Baltimore",
    country: "United States"
  }
}
```

As you can see, `newObj` has the same `name` and `age` as `obj`, and its `address` is a new object with the same `city` as `obj.address` and a new `country` property.

Here's one more example of using map function and spread operator to update one property within an array of objects:

```js
const arr = [
  { name: "Lincoln", age: 6 },
  { name: "Chase", age: 12 },
];
const newArr = arr.map((item) =>
  item.name === "Lincoln" ? { ...item, age: 7 } : item
);
```

The given JavaScript code is creating a new array `newArr` based on an existing array `arr` but with a modification to a specific item.

Here's the breakdown of what's happening:

1. `arr`: This is an array of objects, each object containing properties `name` and `age`.

2. `arr.map((item) => ...)`: The `map` method creates a new array populated with the results of calling a provided function on every element in the array. In this case, the function is checking each `item` in the array.

3. `item.name === "Lincoln" ? {...item, age: 7} : item`: This is a ternary operator, which is a shorthand way of writing an `if-else` statement. It checks if the `name` of the current item is "Lincoln". If it is ("Lincoln" === `item.name`), it returns a new object that has the same properties as the current item (copied using the spread operator `{...item}`), but with the `age` property updated to `7`. If the `name` is not "Lincoln", it returns the item as it is.

The end result is that `newArr` is a new array that's the same as `arr` but with the age of "Lincoln" updated to `7`. Here's what `newArr` looks like:

```js
[
  { name: "Lincoln", age: 7 },
  { name: "Chase", age: 12 },
];
```

### State Structure

When working with state in React, it's important to think about how to structure the state. There are a few different strategies for structuring state in a React application. The best strategy depends on the specific use case, but here are some general guidelines:

- **Local Component State:** For data that is only used within a single component, it's best to keep it in local component state. This is the simplest approach and works well for most use cases.
- **Shared State:** For data that is used in multiple components, it's best to keep it in a common ancestor component and pass it down to the child components via props. This is a good approach for data that is used in multiple places but doesn't need to be shared globally.
