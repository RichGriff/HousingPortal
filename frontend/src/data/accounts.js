export const GetAccounts = async (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const response = await fetch("http://localhost:5000/api/accounts/me", requestOptions)
    const result = await response.json()
    return result
}