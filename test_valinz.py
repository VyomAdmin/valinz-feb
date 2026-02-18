"""
Tests for the Valinz validation library
"""

import unittest
from valinz import Validator, validate_february_date


class TestValidator(unittest.TestCase):
    
    def setUp(self):
        self.validator = Validator()
    
    def tearDown(self):
        self.validator.clear_errors()
    
    def test_valid_email(self):
        """Test valid email addresses"""
        self.assertTrue(self.validator.is_valid_email("test@example.com"))
        self.assertTrue(self.validator.is_valid_email("user@domain.co.uk"))
    
    def test_invalid_email(self):
        """Test invalid email addresses"""
        self.assertFalse(self.validator.is_valid_email("invalid"))
        self.assertFalse(self.validator.is_valid_email("@example.com"))
        self.assertFalse(self.validator.is_valid_email("user@"))
        self.assertFalse(self.validator.is_valid_email(""))
    
    def test_valid_date(self):
        """Test valid date formats"""
        self.assertTrue(self.validator.is_valid_date("2026-02-14"))
        self.assertTrue(self.validator.is_valid_date("2026-12-31"))
    
    def test_invalid_date(self):
        """Test invalid date formats"""
        self.assertFalse(self.validator.is_valid_date("2026-13-01"))
        self.assertFalse(self.validator.is_valid_date("invalid-date"))
        self.assertFalse(self.validator.is_valid_date("02/14/2026"))
    
    def test_is_in_range(self):
        """Test range validation"""
        self.assertTrue(self.validator.is_in_range(5, 1, 10))
        self.assertTrue(self.validator.is_in_range(1, 1, 10))
        self.assertTrue(self.validator.is_in_range(10, 1, 10))
        self.assertFalse(self.validator.is_in_range(0, 1, 10))
        self.assertFalse(self.validator.is_in_range(11, 1, 10))
    
    def test_is_not_empty(self):
        """Test empty value validation"""
        self.assertTrue(self.validator.is_not_empty("hello"))
        self.assertFalse(self.validator.is_not_empty(""))
        self.assertFalse(self.validator.is_not_empty("   "))
        self.assertFalse(self.validator.is_not_empty(None))
    
    def test_has_min_length(self):
        """Test minimum length validation"""
        self.assertTrue(self.validator.has_min_length("hello", 3))
        self.assertTrue(self.validator.has_min_length("hello", 5))
        self.assertFalse(self.validator.has_min_length("hi", 3))
    
    def test_has_max_length(self):
        """Test maximum length validation"""
        self.assertTrue(self.validator.has_max_length("hello", 10))
        self.assertTrue(self.validator.has_max_length("hello", 5))
        self.assertFalse(self.validator.has_max_length("hello world", 5))
    
    def test_is_numeric(self):
        """Test numeric validation"""
        self.assertTrue(self.validator.is_numeric(123))
        self.assertTrue(self.validator.is_numeric("123"))
        self.assertTrue(self.validator.is_numeric(123.45))
        self.assertTrue(self.validator.is_numeric("123.45"))
        self.assertFalse(self.validator.is_numeric("abc"))
        self.assertFalse(self.validator.is_numeric("12a3"))
    
    def test_error_tracking(self):
        """Test error tracking functionality"""
        self.assertFalse(self.validator.has_errors())
        self.validator.is_valid_email("invalid")
        self.assertTrue(self.validator.has_errors())
        self.assertEqual(len(self.validator.get_errors()), 1)
        self.validator.clear_errors()
        self.assertFalse(self.validator.has_errors())


class TestFebruaryValidation(unittest.TestCase):
    
    def test_valid_february_dates(self):
        """Test valid February 2026 dates"""
        self.assertTrue(validate_february_date("2026-02-01"))
        self.assertTrue(validate_february_date("2026-02-14"))
        self.assertTrue(validate_february_date("2026-02-28"))
    
    def test_invalid_february_dates(self):
        """Test invalid February dates"""
        self.assertFalse(validate_february_date("2026-01-14"))
        self.assertFalse(validate_february_date("2026-03-14"))
        self.assertFalse(validate_february_date("2025-02-14"))
        self.assertFalse(validate_february_date("2027-02-14"))
        self.assertFalse(validate_february_date("invalid-date"))


if __name__ == "__main__":
    unittest.main()
