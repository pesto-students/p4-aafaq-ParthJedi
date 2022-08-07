'use strict';

const memoize = (fn) => {
	const cache = new Map();
	return function (...args) {
		const key = args.toString();
		if (cache.has(key)) {
			return cache.get(key);
		}
		cache.set(key, fn(...args));
		return cache.get(key);
	};
};
