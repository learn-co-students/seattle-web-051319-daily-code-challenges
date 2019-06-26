# Solution

# Algorithm
* Set a variable `max`to keep track of the current maximum
* Set `max` to start as zero
* Use a for loop to iterate over the array
* See if each element is greater than the current max
* Update max if the current element is greater
* Return `max`

# Source

```js
function maxValue(arr) {
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
```

## Discussion
### Setting Max to Zero
Setting `max` to zero exposes the program to making a certain mistake. Zero did
not come from any value in the array. Saying that the current `max` is zero is
a total lie! Zero was never in our array.

If the input array only contained negative numbers it would never find an
element larger than zero and the function would incorrectly say `0` was
the largest value.

Instead of setting max to `0` it would be better to write `max = arr[0]` to
"sample" the array and guarantee `max` is always equal to something actually
from the array.

```js
[-30, -20, -100] // input
0                // incorrect output
```


### Sorting
Jenny wanted to sort the array and return the last element. JavaScript has a
strange sort function. The JavaScript sort function converts every element to a
String and sorts everything alphabetically.

Since the sort function is slightly strange (without extra configuration) Jenny
decided to use the normal for loop.

```js
[90, 100, 5] // original
[100, 5, 90] // sorted
```

It sorts by the leading digits, which makes more sense when you look at how it
sorts strings.

```js
["yz", "azz", "k"] // original
["azz", "k", "yz"] // sorted
```



