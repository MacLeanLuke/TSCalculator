# Luke's CLI RPN Calculator

## Introduction to RPN

Reverse Polish Notation was proposed by Burks, Warren and Wright in 1954 as a way to make use of the computer's stack to store operands before executing the operator and reduce the number of characters stored in memory. As the operands are pushed into the stack, each additional operand is stored in the position above. Once an operator is entered, it is applied in a FIFO (First In First Out). For example the entry, 5 3 - 2 * would be executed as follows: (( 5 - 3) * 2) which would return 4.


# Getting This Project Running Locally

## Clone the project to your local environment

There are multiple ways to clone in the project. If you have the Github CLI set up, you may use the following:

    gh repo clone MacLeanLuke/TSCalculator

## Install the node packages

In additional to the Typescript, this package requires the Mocha/Chai testing packages and readline-sync for terminal input.

    npm install
    
## Mocha/Chai Testing Suite

The testing suite chosen for this project was the Mocha/Chai test suite. There are 20 tests that run on the calculator methods and properties.

    npm test
    

## Compile and Run

The Project can be compiled and run at this point.

    npm start

# How to Run the Calculator

## Supported Operators

1. "+" : Performs the addition function 
2. "-" : Performs the subtraction function 
3. "*" : Performs the multiplication function
4. "/" : Performs the division function

## Supported Operands

This calculator only takes integers and floats as operands.

## Examples

As operands are input, they are added sequentially to an array of operands, as operators are input, they are added sequentially to an array of operators. 

    Enter numbers and operators + - * / separated by spaces:
    1 2 3.2 + * / 

As additional operators and operands are added, they are added to their respective stack and calculated in order.

    Enter numbers and operators + - * / separated by spaces:
    1 
     -----------Returned Value--------- 

    The value returned by those values and operands is 1

    --------------------------------- 

    Enter numbers and operators + - * / separated by spaces:
    2 
     -----------Returned Value--------- 

    The value returned by those values and operands is 1

    --------------------------------- 

    Enter numbers and operators + - * / separated by spaces:
    + 
     -----------Returned Value--------- 

    The value returned by those values and operands is 3

    --------------------------------- 

Once the user presses, enter, those operators and operands are calculated. 

     -----------Returned Value--------- 

    The value returned by those values and operands is 9.600000000000001

    --------------------------------- 

If the user needs help, they may press h, help or ?

     -----------Help Console---------- 

    Enter numbers and operators + - * / separated by spaces. 

    If you would like to exit the program please enter q, x, exit, or quit

    --------------------------------- 

If the user needs to quit the application, they may enter q, x, exit, quit, or ^C

    -----------Exiting CLI----------- 

    Thank you for using the CLI RPN Calculator. Exiting now.

    --------------------------------- 

# Final Considerations

## Reasoning Behind Technical/Architectural Choices

I choose an object oriented approach to abstracting out the various functions of the application to keep each of the functions well defined and contained for testing. Also in an effort to make the user experience more intuitive, I added additional information in the output to give the user more context.

## Additional Future Features

With additional time, I would like to build out a more robust Object Oriented structure, and a robust testing suite to go along with it. Additionaly, I would like to add support for more operators, and build it out into a complete reactive web app.
