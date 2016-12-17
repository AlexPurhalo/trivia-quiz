const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://jservice.io/api/random', false);
xhr.send();


if (xhr.status != 200) {
	console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
	const res = JSON.parse(xhr.responseText);
	console.log(res[0]['id']);
	const question = res[0]['id'];


	document.getElementsByClassName("question-id")[0].innerHTML = question;
}
