import md5 from 'js-md5'


export const UseFetchUsersByName = async (name) => {
    const url = `http://survivalsro.com:8080/survivalsro/api/Users/GetUserByName?username=${name}`;
    return (await fetch(url, {mode: 'cors', method:'GET'})).json();
}

export const UserFetchEmailByEmail = async (email) => {
    const url = `http://survivalsro.com:8080/survivalsro/api/Users/EmailByEmail?email=${email}`;
    return (await fetch(url, {mode: 'cors' , method:'GET'})).json();
}

export const UseFetchAddUser = async (user) => {
    const url = `http://survivalsro.com:8080/survivalsro/api/Users/SaveUser?firstName=${user.username}&lastName=${user.lastName}&email=${user.email}&password=${md5.hex(user.pass)}`;
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}
