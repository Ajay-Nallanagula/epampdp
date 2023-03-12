//NonCurry function
const addNumbers = (num1, num2, num3) => {
    return num1 + num2 + num3;
};
const addThreeNumbers = (num1) => {
    return (num2) => {
        return (num3) => {
            return num1 + num2 + num3;
        };
    };
};
