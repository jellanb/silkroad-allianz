import md5 from 'js-md5';
import dotenv from 'dotenv';
dotenv.config();


export const UseFetchUsersByName = async (name) => {
    const url = `${process.env.REACT_APP_API_URL}/users/get-user-by-name?username=${name}`;
    return (await fetch(url, {mode: 'cors', method:'GET'})).json();
}

export const UserFetchEmailByEmail = async (email) => {
    const url = `${process.env.REACT_APP_API_URL}/users/email-by-email?email=${email}`;
    return (await fetch(url, {mode: 'cors' , method:'GET'})).json();
}

export const UseFetchAddUser = async (user) => {
    const url = `${process.env.REACT_APP_API_URL}/users/save-new-user?username=${user.username}&lastname=${user.lastName}&email=${user.email}&password=${md5.hex(user.password)}&secretQuestion=${user.secretQuestion}&secretAnswer=${user.secretAnswer}`;
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}

export const UserFetchLogin = async (username, password) => {
    const url = `${process.env.REACT_APP_API_URL}/users/login?username=${username}&password=${md5.hex(password)}`;
    return (await fetch(url, {mode:'cors', method:'GET'})).json();
}

export const UserFetchSaveAccountChange = async (username, password, email) => {
    const url = `${process.env.REACT_APP_API_URL}/users/edit-account?username=${username}&password=${md5.hex(password)}&email=${email}`
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}

export const getUserLastUniqueKill = async () => {
    const url = `${process.env.REACT_APP_API_URL}/users/get-last-unique-kill`
    return (await fetch(url, {mode:'cors', method:'GET'})).json();
}
export const getQuantityUsersOnline = async () => {
    const url = `${process.env.REACT_APP_API_URL}/users/get-users-online`;
    return (await fetch(url, {mode: 'cors', method: 'GET'})).json();
}

export const addSilkAfterPayment = async (username, silkQuantity) => {
    const url = `${process.env.REACT_APP_API_URL}/users/user-add-silk?username=${username}&silkQuantity=${silkQuantity}`
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}
