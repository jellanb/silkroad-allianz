import { useState, useContext } from 'react';
import { UserFetchLogin, UseFetchUsersByName } from '../helpers/fetchUsers'
import { UserContext } from '../hooks/UserContext';

export const useSingIn = () => {
    const [user, setUser] = useState({});
    const  { userCtx, setUserCtx }  = useContext(UserContext);

    const handleUsernameOnBlur = async (e) => {
        const value = e.target.value;
        const result = await UseFetchUsersByName(value);
        console.log(result)
        if (!value) {
            setUser({...user, errorIsValid: true, descName: `Username is required!`})
            return
        }
        if (result.isValid) {
            setUser({...user, username: value, errorIsValid: false, descName: ''})
        } else {
            setUser({...user, errorIsValid: true, descName: `Username ${value} not exist!`})
        }
    }

    const handlePasswordOnBlur = (e) =>{
        let value = e.target.value;
        if (value && value.length >= 6)
        {
            setUser({ ...user, password: value,  errorPass: false, descPass: ''});
        }
        else
        {
            setUser({...user, password: value,  errorPass: true, descPass: '6 caracteres minimo'});
        }
    }

    const onLoginClick = async (e) => {
        e.preventDefault();
        const login = await UserFetchLogin(user.username, user.password)
        if (login.isSingIn)
        {
            setUserCtx({ ...userCtx, username: login.userName, silk: login.silk, isSingIn: login.isSingIn, description: login.description, url: '' })
        }
        else
        {
            setUserCtx({ ...userCtx, username: login.userName, silk: login.silk, isSingIn: false, description: login.description, url: 'SingIn' })
        }
    }

    return {
        user,
        onLoginClick,
        handlePasswordOnBlur,
        handleUsernameOnBlur,
        userCtx,
        setUserCtx
    };
}
