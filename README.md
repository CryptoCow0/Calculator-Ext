Here’s the README in Markdown format:

```markdown
# Calculator-Ext

**Calculator-Ext** is a powerful Chrome extension that provides an extensive range of mathematical operations, functions, and utilities. Whether you need basic arithmetic, advanced functions, or custom macros, this extension has you covered.

## Features

### Operators

Perform fundamental operations with ease:
| Operator | Function             |
|----------|----------------------|
|    \+    | Addition             |
|    \-    | Subtraction          |
|    \*    | Multiplication       |
|    /     | Division             |
|    %     | Modulus              |
|    ^     | Exponentiation       |
|    !     | Factorial            |
|    E     | Scientific Notation  |

### Constants

Reference mathematical constants quickly:
| Constant | Value        |
|----------|--------------|
|    π     | 3.1415926536 |
|    e     | 2.7182818285 |

### Functions

#### abs(x)
- **Description:** Returns the absolute value of `x`.

#### rand([max])
#### rand([min, max])
- **Description:** Generates a random number. If only `max` is provided, `min` defaults to `0`.

#### sum(...nums)
- **Description:** Returns the sum of multiple numbers.

#### sumrange(start, stop)
- **Description:** Returns the sum of a range of numbers, inclusive.

#### sqrt(x)
- **Description:** Returns the square root of `x`.

#### cbrt(x)
- **Description:** Returns the cube root of `x`.

#### root(val, root)
- **Description:** Calculates an arbitrary root of `val`.

#### floor(x)
- **Description:** Rounds `x` down to the nearest integer.

#### round(x)
- **Description:** Rounds `x` to the nearest integer (`.5` is rounded up).

#### ceil(x)
- **Description:** Rounds `x` up to the nearest integer.

#### trunc(x[, decimals])
- **Description:** Truncates `x` to the number of decimal places determined by `decimals` (default: `0`).

#### sin(x) / asin(x)
- **Description:** Returns the sine and arcsine (also written as <code>sin<sup>-1</sup>(x)</code>) of `x`.

#### cos(x) / acos(x)
- **Description:** Returns the cosine and arccosine (also written as <code>cos<sup>-1</sup>(x)</code>) of `x`.

#### tan(x) / atan(x)
- **Description:** Returns the tangent and arctangent (also written as <code>tan<sup>-1</sup>(x)</code>) of `x`.

#### log(x)
- **Description:** Returns the logarithm base 10 of `x`.

#### ln(x)
- **Description:** Returns the logarithm base `e` of `x`.

#### isprime(x)
- **Description:** Returns `1` if `x` is prime, and `0` if `x` is not prime.

#### gcd(num, den)
#### gcf(num, den)
- **Description:** Returns the greatest common divisor (factor) of two numbers. Returns `0` if either number is not an integer.

### Macros

#### hex(value)
- **Description:** Converts `value` from hexadecimal (base 16) to decimal (base 10).

#### oct(value)
- **Description:** Converts `value` from octal (base 8) to decimal (base 10).

#### bin(value)
- **Description:** Converts `value` from binary (base 2) to decimal (base 10).

#### convert(value from_unit, to_unit)
#### convert(value from_unit ["as" | "to" | "in"] to_unit)
- **Description:** Converts `value` from `from_unit` to `to_unit`.

#### range(start, stop[, step])
- **Description:** Creates a list that spans from `start` to `stop`, with an optional `step` size (default: `1`).

#### f(variable, equation, start, stop[, step])
- **Description:** Computes `equation` for each value of `variable` as defined by the range [`start`, `stop`] with an optional `step` size (default: `1`).

### Expressions

- Multiple expressions can be separated by commas (`,`).
  - **Example:** `1 + 2, 3 - 5` yields `3, -2`.
- Each expression is evaluated separately, and results are displayed in the same order.
- Variable definitions (e.g., `x = 4`) are not shown as output.

### Variables

- Supports arbitrary variable names (lowercase, must not collide with constants or operators).
- A variable definition starts with a variable name, followed by an equals sign, and an evaluable expression (e.g., `x = 4`, `myvar = 5 + 6`).
- Variables can be defined before or after an expression (e.g., `x = 2, 3x` and `3x, x = 2` are both valid).
- Variables that depend on each other must be defined in order (e.g., `x = 2, y = 5 - x` is valid, but `y = 5 - x, x = 2` is not).

### Other

- Supports both degree (Deg) and radian (Rad) modes.
- Keeps track of the last 25 calculations and results.
```

You can copy this Markdown directly into your README file.
