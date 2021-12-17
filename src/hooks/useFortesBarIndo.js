import { useState } from 'react';
import { getUserLastUniqueKill } from '../helpers/fetchUsers';


export default function UseFortesBarIndo() {
    const [userLastKill, setUserLastKill] = useState({});

    const getUserLastKill = async () => {
        const { AccountID } = await getUserLastUniqueKill()
        setUserLastKill(AccountID)
    }

    return {
        getUserLastKill,
        userLastKill
    }
}
