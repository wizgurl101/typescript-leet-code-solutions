export function find_averages_of_subarrays(K: number, arr: number[]): number[] {
  const results = [];

  let windowSum = 0.0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add the next element
    windowSum += arr[windowEnd];

    // slide the window, we don't need to slide if we've not hit the required
    // window
    if (windowEnd >= K - 1) {
      // calculate the average
      let average = windowSum / K;
      results.push(average);
      // subtract the element going out
      windowSum -= arr[windowStart];
      // slide the window ahead
      windowStart += 1;
    }
  }

  return results;
}
