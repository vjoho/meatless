function Meats(){
	var x=document.getElementById("meats");
	var x2=document.getElementById("meatsInfo");
	var x3=document.getElementById("meatsDoneInfo");

	var meats = [
	'Buy Organic Chicken (1 pt)', 
	'Eat Organic Chicken (1 pt)', 
	'Eat a Vegetarian Meal (2 pts)', 
	'Eat a Seafood Meal (0.5 pt)',
	'Eat Fish - Avoid Salmon (0.5 pt)', 
	'No Red Meat Week (2.5 pts)',
	'Have a Vegetarian Day (1.5 pts)'
	];

	var meatsInfo = [
	'Chicken is the best meat to pick. Opt for organic, pasture-raised or antibiotic-free. Organic chickens are raised without the use of chemical fertilizers or pesticides in their food, and have never been injected with hormones or antibiotics. The USDA does not allow hormones to be used in raising chickens, but the organic certification means that the producer actually proved that no hormones were administered. ', 
	'Chicken is the best meat to eat. Opt for organic, pasture-raised or antibiotic-free. Organic chickens are raised without the use of chemical fertilizers or pesticides in their food, and have never been injected with hormones or antibiotics. The USDA does not allow hormones to be used in raising chickens, but the organic certification means that the producer actually proved that no hormones were administered. ', 
	'Choose a climate-friendly source of protein for your meal, such as lentil or beans. They\'re a good source of fiber and nutrients.', 
	'Red meats (beef and pork) cause 3 times more carbom emmissions then sea food. But you should avoid farmed salmon and limit consumption of tuna to reduce mercury exposure.', 
	'Avoid farmed salmon. Also limit consumption of tuna to reduce mercury exposure and prevent overfishing.',
	'Cutting out red meats from your diet decreases your risk of heart disease, diabetes, high blood pressure, obesity, and colon cancer, while helping to avoid climate change',
	'If you choose one day of each week to not eat meat, you’re actually cutting back your meat consumption by 15%. That means you’re cutting back your saturated fat consumption, you’re improving your own health, and you’re having all these environmental benefits as well.'
	];

	var meatsDoneInfo = [
	'+.5 Point <br><hr /> Don\'t forget to submit your (m)EatLess footprint once you eat that chicken :)', 
	'+.5 Point <br><hr /> Chicken is the best meat you can pick. Organic is better for you and the environment.', 
	'+1 Points<br><hr /> Keep those Meatless Meals coming :)', 
	'+.5 Point<br><hr /> Have you ever thought of becoming a pescetarian? Could be fun.',
	'+.5 Point<br><hr /> Maybe you\' next meal can be a vegetarian one.',
	'+2.5 Points<br><hr /> You\'re kinda awesome! Why don\'t we try going for a second week?',
	'+3 Points<br><hr /> Keep those Meatless Days coming :)'
	];

	var index = Math.floor(Math.random() * meats.length);
	x.innerHTML=meats[ index ];
	x2.innerHTML=meatsInfo[ index ];
	x3.innerHTML=meatsDoneInfo[ index ];
}

function Dairy(){
	var x=document.getElementById("dairy");
	var x2=document.getElementById("dairyInfo");
	var x3=document.getElementById("dairyDoneInfo");

	var dairy = [
	'Buy Low-fat Cheese (1 pt)', 
	'Eat Low-fat Cheese (1 pt)', 
	'Butterless Day (1 pt)', 
	'Cheeseless Day (1.5 pts)'
	];

	var dairyInfo = [
	'Opt for lower-fat options like part skim mozarella, gouda or cottage cheese. In general, the lower the fat, the lower the greenhouse-gas emissions. Also, because toxins build up in fat, lower-fat cheeses can be better for your health.', 
	'Opt for lower-fat options like part skim mozarella, gouda or cottage cheese. In general, the lower the fat, the lower the greenhouse-gas emissions. Also, because toxins build up in fat, lower-fat cheeses can be better for your health.', 
	'Replace butter with oils for cooking, such as olive oil or canola oil. Its much healthier for you and better for the environment.', 
	'Cheese has a high carbon footprint because it takes a lot of milk to produce a pound of cheese - about 10 pounds of milk per pound of hard cheese. The cows that produce that milk emit large quantities of methane, which has a global-warming impact 25 times higher than carbon. Methane and nitrous oxide are also generated from the cow’s manure.'	];

	var dairyDoneInfo = [
	'+1 Point <br><hr /> How about trying to cut cheese completely?', 
	'+1 Point <br><hr /> Maybe your next step is having a cheeseless day.', 
	'+1 Points <br><hr /> That wasn\'t that hard, was it?', 
	'+1.5 Points <br><hr /> Let\'s try making this an every other day thing.'
	];

	var  index = Math.floor(Math.random() * dairy.length);
	x.innerHTML=dairy[ index ];
	x2.innerHTML=dairyInfo[ index ];
	x3.innerHTML=dairyDoneInfo[ index ];
}

function Produce(){
	var x=document.getElementById("produce");
	var x2=document.getElementById("produceInfo");
	var x3=document.getElementById("produceDoneInfo");

	var produce = [
	'Buy Seasonal Produce (1 pt)', 
	'Eat Seasonal Produce (1 pt)', 
	'Buy Organic Produce (1 pt)', 
	'Eat Organic Produce (1 pt)', 
	'Buy Local (1 pt)'
	];

	var produceInfo = [
	'Vegetables and fruits that are in season are easy to get, have more flavor, and are usually less expensive. Your local farmer’s market is a great source of seasonal produce.', 
	'Vegetables and fruits that are in season are easy to get, have more flavor, and are usually less expensive. Your local farmer’s market is a great source of seasonal produce.', 
	'Most crops are grown using applied fertilizer, pesticides and herbicides. These products are made from nonrenewable petrochemicals that degrade the soil and sometimes contaminate the food we eat. These chemicals causes massive pollution problems in rivers and oceans. Organic food is raised using natural composts and methods that build soil and biodiversity, usually resulting in more delicious, nutrient-dense food.', 
	'Most crops are grown using applied fertilizer, pesticides and herbicides. These products are made from nonrenewable petrochemicals that degrade the soil and sometimes contaminate the food we eat. These chemicals causes massive pollution problems in rivers and oceans. Organic food is raised using natural composts and methods that build soil and biodiversity, usually resulting in more delicious, nutrient-dense food.', 
	'The food you eat travels an average of more than 1,500 miles to reach your plate. Buying locally not only supports the farmers around you but also reduces the polution indirectly caused through consumption.'
	];

	var produceDoneInfo = [
	'+1 Point <br><hr /> Those fruits and veggies will be fresh and tasty.',
	'+1 Point <br><hr /> Hope you enjoyed your seasonal produce.',
	'+1 Point <br><hr /> Glad you chose to go the organic route. Enjoy!',
	'+1 Point <br><hr /> Eating organic is better for you and the environment.',
	'+1 Point <br> '
	];

	var index = Math.floor(Math.random() * produce.length);
	x.innerHTML=produce[ index ];
	x2.innerHTML=produceInfo[ index ];
	x3.innerHTML=produceDoneInfo[ index ];
}

$(document).on("pageshow", function() {
	console.log("Hi there");
	Meats();
	Dairy();
	Produce();
});

// $( '.ui-btn' ).click(function() {
// 	console.log("click is working")
//   $( ".container-popup " ).css( "display","block" );
// });


