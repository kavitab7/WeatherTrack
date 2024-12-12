const fetchWeather = async (city) => {

    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token);

    if (!token) {
        console.error('No token found');
        return;
    }

    const response = await fetch('/api/weather/get-weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ city }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
    }

    return await response.json();
};

export { fetchWeather };
