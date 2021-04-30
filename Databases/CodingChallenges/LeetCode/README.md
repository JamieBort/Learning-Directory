# LeetCode

https://leetcode.com/problemset/database/


https://leetcode.com/problems/duplicate-emails/submissions/
### Solution

Write your MySQL query statement below
SELECT Email 
FROM Person
GROUP BY Email
HAVING COUNT(Email)>1;