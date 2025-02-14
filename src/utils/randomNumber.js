export const randomNumber = (max, min) => {
    if (min === undefined) {
        return Math.floor(Math.random() * max);
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};