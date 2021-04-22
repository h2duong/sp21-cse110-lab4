## Part 1a
1. values added:  20
2. final result:  20
3. values added:  20
4. The code returns an error; this is because line 13 is after the return statement, and because we declare with the let keyword, it goes out of scope after line 11.
5. The code returns an error; this is because we declared result with the const keyword, and it cannot be reassigned. However, the code tries to reassign result at line 7.
6. The code returns an error; this is because we declared result with the const keyword, and it cannot be reassigned. However, the code tries to reassign result at line 7.

## Part 1b
1. prints 3
2. prints 150
3. prints 150
4. The function returns the array of discounted prices from the original prices and discount that we initially inputted. This is because the function takes each element in the argument and calculates the discount, placing the values into the discounted array.
5. The code causes an error, that "i is not defined". This is because we use let to declare the variables, and once the for loop is done, i has gone out of scope. Thus we can no longer access it.
6. The code causes an error, that "discountedPrice is not defined". This is because we use let to declare the variables, and it is declared inside the for loop. This means that once the for loop is done, it is out of scope and not accessible.
7. prints 150
8. The function returns the array of discounted prices from the original prices and discount that we initially inputted. This is because the function takes each element in the argument and calculates the discount, placing the values into the discounted array.
9. The code causes an error, that "i is not defined". This is because we use let to declare the variables, and once the for loop is done, i has gone out of scope. Thus we can no longer access it.
10. prints 3
11. The function returns the array of discounted prices from the original prices and discount that we initially inputted. This is because the function takes each element in the argument and calculates the discount, placing the values into the discounted array. Although discounted is declared with the const keyword, we can stil add to it. There is no reassignment.
12. A) student.name
    B) student["Grad Year"]
    C) student.greeting()
    D) student["Favorite Teacher"].name
    E) student.courseLoad[0]
13. A) 32; the integer maps to its string representation
    B) 1; the string is mapped to its integer representation
    C) 3; null is casted to a 0
    D) 3null; null is mapped to its string represenation and is concatenated
    E) 4; true is mapped to a 1
    F) 0; false and null are mapped to 0s
    G) 3undefined; undefined is mapped to its string representation and is concatenated
    H) NaN; there are no number types in the expression and '-' cannot be interpreted as something else like '+' can be concatenation
14. A) true; string '2' becomes a number 2
    B) false; the first character of '2' is greater than '12'
    C) true; string '2' becomes a number 2
    D) false; the types are different
    E) false; true becomes a number 1
    F) true; Boolean(2) becomes true
15. While both == and === check for equality, === is stricter in the sense that it also checks for type equality. With ==, it might cast types to see if the value is equal.

17. It returns the array [2, 4, 6]. Because we have the parameters [1, 2 ,3] and doSomething, modifyArray first takes in the array to be modified. doSomething then becomes the callback function for each element in the array, which doubles each element in the array. Then it is returned to be placed into the array.

19. 1
    
    4
    
    3
    
    2


