export default (lowerBound = 0, upperBound = 100) => Math.floor(
  Math.random() * upperBound - lowerBound,
) + lowerBound;
