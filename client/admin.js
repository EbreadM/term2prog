async function postingwhatever () {
    const selectdaform = document.getElementById('forms');

    selectdaform.addEventListener('submit', async function (event) {
        try {
        event.preventDefault();

        const data = new FormData(selectdaform);
        const dataJSON = JSON.stringify(Object.fromEntries(data));
        await fetch('http://127.0.0.1:8090/items/new',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: dataJSON
    });
} catch (error) {
    alert("grrr")
}
    selectdaform.reset();
});
};
document.addEventListener('DOMContentLoaded', postingwhatever);

async function CRYING () {
    const selectdaform = document.getElementById('forms2');

    selectdaform.addEventListener('submit', async function (event) {
        try {
        event.preventDefault();

        const data = new FormData(selectdaform);
        const dataJSON = JSON.stringify(Object.fromEntries(data));
        await fetch('http://127.0.0.1:8090/business/new',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: dataJSON
    });
} catch (err) {
    alert ("errrrrr")
}
    selectdaform.reset();
});
};
document.addEventListener('DOMContentLoaded', CRYING);
