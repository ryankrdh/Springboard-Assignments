def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
    reversed_phrase = phrase[::-1].replace(" ", "").lower()
    if reversed_phrase == phrase.replace(" ", "").lower():
        return True
    return False

    # solution:
    #  normalized = phrase.lower().replace(' ', '')
    # return normalized == normalized[::-1]

