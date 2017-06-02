//big array of all products and their properties
var winionArray =
[
	{
		"id" : "",
		"name": "Sycophant",
		"description": "Our most powerful Winion.",
		"price" : "$10,000",
		"url" : "./images/ironman.jpg",
	},
	{
		"id" : "",
		"name": "Flunky",
		"description": "The sidekicker Winion.",
		"price" : "$8,000",
		"url" : "./images/Captain-minion-despicable-me-2.jpg",
	},
	{
		"id" : "",
		"name": "Lackey",
		"description": "Useful for manning the deathrays.",
		"price" : "$7,500",
		"url" : "./images/KingBob.jpg",
	},
	{
		"id" : "",
		"name": "Toady",
		"description": "Capable of almost any evil task.",
		"price" : "$6,900",
		"url" : "./images/hitminion.png",
	},
	{
		"id" : "",
		"name": "Bootlicker",
		"description": "Effective stress relief for those bright heroic days.",
		"price" : "$5,999",
		"url" : "./images/golfminion.jpg",
	},
	{
		"id" : "",
		"name": "Doormat",
		"description": "Efficient obstacle to prying heroes.",
		"price" : "$5,259",
		"url" : "./images/pirateMinion.jpg",
	},
	{
		"id" : "",
		"name": "Puppet",
		"description": "Economical yet still powerful.",
		"price" : "$2,995",
		"url" : "./images/Pengwinion.png",
	},
	{
		"id" : "",
		"name": "Stooge",
		"description": "Basic swarm-the-hero-en masse Winion.",
		"price" : "$999",
		"url" : "./images/guitarminion.png",
	}
]


function printWinionToDiv (message) {
	var winionDiv = document.getElementById('winionselect');
	winionDiv.innerHTML = message;
}

var winionHTML = '';

for (var i = 0;i < winionArray.length; i++) {
	var message =
	`
		<section id="${winionArray[i].name.toLowerCase()}" class="card">
				<div class="winionpic">
					<img src="${winionArray[i].url}">
				</div>
				<div class="caption">
					<h2> Winion Type: ${winionArray[i].name} </h2>
					<h3 class="price">Price: ${winionArray[i].price} </h3>
					<p>${winionArray[i].description}</p>
					<a href = "products.html#order"><button>Buy Now!</button></a>
				</div>
				
			</section><!--end of card-->
	`;

	winionHTML += message;

}

printWinionToDiv(winionHTML);
