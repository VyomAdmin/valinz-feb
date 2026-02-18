# Valinz - February 2026 Edition

A simple and lightweight validation library for Python, created for February 2026.

## Features

- Email validation
- Date validation
- Range checking
- String length validation
- Numeric validation
- Empty value checking
- Error tracking and management
- Special February 2026 date validation

## Installation

Clone this repository and import the `Validator` class:

```python
from valinz import Validator
```

## Usage

### Basic Validation

```python
from valinz import Validator

v = Validator()

# Email validation
if v.is_valid_email("user@example.com"):
    print("Valid email!")

# Date validation
if v.is_valid_date("2026-02-14"):
    print("Valid date!")

# Check for errors
if v.has_errors():
    print("Errors:", v.get_errors())
```

### February 2026 Date Validation

```python
from valinz import validate_february_date

# Check if date is in February 2026
if validate_february_date("2026-02-14"):
    print("It's Valentine's Day 2026!")
```

### Range Validation

```python
v = Validator()

# Check if value is in range
if v.is_in_range(5, 1, 10):
    print("Value is in range!")
```

### String Validation

```python
v = Validator()

# Check if not empty
if v.is_not_empty("hello"):
    print("Not empty!")

# Check minimum length
if v.has_min_length("hello", 3):
    print("Meets minimum length!")

# Check maximum length
if v.has_max_length("hello", 10):
    print("Within maximum length!")
```

### Numeric Validation

```python
v = Validator()

# Check if numeric
if v.is_numeric("123.45"):
    print("It's a number!")
```

## Running Tests

```bash
python test_valinz.py
```

Or with unittest:

```bash
python -m unittest test_valinz.py
```

## Error Handling

The Validator class tracks all validation errors:

```python
v = Validator()

v.is_valid_email("invalid")
v.is_not_empty("")

print(v.get_errors())  # List of error messages
v.clear_errors()       # Clear all errors
```

## License

This project is open source and available for use in February 2026 and beyond.
