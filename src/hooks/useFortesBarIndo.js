import { useState } from 'react';
import { getUserLastUniqueKill } from '../helpers/fetchUsers';


export default function UseFortesBarIndo() {
    const [userLastKill, setUserLastKill] = useState({});

    const getUserLastKill = async () => {
        const { CharName16 } = await getUserLastUniqueKill()
        setUserLastKill(CharName16)
    }

    return {
        getUserLastKill,
        userLastKill
    }
}
