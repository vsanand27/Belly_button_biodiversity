const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json().then() method ensures that the data is received before executing the arrow function

d3.json(url).then(receivedData => console.log(receivedData));

// Retrives the first element

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0])); 

    // retrieve full name

    d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

    d3.json(url).then(spaceXResults =>
        console.log(spaceXResults[0].location.latitude));