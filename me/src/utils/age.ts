// src/utils/age.ts
const birth = new Date("2011-04-01T23:45:00-03:00");
const calculateAge = () => {
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const birthdayThisYear = new Date(
        now.getFullYear(),
        birth.getMonth(),
        birth.getDate(),
        birth.getHours(),
        birth.getMinutes(),
        birth.getSeconds(),
        birth.getMilliseconds(),
    );

    if (now < birthdayThisYear) age--;
    return String(age);
}

export default calculateAge;
