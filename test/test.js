var expect = require('chai').expect;
var assert = require('chai').assert;
var WaitToCall = require('../index');

describe('#WaitToCall', function() {

	it('has no function', function() {

			expect(function(){WaitToCall()}).to.throw(Error);

			expect(function(){WaitToCall()}).to.throw(/wait-to-call needs an executable function!/);

	});

	it('calls function', function() {

		var veryComplexAddFunction = function veryComplexAddFunction(x) {
			console.log('called: x + 1');
			console.log(`equals: ${x + 1}`);
			return x + 1;
		};
		
		var functionToBeAttachedToButton = function functionToBeAttachedToButton(value) {
			return WaitToCall(veryComplexAddFunction, 10, value);
		};

		expect(() => functionToBeAttachedToButton(5)).to.not.throw(Error);

	});

});	
