const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://jservice.io/api/random', false);
xhr.send();

console.log(xhr.response);
