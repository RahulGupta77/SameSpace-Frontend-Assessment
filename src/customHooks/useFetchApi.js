function useFetchApi(url, setData) {
  async function makeApiCall() {
    try {
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Network call Issue!"); 
      }
      const data = await response.json(); 
      setData(data); 
    } catch (error) {
      console.log(error.message);
    }
  }

  makeApiCall(); 
}

export default useFetchApi;
