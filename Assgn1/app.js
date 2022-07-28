async function getData() {
    return await Promise.resolve('Data');
    }
    const data = getData();
    console.log(data);
    console.log(Promise.resolve('Data'));