def sum_up_diagonals(matrix):
    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """
    # index[0][0] + index[1][1] + index[2][2] == index[i][i]
    # index[0][-1] + index[1][-2] + index[2][] = 
    
    total = 0
    for i in range(len(matrix)):
        # TL-to-BR
        total += matrix[i][i] 
        # print(matrix[i][i])
        # BL-to-TR
        total += matrix[i][-1 - i]
        # print(matrix[i][-1 - i])
    return total
    
# m2 = [
#         [1, 2, 3],
#         [4, 5, 6],
#         [7, 8, 9],
#     ]
    
# print(sum_up_diagonals(m2))