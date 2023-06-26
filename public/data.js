function getData() {
    fetch('http://localhost:3000/api/list')
    .then((response) => response.json())
        .then((json) => console.log(json));
}

getData();
