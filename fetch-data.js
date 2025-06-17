// Step 1: Define async function
async function fetchUserData() {
    // Step 2: Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    // Step 3: Select the data container
    const dataContainer = document.getElementById('api-data');
  
    try {
      // Step 4: Fetch the data
      const response = await fetch(apiUrl);
      const users = await response.json();
  
      // Step 5: Clear the loading message
      dataContainer.innerHTML = '';
  
      // Step 6: Create a <ul> for the user list
      const userList = document.createElement('ul');
  
      // Step 7: Loop through users and create list items
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
  
      // Step 8: Append the list to the container
      dataContainer.appendChild(userList);
  
    } catch (error) {
      // Step 9: Error handling
      dataContainer.innerHTML = '';
      dataContainer.textContent = 'Failed to load user data.';
      console.error('Fetch error:', error);
    }
  }
  
  // Step 10: Run fetchUserData when DOM is loaded
  document.addEventListener('DOMContentLoaded', fetchUserData);
  