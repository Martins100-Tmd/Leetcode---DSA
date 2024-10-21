# CODEFORCE


def twoSum(num, target):
    Map = {}
    for i in range(len(num)):
        complement = target - num[i]
        if complement in Map:
            return [Map[complement], i]
        Map[num[i]] = i


print(twoSum([2, 7, 11, 15], 9))
print(twoSum([3, 2, 4], 6))
print(twoSum([3, 3], 6))


def PascalTriangle(rowNum):
    head = [[1], [1, 1], [1, 2, 1]]
    if rowNum == 0:
        return head[0]
    if rowNum == 1:
        return head[0:2]
    if rowNum == 2:
        return head[0:3]
    if rowNum > 2:
        for i in range(3, rowNum):
            curr, arr = head[i - 1], []
            for j in range(0, len(curr) - 1):
                arr.append(curr[j] + curr[j + 1])
            arr.insert(0, 1), arr.append(1)
            head.append(arr)
    return head


print(PascalTriangle(10))
