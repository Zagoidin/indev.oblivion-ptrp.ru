id = 100101

async function fetchUserData() {
    try {
        // 1. Send the HTTP GET request
        const response = await fetch(`http://assets.oblivion-ptrp.ru/quests/${id}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catches network failures or JSON parsing issues
        console.error('Fetch failed:', error);
    }
}
console.log('сиси')
fetchUserData();
