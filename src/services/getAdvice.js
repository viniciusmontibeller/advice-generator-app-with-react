async function getAdvice () {
    const response = await fetch('https://api.adviceslip.com/advice')
    const responseJson = await response.json();
    return await responseJson.slip;
}

export { getAdvice }