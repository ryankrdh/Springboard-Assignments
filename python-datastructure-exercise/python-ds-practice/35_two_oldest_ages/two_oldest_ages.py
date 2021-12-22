def two_oldest_ages(ages):
    """Return two distinct oldest ages as tuple (second-oldest, oldest)..

        >>> two_oldest_ages([1, 2, 10, 8])
        (8, 10)

        >>> two_oldest_ages([6, 1, 9, 10, 4])
        (9, 10)

    Even if more than one person has the same oldest age, this should return
    two *distinct* oldest ages:

        >>> two_oldest_ages([1, 5, 5, 2])
        (2, 5)
    """

    # NOTE: don't worry about an optimized runtime here; it's fine if
    # you have a runtime worse than O(n)

    # NOTE: you can sort lists with lst.sort(), which works in place (mutates);
    # you may find it helpful to research the `sorted(iter)` function, which
    # can take *any* type of list-like-thing, and returns a new, sorted list
    # from it.
    
    uniq_ages = set(ages)
    # we need to convert the set back into a list in order to use the built in list functions
    # We can't use list and need to use sorted because set is unordered. Also sorted instead of sort since sort does not return anything, it mutates the list in place while sorted will create a new list.
    oldest = sorted(uniq_ages)[-2:]
    return tuple(oldest)
    
    
# print(two_oldest_ages([6, 1, 9, 10, 4, 10, 4]))

# list_ex = [6, 1, 9, 10, 4, 3, 5, 5]
# list_ex.sort()
# print(list_ex)