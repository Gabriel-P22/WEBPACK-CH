let password;
let email;

const correctPassword = 123;
const correctEmail = "email@email.com";

export const Oauth = async (email, password) => {
    if (email !== correctEmail) {
        return { status: 400, response: 'Email incorrect' }
    }

    if (password !== correctPassword) {
        return { status: 400, response: 'Password incorrect' }
    }

    return { status: 200, response: 'JWT' }
}