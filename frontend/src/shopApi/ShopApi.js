export const allProducts = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    limit: '48',
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US',
  },
  headers: {
    'X-RapidAPI-Key': '13f9c247d6msh3922c0e5dad4425p1829c5jsnadc41a352f80',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
  },
};
// export const getProduct = (productId) => {
//   const config = {
//     method: 'GET',
//     url: 'https://asos2.p.rapidapi.com/products/v3/detail',
//     params: {
//       id: productId,
//       lang: 'en-US',
//       store: 'US',
//       sizeSchema: 'US',
//       currency: 'USD',
//     },
//     headers: {
//       'X-RapidAPI-Key': '13f9c247d6msh3922c0e5dad4425p1829c5jsnadc41a352f80',
//       'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
//     },
//   };
// };
