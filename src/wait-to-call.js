/**
 * WaitToCall - Wait till set time to call function
 * @param {function} executableFunction - Function that will be called
 * @param {number} timeBeforeFunctionCalls - Time before function is called
 * @param {any} argumentValues - Argument for executableFunction
 */

export const WaitToCall = (executableFunction, timeBeforeFunctionCalls = 0, argumentValues) => {

	if (executableFunction === undefined) {
		throw Error('wait-to-call needs an executable function!');
	} 

	if (executableFunction === null) {
		throw Error('wait-to-call\'s executableFunction can not be null!');
	} 

	let functionTimeout;

	{

		clearTimeout(functionTimeout);

		functionTimeout = setTimeout(() => executableFunction(argumentValues), timeBeforeFunctionCalls);

	}
};

export default WaitToCall;
