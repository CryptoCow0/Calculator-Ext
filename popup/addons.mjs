// Copyright (c) 2021 Thatguyjs All Rights Reserved.
// Constants and functions for the calculator

import Calculator, { Token, Err } from "../Calc-JS/src/include.mjs";
import Converter from "./convert.mjs";

let Buttons = null;

if(typeof window !== 'undefined')
	Buttons = (await import("./buttons.mjs")).default;
else
	Buttons = { getAngleMode: () => { return 'radians'; } };


// Allow functions to take token input
function tk_wrap(call) {
	return function(...tokens) {
		let nums = [];

		for(let t in tokens) {
			if(tokens[t].modifier.negative) {
				tokens[t].data = -tokens[t].data;
				tokens[t].modifier.negative = false;
			}

			nums.unshift(tokens[t].data);
		}

		return [new Token(Token.Number, call(...nums))];
	}
}


// Join token data together into a string (for macros)
function join_tokens(tokens) {
	let str = "";

	for(let t in tokens)
		str += tokens[t].data.toString();

	return str;
}


const addons = {
	constants: {
		"pi": Math.PI,
		"e": Math.E
	},


	functions: {
		abs: Math.abs,

		rand: (min=1, max=0) => {
			if(max < min) {
				let tmp = max;
				max = min;
				min = tmp;
			}

			return Math.random() * (max - min) + min;
		},

		sum: (...nums) => {
			let total = 0;

			for(let n in nums)
				total += nums[n];

			return total;
		},

		sumrange: (start, stop) => {
			if(stop < start) {
				let tmp = start;
				start = stop;
				stop = tmp;
			}

			let total = 0;

			for(let i = start; i <= stop; i++)
				total += i;

			return total;
		},

		sqrt: Math.sqrt,
		cbrt: Math.cbrt,

		floor: Math.floor,
		round: Math.round,
		ceil: Math.ceil,

		max: (...args) => Math.max.apply(Math, args),
		min: (...args) => Math.min.apply(Math, args),

		sin: (value) => {
			if(Buttons.getAngleMode() === 'degrees') value *= Math.PI / 180;
			return Math.sin(value);
		},
		asin: (value) => {
			let mult = Buttons.getAngleMode() === 'degrees' ? 180 / Math.PI : 1;
			return Math.asin(value) * mult;
		},

		cos: (value) => {
			if(Buttons.getAngleMode() === 'degrees') value *= Math.PI / 180;
			return Math.cos(value);
		},
		acos: (value) => {
			let mult = Buttons.getAngleMode() === 'degrees' ? 180 / Math.PI : 1;
			return Math.acos(value) * mult;
		},

		tan: (value) => {
			if(Buttons.getAngleMode() === 'degrees') value *= Math.PI / 180;
			return Math.tan(value);
		},
		atan: (value) => {
			let mult = Buttons.getAngleMode() === 'degrees' ? 180 / Math.PI : 1;
			return Math.atan(value) * mult;
		},

		log: Math.log10,
		ln: Math.log
	},


	macros: {
		hex: (tokens) => {
			let res = Number(`0x${join_tokens(tokens)}`);
			if(isNaN(res)) return new Err(Err.Other, "Invalid Hex String");

			return [new Token(Token.Number, res, { negative: false })];
		},
		oct: (tokens) => {
			let res = Number(`0o${join_tokens(tokens)}`);
			if(isNaN(res)) return new Err(Err.Other, "Invalid Octal String");

			return [new Token(Token.Number, res, { negative: false })];
		},
		bin: (tokens) => {
			let res = Number(`0b${join_tokens(tokens)}`);
			if(isNaN(res)) return new Err(Err.Other, "Invalid Binary String");

			return [new Token(Token.Number, res, { negative: false })];
		},

		convert: (from, to) => {
			if(!from) return new Err(Err.Other, "Missing Parameters");
			else if(from.length > 3 && from[from.length - 2].data === 'as' || from[from.length - 2].data === 'to') {
				to = from.slice(-1);
				from = from.slice(0, -2);
			}
			else if(!to) return new Err(Err.Other, "Missing Parameters");

			const from_val = Calculator.eval_tokens(from.slice(0, -1))[0].value; // TODO: Check for errors
			const from_type = from[from.length - 1].data;
			const to_type = to[0].data;

			if(!Converter.has_type(from_type) || !Converter.has_type(to_type))
				return new Err(Err.Other, "Unknown Unit");

			let result = Converter.convert(from_val, from_type, to_type);

			return [new Token(Token.Number, result, { negative: false })];
		}
	}
};


for(let f in addons.functions) {
	addons.functions[f] = tk_wrap(addons.functions[f]);
}

export default addons;
