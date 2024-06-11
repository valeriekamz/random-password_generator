document.addEventListener("DOMContentLoaded", () => {
    const passwordBox = document.getElementById("password");
    const length = 16;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/";

    const allChars = upperCase + lowerCase + numbers + symbols;

    document.getElementById('generate-btn').addEventListener('click', createPassword);
    document.getElementById('copy-btn').addEventListener('click', copyPassword);

    function createPassword() {
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        while (length > password.length) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        passwordBox.value = password;
    }

    function copyPassword() {
        navigator.clipboard.writeText(passwordBox.value)
            .then(() => {
                console.log('Password copied to clipboard');
            })
            .catch(err => {
                console.error('Failed to copy password: ', err);
            });
    }
});
