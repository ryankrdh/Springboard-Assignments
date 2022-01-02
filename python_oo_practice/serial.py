"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start=0):
        """
        Make a new generator, starting at start.
        """
        # QUESTION: In the following code, what is the purpose of self.start = self.next = start
        self.start = self.next = start

    def __repr__(self):
        """
        Shows the representation.
        """
        return f"<SerialNumberGenerator start = {self.start} next = {self.next}>"

    def generate(self):
        """
        Return next serial.
        """
        # returns self.next - 1 to return the current generated value instead of the next number.
        self.next += 1
        return self.next - 1

    def reset(self):
        """
        reset number to original start
        """
        self.next = self.start


