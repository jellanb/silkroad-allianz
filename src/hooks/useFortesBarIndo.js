import { useState } from 'react';
import { getUserLastUniqueKill, getQuantityUsersOnline } from '../helpers/fetchUsers';


export default function UseFortesBarIndo() {
    const [userLastKill, setUserLastKill] = useState({});
    const [usersOnlineCount, setUsersOnlineCount ] = useState({});

    const getUserLastKill = async () => {
        const { CharName16 } = await getUserLastUniqueKill();
        setUserLastKill(CharName16);
    }

    const loadUsersOnline = async () => {
        const { usersOnline } = await getQuantityUsersOnline();
        setUsersOnlineCount(usersOnline + 30);
    }

    return {
        getUserLastKill,
        userLastKill,
        loadUsersOnline,
        usersOnlineCount
    }
}
