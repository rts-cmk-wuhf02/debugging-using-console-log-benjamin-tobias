# Debugging

### console.log working
```js
async function getPersonData () {
    const response = await fetch('https://swapi.co/api/people/1/');
    const result = await response.json();
    return result;
};

document.addEventListener('DOMContentLoaded', async() => {
    const result = await getPersonData();
    console.log(result)
});
```

### console.log broken
```js
async () => {
    const response = await fetch('https://swapi.co/api/people/3/');
    const result = await response.json();
    console.log(result)
}
```

---


### Missing contextual information

> console.log() force you to consciously select which information to be logged prior debugging. And what you display in a first place is not sufficient or even completely irrelevant, because you usually don’t yet have any idea of what’s going on. Every time you launch your app you go a step further, realizing you are still not logging the right information at the right time, wasting hours changing your statements again and again to display new information and hide irrelevant one.

---


### Altered code behavior

> The “standard” way to debug asynchronous code is to console log “1”, “2”, “3”, “4”, etc. i.e. all executed steps before the output you’re expecting, until you get the right order. As a consequence you modify the code and thus the way it runs, which can lead to really hard to track unsteady behaviors. After you finish debugging, you also have to remember to delete all the stray console logs in your code.

---
