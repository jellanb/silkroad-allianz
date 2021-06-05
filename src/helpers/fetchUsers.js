import md5 from 'js-md5'


export const UseFetchUsersByName = async (name) => {
    const url = `http://localhost:3000/UserByName?username=${name}`;
    return (await fetch(url, {mode: 'cors'})).json();
}

export const UserFetchEmailByEmail = async (email) => {
    const url = `http://localhost:3000/EmailByEmail?email=${email}`;
    return (await fetch(url, {mode: 'cors'})).json();
}

export const UseFetchAddUser = async (user) => {
    const url = `http://localhost:3000/addUser?firstName=${user.username}&lastName=${user.lastName}&email=${user.email}&password=${md5.hex(user.pass)}`;
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}
