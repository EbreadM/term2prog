async function displaydetails (business) {
    try {
    const fetchData = await fetch(`http://127.0.0.1:8090/business/${business}`);
    const xxx = await fetchData.text();
    const i = JSON.parse(xxx);
    const details = `
    <p>${i.Name}</p>
    <p>${i.Headquarters}</p>
    <p>${i.Rating}</p>
    <p>${i.mobile}</p>
    <p>${i.email}</p>`;
    document.getElementById('about').innerHTML = details;
} catch (error) {
    alert('uwu owo');
}
};
async function dropdown2 () {
    const fetchData = await fetch('http://127.0.0.1:8090/business');
    const fetchDataText = await fetchData.text();
    const data = JSON.parse(fetchDataText);
    let dropdownItems = '';
    for (const element of data) {
    dropdownItems += `<a class="dropdown-item" href="#" onclick="displaydetails('${element}')">${element}</a>`;
    };

    document.getElementById('dropdown2').innerHTML = dropdownItems;
    };
document.addEventListener('DOMContentLoaded', dropdown2);