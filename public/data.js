function getData() {
    fetch('https://invitation-tiara-tri.vercel.app/api/list')
    .then((response) => response.json())
        .then((json) => console.log(json));
}

getData();
