// Add your code here
const submitData = (name, email) => {
    const formData = {
        name,
        email,
    };

    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(formData),
    };

    return fetch('http://localhost:3000/users', configurationObject)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (object) {
            document.body.innerHTML = object['id'];
        })
        .catch(function (error) {
            alert('UH OH SOMETHING WENT WRONG');
            document.body.innerHTML = error.message;
        });
};

submitData('krithik', 'krithiksingh@gmail.com');
