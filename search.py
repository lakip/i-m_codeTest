def binary_search(collection_of_values, value_in_collection):
    first = 0
    last = len(collection_of_values)-1

    found = False
    while (first <= last and not found):
        mid = (first + last) // 2
        if collection_of_values[mid] == value_in_collection:
            found = value_in_collection
        else:
            if value_in_collection < collection_of_values[mid]:
                last = mid - 1
            else:
                first = mid + 1
    if not found:
        return -1
    return found


print(binary_search([1, 2, 3, 7], 2))