/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  hashmap = {}
  answer = []
  for(let transaction of transactions){
    let {category, price} = transaction
    if(category in hashmap){
      hashmap[category] += price;
    }
    else{
      hashmap[category] = price;
    }
  }

  for(let unique_category in hashmap){
    answer.push({
      category: unique_category,
      totalSpent: hashmap[unique_category]
    })
  }

  return answer;
}


module.exports = calculateTotalSpentByCategory;
