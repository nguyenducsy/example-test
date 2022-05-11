// bai 2

var url = "http://localhost:3000/users";

function start() {
    getData(renderData);
    handleSubmit();
}
start();

function getData(callback) {
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(callback);
}

function postData(data, callback) {
    axios({
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        })
        .then(res => {
            return res.json();
        })
        .then(callback)
}

function renderData(user) {
    let listUsers = document.querySelector('#users');
    let htmls = user.map(item => {
        return `
            <tr>
                <th scope="row">${item.id}</th>
                <td>${item.fullName}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.contact}</td>
            </tr>
        `;
    });

    listUsers.innerHTML = htmls.join('');
}

function handleSubmit() {
    let btn = document.querySelector('#btnSubmit');
    btn.onclick = function() {
        let fullName = document.querySelector('#fullName').value;
        let email = document.querySelector('#email').value;
        let phone = document.querySelector('#phone').value;
        let contact = document.querySelector('#contact').value;

        let formData = {
            fullName: fullName,
            email: email,
            phone: phone,
            contact: contact
        }
        postData(formData)
    }
}