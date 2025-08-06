
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/palak-1505');
    return response.json();
};
