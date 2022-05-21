async function login(event) {
    event.preventDefault();

    const email = document.querySelector('#emailLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();

    if (!email || !password) {
        alert('Please enter your email and password')
    } else {
        const loginCheck = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (loginCheck.ok) {
            document.location.replace('/dashboard')
        } else {
            alert("Incorrect Login Credentials Entered")
        }
    }
}

async function signup(event) {
    event.preventDefault();

    const email = document.querySelector('#emailSignup').value.trim();
    const user = document.querySelector('#usernameSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();

    if (!email || !user || !password) {
        alert("Please enter all required fields to sign up")
    } else {
        const signup = await fetch("/api/users", {
            method: 'post',
            body: JSON.stringify({
                email, user, password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (signup.ok) {
            document.location.replace("/dashboard")
        } else {
            alert('Signup Failed. Please try again')
        }
    }

}

document.querySelector('.login').addEventListener('submit', login);
document.querySelector('.signup').addEventListener('submit', signup);