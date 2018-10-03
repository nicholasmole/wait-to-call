Wait To Call
=========

Fire off function after set time

## Usage

`npm i @nicholasmole/wait-to-call`
                                                                
To use WaitToCall you need to give it a function 
                                                                        
```
import {WaitToCall} from '@nicholasmole/wait-to-call';

const veryComplexAddFunction = x => console.log(x+1);

const functionToBeAttachedToButton = value => WaitToCall(veryComplexAddFunction, 500, value);                     
functionToBeAttachedToButton(5);

// output: 6
                                                                       
```

WaitToCall takes in 3 parameters

WaitToCall(executableFunction, timeBeforeFunctionCalls = 0, argumentValues)

```
 * {function} executableFunction - Function that will be called
 * {number} timeBeforeFunctionCalls - Time before function is called
 * {any}  argumentValues - Argument for executableFunction
```

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.