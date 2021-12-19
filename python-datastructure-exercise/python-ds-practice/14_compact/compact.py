def compact(lst):
    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """
    return [lst for lst in lst if lst]


# print(compact([0, 1, 2, '', [], False, (), None, 'All done']))