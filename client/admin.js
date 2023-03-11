async function postingwhatever () {
    const selectdaform = document.getElementById('forms');

    selectdaform.addEventListener('submit', async function (event) {
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
    selectdaform.reset();
});
};
document.addEventListener('DOMContentLoaded', postingwhatever);
