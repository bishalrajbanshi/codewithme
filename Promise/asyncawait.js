async function fetchUserData(userId) {
    console.log('Fetching user data...'); // This executes first
  
    try {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      console.log('Response received'); // This executes after the fetch completes
  
      if (!response.ok) {
        throw new Error('User not found');
      }
  
      const userData = await response.json();
      console.log('User Data:', userData); // This executes after parsing the JSON
    } catch (error) {
      console.error('Error fetching user data:', error); // This executes if there's an error
    }
  
    console.log('Fetch completed'); // This executes after the try-catch block
  }
  fetchUserData(2)