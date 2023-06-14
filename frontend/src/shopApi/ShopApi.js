export const allProducts = {
  method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
  params: {
    country: 'us',
    lang: 'en',
    currentpage: '5',
    pagesize: '30',
    // categories: 'men_all',
    // concepts: 'H&M MAN',
  },
  headers: {
    'X-RapidAPI-Key': '13f9c247d6msh3922c0e5dad4425p1829c5jsnadc41a352f80',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  },
};
export const oneProducts = {
  method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/search-by-barcode',
  params: {
    gtinCodes: '00725272730706',
    lang: 'en',
    country: 'us',
  },
  headers: {
    'X-RapidAPI-Key': '13f9c247d6msh3922c0e5dad4425p1829c5jsnadc41a352f80',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  },
};
