export const fetchData = () => {
    const URL = 'http://localhost:3000';
    const data = fetch(`${URL}/dashboard`)
        .then(res => res.json())
        .then(json => {
            return json
        })
    return data;
}