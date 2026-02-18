"""
Valinz - A simple validation library for Python
February 2026 Edition
"""

class Validator:
    """Base validator class for common validation operations"""
    
    def __init__(self):
        self.errors = []
    
    def is_valid_email(self, email):
        """Validate email format"""
        if not email or '@' not in email:
            self.errors.append("Invalid email format")
            return False
        
        parts = email.split('@')
        if len(parts) != 2:
            self.errors.append("Invalid email format")
            return False
        
        username, domain = parts
        if not username or not domain or '.' not in domain:
            self.errors.append("Invalid email format")
            return False
        
        return True
    
    def is_valid_date(self, date_str, format="%Y-%m-%d"):
        """Validate date format"""
        from datetime import datetime
        try:
            datetime.strptime(date_str, format)
            return True
        except ValueError:
            self.errors.append(f"Invalid date format. Expected {format}")
            return False
    
    def is_in_range(self, value, min_val, max_val):
        """Check if value is within range"""
        if not min_val <= value <= max_val:
            self.errors.append(f"Value {value} not in range [{min_val}, {max_val}]")
            return False
        return True
    
    def is_not_empty(self, value):
        """Check if value is not empty"""
        if not value or (isinstance(value, str) and not value.strip()):
            self.errors.append("Value cannot be empty")
            return False
        return True
    
    def has_min_length(self, value, min_length):
        """Check if string has minimum length"""
        if len(str(value)) < min_length:
            self.errors.append(f"Value must be at least {min_length} characters long")
            return False
        return True
    
    def has_max_length(self, value, max_length):
        """Check if string has maximum length"""
        if len(str(value)) > max_length:
            self.errors.append(f"Value must be at most {max_length} characters long")
            return False
        return True
    
    def is_numeric(self, value):
        """Check if value is numeric"""
        try:
            float(value)
            return True
        except (ValueError, TypeError):
            self.errors.append("Value must be numeric")
            return False
    
    def get_errors(self):
        """Get all validation errors"""
        return self.errors
    
    def clear_errors(self):
        """Clear all errors"""
        self.errors = []
    
    def has_errors(self):
        """Check if there are any errors"""
        return len(self.errors) > 0


def validate_february_date(date_str):
    """Validate if a date is in February 2026"""
    from datetime import datetime
    try:
        date_obj = datetime.strptime(date_str, "%Y-%m-%d")
        if date_obj.year == 2026 and date_obj.month == 2:
            return True
        return False
    except ValueError:
        return False


if __name__ == "__main__":
    # Example usage
    v = Validator()
    
    # Test email validation
    print("Email validation:")
    print(f"test@example.com: {v.is_valid_email('test@example.com')}")
    print(f"invalid.email: {v.is_valid_email('invalid.email')}")
    
    # Test date validation
    v.clear_errors()
    print("\nDate validation:")
    print(f"2026-02-14: {v.is_valid_date('2026-02-14')}")
    print(f"invalid-date: {v.is_valid_date('invalid-date')}")
    
    # Test February date
    print("\nFebruary 2026 validation:")
    print(f"2026-02-14: {validate_february_date('2026-02-14')}")
    print(f"2026-03-14: {validate_february_date('2026-03-14')}")
    
    print(f"\nErrors: {v.get_errors()}")
