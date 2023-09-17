export const getUsers = async () => {
    try {
      const response = await fetch('data.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };