import { useState } from 'react';
import { getUserLastUniqueKill, getQuantityUsersOnline } from '../helpers/fetchUsers';
import { UseGetFortressInfo } from '../helpers/fetchFortressInfo';


export default function UseFortesBarIndo() {
    const [userLastKill, setUserLastKill] = useState({});
    const [usersOnlineCount, setUsersOnlineCount ] = useState({});
    const [fortressInfo, setFortressInfo] = useState([{}])

    const getUserLastKill = async (setOpenDialog) => {
        try {
        const { CharName16 } = await getUserLastUniqueKill();
        setUserLastKill(CharName16);
        } catch (failure) {
            setOpenDialog(true);
        }
    }

    const loadUsersOnline = async (setOpenDialog) => {
        try {
        const { usersOnline } = await getQuantityUsersOnline();
        setUsersOnlineCount(usersOnline + 30);
        } catch (failure) {
            setOpenDialog(true);
        }
    }

    const getFortressInfo = async (setLoad, setOpenDialog) => {
        try {
            const getFortressInfo = await UseGetFortressInfo();
            setFortressInfo(getFortressInfo);
            setLoad(false);
        } catch (failure) {
            setOpenDialog(true);
        }

    }

    return {
        getUserLastKill,
        userLastKill,
        loadUsersOnline,
        usersOnlineCount,
        getFortressInfo,
        fortressInfo
    }
}
