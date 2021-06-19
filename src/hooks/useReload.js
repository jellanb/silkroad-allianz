import { UseFetchCreateOrderPayment } from '../helpers/fetchPayment'

export const useReload = () => {
    const makePayment = async (amount) => {
        const result = await UseFetchCreateOrderPayment(amount)
        return result.href
    }

    return { makePayment }
}
