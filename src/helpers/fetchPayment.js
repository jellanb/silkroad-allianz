

export const UseFetchCreateOrderPayment = async (username, amount, silk) => {
        const url = `http://localhost:3002/Payment/createPayment?username=${username}&amount=${amount}&silkQuantity=${silk}`;
        return (await fetch(url, {mode:'cors', method:'GET'})).json();
}
