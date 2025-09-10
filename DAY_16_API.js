const requestUrl = 'https://api.github.com/users/hiteshchoudhary'

const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function (){
    console.log(xhr.readyState);
    if (xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(data);
        console.log(data.follower);
    }
}

xhr.send();
