def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    return phrase.title()

# title() capitalizes all first letter of each word and lowercases everything else
# capitalize() capitalizes ONLY the first letter of the first word and lowercases everything else.