# For a list of words, print out each word on a separate line, but in all uppercase. How can you change a word to uppercase? Ask Python for help on what you can do with strings!
# words = ['what', 'should', 'we', 'eat', 'for', 'dinner']
# for word in words:
#     print(word.upper())

# Turn that into a function, print_upper_words. Test it out. (Don’t forget to add a docstring to your function!)
# def print_upper_words(words):
#     '''Takes in a list of words and prints out each word on separate line in all uppercase.'''

#     for word in words:
#         print(word.upper())

# print_upper_words(['what', 'should', 'we', 'eat', 'for', 'dinner'])
# Change that function so that it only prints words that start with the letter ‘e’ (either upper or lowercase).
# def print_upper_words(worj 'should', 'we', 'eat', 'Eel', 'for', 'dinner'])
# Make your function more general: you should be able to pass in a set of letters, and it only prints words that start with one of those letters.
def print_upper_words(words, must_start_with):
    '''Takes in a list of words and prints out the words that starts with the letters that you pass through.'''
    
    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
                break

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})
# For example:

# # this should print "HELLO", "HEY", "YO", and "YES"

# print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
#                    must_start_with={"h", "y"})





