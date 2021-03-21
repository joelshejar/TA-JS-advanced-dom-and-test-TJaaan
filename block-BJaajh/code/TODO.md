## Writing Test

Write 5 tests for the following functions:

```js
function checkFive(num) {
  let result = '';
  if (num < 5) {
    result = num + ' is less than 5.';
  } else if (num === 5) {
    result = num + ' is equal to 5.';
  } else {
    result = num + ' is greater than 5.';
  }

  return result;
}
```

2.

In the game of Rock, Paper, Scissors each player picks one of the three objects. To declare the winner these rules are applied.

- Paper beats Rock
- Scissor beat Paper
- Rock beats Scissors

Write a function `getWinner` that accepts two parameter `guess1` and `guess2` and return the appropriate message.

- If both guess are same return `TIE`
- If player one wins write `Player 1 wins!`
- If player two wins write `Player 2 wins!`

After writing the function `getWinner` write 5 tests using jest. Also handle the condition when user passes any other value than `Rock`, `Paper` or `Scissor`
