-- 1757. Recyclable and Low Fat Products

# Write your MySQL query statement below
SELECT
  product_id
FROM
  Products
WHERE
  low_fats = 'Y' AND recyclable = 'Y'