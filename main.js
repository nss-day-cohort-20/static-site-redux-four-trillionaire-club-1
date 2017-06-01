//big array of all products and their properties
var winionArray =
[
	{
		"id" : "",
		"name": "Sycophant",
		"description": "",
		"price" : "$10,000",
		"url" : "./images/",
	},
	{
		"id" : "",
		"name": "Flunky",
		"description": "",
		"price" : "$8,000",
		"url" : "",
	},
	{
		"id" : "",
		"name": "Lackey",
		"description": "",
		"price" : "$7,500",
		"url" : "./images/",
	},
	{
		"id" : "",
		"name": "Toady",
		"description": "",
		"price" : "$6,900",
		"url" : "./images/",
	},
	{
		"id" : "",
		"name": "Bootlicker",
		"description": "",
		"price" : "$5,999",
		"url" : "./images/",
	},
	{
		"id" : "",
		"name": "Doormat",
		"description": "",
		"price" : "$5,259",
		"url" : "./images/",
	},
	{
		"id" : "",
		"name": "Puppet",
		"description": "",
		"price" : "$2,995",
		"url" : "./images/",
	},
	{
		"id" : "",
		"name": "Stooge",
		"description": "",
		"price" : "$999",
		"url" : "./images/",
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
					<img href="${winionArray[i].url}">
				</div>
				<div class="caption">
					<h2> Winion Type: ${winionArray[i].name} </h2>
					<h3 class="price">Price: ${winionArray[i].price} </h3>
					<p>${winionArray[i].description}</p>
				</div>
				
			</section><!--end of card-->
	`;

	winionHTML += message;

}

printWinionToDiv(winionHTML);
