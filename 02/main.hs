file = "input.txt"

main = do 
    contents <- readFile file
    let l = lines contents
    let w = map words l
    let numbers = map (\ x -> map readInt x) w
    let levels = map solveLevel numbers
    let debugLevels = map (\nums -> (solveLevel nums, nums)) numbers
    let result = foldr (\ x xs -> if x then xs + 1 else xs) 0 levels
    print result


readInt :: String -> Int
readInt = read

solveLevel [] = True
solveLevel (x:y:xs) = if x > y then solve True (x:y:xs) else solve False (x:y:xs)

fineDifference x y = abs (x - y) <= 3

solve _ [] = True
solve _ [x] = True
solve True [x,y] = x > y && fineDifference x y
solve False [x,y] = x < y && fineDifference x y
solve incr (x:y:xs) = if condition && fineDifference x y then solve incr (y:xs) else False
    where condition = x > y && incr || x < y && not incr
