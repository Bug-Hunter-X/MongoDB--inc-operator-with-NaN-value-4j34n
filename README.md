# MongoDB $inc operator with NaN value

This example demonstrates an uncommon error in MongoDB that occurs when using the `$inc` operator with a `NaN` value.

The `$inc` operator is used to increment a numerical field in a document.  However, if you try to increment a field with `NaN`, it will throw an error.

## Bug
The bug is demonstrated in the `bug.js` file.  It attempts to update a document by incrementing the `counter` field with `NaN`. This results in an error because `NaN` is not a valid numerical value for the `$inc` operator.

## Solution
The solution is shown in the `bugSolution.js` file.  It demonstrates the correct usage of the `$inc` operator with a valid numerical value.