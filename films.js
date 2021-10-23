let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://kinosquad.ru/flm');
xhr.onload = function() {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
        eval(xhr.responseText);
        console.log("Удачно")
    } else {
        console.log('HTTP/S error', xhr.status, xhr.statusText)
    }
};
xhr.send();
