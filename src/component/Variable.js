export const PRICES = () => {
        
  let prices = []
  for(let i=100000; i < 10000000; i+=100000) {
      prices = prices.concat(i)
  }

  return prices
}