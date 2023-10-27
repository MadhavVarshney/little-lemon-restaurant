const generateRandNum = seed => {
    return (Math.random() * seed) / 10;
}

const generateRandTime = date => {
    const time = [];
    for (let i = 17; i <= 23; i++) {
        if (generateRandNum(date.getDate()) > 1.5) {
            time.push(i + ":00");
            time.push(i + ":30");
        }
    }
    return time;
}

const submitForm = formData => {
    console.log(formData);
    return true;
}

export {
    generateRandTime,
    submitForm
}
