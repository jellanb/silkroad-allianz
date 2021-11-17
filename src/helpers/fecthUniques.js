
export const UseFetchGetUniquesKills = async () => {
    const url = `http://localhost:3002/Unique/ListUniqueKill`;
    return (await fetch(url, {mode:'cors', method:'GET'})).json();
}
