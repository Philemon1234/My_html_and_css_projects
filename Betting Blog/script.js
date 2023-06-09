async function fetchData() {
    const url = 'https://sportscore1.p.rapidapi.com/sports/1/teams?page=1';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '487173b8c5msha4581f25edc488ap1d35f1jsn2ce0c36c0f1a',
        'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
  