def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """
    # Even though set can hold only unique items, it is significantly faster than lists when you want to check if an item is contained within. list is slightly faster when you are iterating over the values.
    vowels = set("aeiou")
    # print(vowels)
    string = list(s)
    # print(string)
    i = 0
    j = len(s) -1

    # this while loop will make sure I don't iterate over the vowels again.
    while i < j:
        if string[i].lower() not in vowels:
            i += 1
        elif string[j].lower() not in vowels:
            j -= 1
        # it will iterate and count up i and count down j until it hits a vowel
        else:
            string[i], string[j] = string[j], string[i]
            i += 1
            j -= 1

    return ''.join(string)

        
print(reverse_vowels("Reverse Vowels In A String"))