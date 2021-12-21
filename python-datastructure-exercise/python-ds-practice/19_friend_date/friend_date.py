def friend_date(a, b):
    """Given two friends, do they have any hobbies in common?

    - a: friend #1, a tuple of (name, age, list-of-hobbies)
    - b: same, for friend #2

    Returns True if they have any hobbies in common, False is not.

        >>> elmo = ('Elmo', 5, ['hugging', 'being nice'])
        >>> sauron = ('Sauron', 5000, ['killing hobbits', 'chess'])
        >>> gandalf = ('Gandalf', 10000, ['waving wands', 'chess'])

        >>> friend_date(elmo, sauron)
        False

        >>> friend_date(sauron, gandalf)
        True
    """
    # hobby_a = list(a[2])
    # hobby_b = list(b[2])
    # # print(hobby_a, hobby_b)
    # for hobby_aa in hobby_a:
    #     for hobby_bb in hobby_b:
    #         if hobby_bb == hobby_aa:
    #             return True
    # else: 
    #     return False

    # other solution:

    if set(a[2]) & set(b[2]):
        return True
    else:
        return False
