const apiKey = '1fea785e847768c2d33240adcac6dca7';
const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=${apiKey}`;

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then((res) => {
            fetch(endpoint)
                .then(nestedRes => nestedRes.json())
                .then(nestedRes => {
                    
                    document.getElementById('city').innerHTML = nestedRes.name;
                    document.getElementById('temperature').innerHTML = nestedRes.main.temp;
                    document.getElementById('condition').innerHTML = nestedRes.weather[0].main;
                    document.getElementById('results').innerHTML = res.message;
                });
        })
}

export { handleSubmit }
