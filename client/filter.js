// const displayItem = (items) => {
// 	document.getElementById('root').innerHTML = items.map((item)=>
// 	{
// 		var {image, title, price} = item;
// 		return(
// 			`<div class='box'>
// 			<h3>${title}</h3>
// 			<div class='img-box'>
// 			<img class='images' src=${image}></img>
// 			</div>
// 			<div class='bottom'>
// 			<h2>£ ${price}.00</h2>
// 			<button id="butt">Add to cart</button>
// 			</div>
// 			</div>`)
// 	}).join('');
// }
// displayItem(categories);

async function displayItem() { // This is an async function which uses await so it like sends out promises instead of commands i guess, but basically it makes it less bad if it fails i think
const fetchData = await fetch('http://127.0.0.1:8090/items'); // this one fetches the data from the server that we sent out on app.js, you can think of it as just getting the API.
const fetchDataText = await fetchData.text(); // this one im not realy sure what is does, but generally it just converts the fetched data into an actually readable thing
const data = JSON.parse(fetchDataText); // this i think just puts the stuff we just imported into like an array
// Basically the last 3 lines its memorization and all you need to know is that at the end of it you have fetched data from a specific url and now its in an array.
let dropdownItems = '';
for(element of data) { // We iterate through the array of keys
	dropdownItems += `<a class="dropdown-item" href="#" onclick="filters('${element}')">${element}</a>` // We add a new line for each element
};

document.getElementById('dropdown').innerHTML = dropdownItems // We make the inside of the div have the elements we just added to dropdownItems

}

displayItem();

async function filters(item) {
	const fetchData = await fetch(`http://127.0.0.1:8090/items/${item}`);
	const fetchDataText = await fetchData.text();
	const data = JSON.parse(fetchDataText);

	let itemList = '';
	console.log(data);
	for(i of data) {
		itemList += `<img src="${i.image}">`
	};
	console.log(itemList);
	document.getElementById('newdiv').innerHTML = itemList;
}

filters('Tech')