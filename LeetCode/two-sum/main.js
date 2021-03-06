var twoSum = function(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];
    if (map.has(currentValue)) {
      return [map.get(currentValue), i]
    }
    let difference = target - currentValue;
    map.set(difference, i);
  }
}

/**
Notes:
[2, 7, 11, 16] target = 9,
map = {}

/**
Pseudocode
 - The "map" is going to hold the differences that add up to the target

1. Declare a map
2. Loop through the nums array to check if the map has the value... (target - current = value).
  If false,
    use map.set(,) to add the key and value pair (difference, i)
  If true,
    - return the indices that add up to the total

Logic
1. Starting at index[0],
  Check: If 2 is in the map, we found the difference that add up to nine
  Since the map is empty, push the difference of (target - current)
    - In this case, 9 - 2 = 7

  - map is now.. the 0 represents the index position
    map = {7 : 0}

2. Starting at index[1],
  Check: If 7 is in the map.
  Since 7 is in the map, return the two indices that add up to the total

  Ex. return [0,1]
    - 2 + 7 = 9

**/




/** More efficient, faster way of solving this problem */
const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i]
    }
    comp[target - nums[i]] = i
  }
};

/**
Explanation:
You are looking for the two numbers that satisfy the condition (x + y = target)

He iterates through the array knowing that for each number, there is only one complementary number that could possibly satisfy the return condition (x + y = target).
If we do some quick math and rearrange this equation, this means that target - y = x.
We already know target, and each time we iterate we get a value of y.
Therefore every time we iterate we calculate what the complementary x must be for that given y, so we save the value of complementary x as the key and we save the index of y.
As we pass through the loop, we simultaneously build up a database of the potential x values that will give us our answer.

Therefore, if the current number is a key in the database, we return the value of the y index we stored earlier, along with the current index, and we have our answer..
*/
