function memoize(fn) {
    const cache = {};
    return function (...args) {
      const key = args.toString(); // Convert arguments array to a string key
      if (cache.hasOwnProperty(key)) {
        console.log('Fetching from cache');
        return cache[key];
      } else {
        console.log('Calculating result');
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  // Function to sum any number of arguments
  function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
  }
  
  // Create a memoized version of sum
  const memoizedSum = memoize(sum);
  
  console.log(memoizedSum(10, 20)); // Calculating result and returns 30
  console.log(memoizedSum(10, 20)); // Fetching from cache and returns 30
  // You can now call memoizedSum with any number of arguments
  console.log(memoizedSum(1, 2, 3, 4, 5, 6)); // Calculating result and returns 21
  console.log(memoizedSum(1, 2, 3, 4, 5, 6)); // Fetching from cache and returns 21