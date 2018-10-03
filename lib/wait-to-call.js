'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * WaitToCall - Wait till set time to call function
 * @param {function} executableFunction - Function that will be called
 * @param {number} timeBeforeFunctionCalls - Time before function is called
 * @param {any} argumentValues - Argument for executableFunction
 */

var WaitToCall = exports.WaitToCall = function WaitToCall(executableFunction) {
	var timeBeforeFunctionCalls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var argumentValues = arguments[2];


	if (executableFunction === undefined) {
		throw Error('wait-to-call needs an executable function!');
	}

	if (executableFunction === null) {
		throw Error('wait-to-call\'s executableFunction can not be null!');
	}

	var functionTimeout = void 0;

	{

		clearTimeout(functionTimeout);

		functionTimeout = setTimeout(function () {
			return executableFunction(argumentValues);
		}, timeBeforeFunctionCalls);
	}
};

exports.default = WaitToCall;