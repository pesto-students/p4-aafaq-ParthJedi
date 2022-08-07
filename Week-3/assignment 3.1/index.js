'use strict';

const memoize = (fn) => {
	const cache = new Map();
	const key = args.toString();

	return function (...args) {
		if (cache.has(key)) {
			return cache.get(key);
		}
		cache.set(key, fn(...args));
		return cache.get(key);
	};
};
