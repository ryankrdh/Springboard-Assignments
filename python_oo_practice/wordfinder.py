"""Word Finder: finds random words from a dictionary."""

import random

class WordFinder:
    """ Random word generator. Uses list of words from words.txt.

    >>> wf = WordFinder("test.txt")
    3 words read

    >>> wf.random() in ["dog", "cat", "rabbit"]
    True
    
    """
    def __init__(self, path):
        """
        Read the word file and reports # items read.
        """
        words_file = open(path)

        self.words = self.parse(words_file)

        print(f"{len(self.words)} words read")

    def parse(self, words_file):
        """
        parse words_file -> list of words.
        """
        return [w.strip() for w in words_file]
    
    def random(self):
        """
        Return random word.
        """

        return random.choice(self.words)

class SpecialWordFinder:
    