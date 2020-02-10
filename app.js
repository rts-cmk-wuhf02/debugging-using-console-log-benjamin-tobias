// console.log working

async function getPersonData () {
    const response = await fetch('https://swapi.co/api/people/1/');
    const result = await response.json();
    return result;
};

document.addEventListener('DOMContentLoaded', async() => {
    const result = await getPersonData();
    console.log(result)
});


// console.log broken

async () => {
    const response = await fetch('https://swapi.co/api/people/3/');
    const result = await response.json();
    console.log(result)
}