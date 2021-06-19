

export const UseFetchCreateOrderPayment = async (amount) => {
    const url = `http://localhost:3000/survivalsro/api/Payment/createPayment=${amount}`;
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}
