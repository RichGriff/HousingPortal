export const UserSignIn = async (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "email": email,
    "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch("http://localhost:5000/api/users/login", requestOptions)
    const result = await response.json()
    return result
}