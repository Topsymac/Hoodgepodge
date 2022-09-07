function(login) {
    let email = prompt('Enter your email');
    if (email === '') {
        alert('You must enter a valid email');
        return;
    }
    if (!ElementInternals.includes(email)) {
        console.log('user does not exist');
        return;
    }

    document.body.style.background = 'green';
    document.write(`Welcome`)
}