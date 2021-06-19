

export const UseFetchCreateOrderPayment = async (amount) => {
    const url = `http://localhost:3001/survivalsro/api/Payment/createPayment?amount=${amount}`;
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}
