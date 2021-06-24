import { UseFetchCreateOrderPayment } from '../helpers/fetchPayment'
import {useContext, useState} from 'react'
import { UserContext } from './UserContext'

export const useReload = (history) => {
    const { userCtx } = useContext(UserContext)
    const [load, setLoad] = useState(false)

    const makePayment = async (amount, silk) => {

        if (!userCtx.username) {
            history.push('/singIn')
            return
        }

        const result = await UseFetchCreateOrderPayment(userCtx.username, amount, silk)
        return result.href
    }
    return { makePayment, load, setLoad }
}
