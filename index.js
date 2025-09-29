const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];



// #1 // 

/**
 * I - function getNumberEntries, takes an object
 * O - return an array of subarracys
 * C -
 * E -
 */
function getNumberEntries(object){
  let result = [];
  
  for (let key in object) {
    if (typeof object[key] === "number") {
      result.push([key, object[key]]);
    }
  }
  
  return result;
}



// #2 // 

/**
 * I - addKeyValuePairs
 * O -
 * C -
 * E -
 */
const addKeyValuePairs = (object, additions) => {
  for (let i = 0; i < additions.length; i++) {
    let pair = additions[i];
    let key = pair[0];
    let value = pair[1];
    object[key] = value;
  }
  return object;
};


const filterByPrice = (array, price) => {
  return array.filter(function(purchase) {
    return purchase.price > price;
  });
};


const mapPurchases = (array) => {
  return array
    .filter(purchase => purchase.reviews && purchase.reviews.length > 0) // keep only purchases with reviews
    .map(purchase => {
      const title = purchase.product.toUpperCase();
      const mostRecentReview = purchase.reviews[purchase.reviews.length - 1].text;
      return `${title} - Review: ${mostRecentReview}`;
    });
};



// #5 //

/**
 * I -
 * O -
 * C -
 * E -
 */

const accumulateString = (array) => {
  return array.reduce((acc, purchase) => {
    if (!purchase.product) return acc; // skip if product is missing
    
    const words = purchase.product.split(' '); // split product description into words
    const index = purchase.quantity - 1; 
    
    if (index >= 0 && index < words.length) {
      acc += words[index];
    }
    
    return acc;
  }, ''); // empty string
};


// #6 //

/**
 * I -
 * O -
 * C -
 * E -
 */

const findProduct = (array, product, output=[]) => {
   // Base case
   if (array.length === 0) {
    return [null, null];
  }

  // recursion
  const current = array[0];
  if (current.product === product) {
    return [current.product, current.category];
  }

 
  return findProduct(array.slice(1), product);
};



// #7 //

/**
 * I - filterByReviewLength takes an array (of purhase objects)
 * O - return an new array with only purchases that have an rewvie length property greater than 35
 * C -use .filter
 * E -
 */

const filterByReviewLength = (array) => {
  return array.filter(purchase => 
    typeof purchase.review === "string" && purchase.review.length > 35
  );
};







