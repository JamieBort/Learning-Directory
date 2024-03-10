from typing import List

nums = [1, 1, 2]; # want [1, 2, 2]
# nums = [1, 1, 2, 3]; # want [1, 2, 3, 3]
# nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

def removeDuplicates(nums: List[int]) -> int:# omitted "self" from signature.
# def removeDuplicates(self, nums: List[int]) -> int:
    if(len(nums)<2):
        return len(nums)
    i = 0
    j = 1
    while(j < len(nums)):
        if(nums[i]==nums[j]):
            j+= 1
        else:
            nums[i+1]=nums[j]
            j+= 1
            i+= 1
    return i+1

print(removeDuplicates(nums))
# removeDuplicates(nums)