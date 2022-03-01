import { useState } from 'react';
import { getLoadInformation } from '../helpers/fetchUsers';


export default function UseFortesBarIndo() {
    const [userLastKill, setUserLastKill] = useState({});
    const [usersOnlineCount, setUsersOnlineCount] = useState({});
    const [fortressInfo, setFortressInfo] = useState({});

    const loadInformation = async (setOpenDialog) => {
        try {
            const { usersOnline, usernameLastUniqueKill, fortressInfo } = await getLoadInformation();
            const { CharName16 } = usernameLastUniqueKill;
            setUserLastKill(CharName16);
            setUsersOnlineCount(usersOnline);
            setFortressInfo(fortressInfo);
            setOpenDialog(false);
        } catch (failure) {
            setOpenDialog(true);
        }
    }

    return {
        loadInformation,
        userLastKill,
        usersOnlineCount,
        fortressInfo
    }
}
