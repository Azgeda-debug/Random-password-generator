const input = document.querySelector('.password-input');
const button = document.querySelector('.password-generate');
const passwordStrength = document.querySelector('.password-strenght-up');
const passwordStrenghtDisplay = document.querySelector('.password-strenght');
const signsDispaly = document.querySelector('.signs');
const passwordInput = document.querySelector('.password-input');
const passwordInfo = document.querySelector('.password-info');

let result = '';
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!','@','#','$','%','^','&','*','(',')'];

const range = document.querySelector('.how-many-sings');
range.addEventListener('input', (e) =>
{
    showPassword();
})

// Generate password
const generatePassword = () =>
{
    const howManySigns = parseInt(range.value)
    signsDispaly.innerHTML = 'Password length: ' + howManySigns;
    for(let i = 0; i <howManySigns; i++)
    {
        let randomNumber = Math.floor(Math.random() * 10);
        let randomNumberHelp = Math.floor(Math.random() * 36);
        let randomLetter = letters[randomNumberHelp];

        let helpNumber = Math.floor(Math.random() * 2 + 1);

        if(helpNumber %2 === 0)
        {
            result += randomNumber;
        }
        else if(helpNumber %2 !== 0)
        {
            if(randomNumber %2 === 0)
            {
                result += randomLetter.toUpperCase();
            }
            else
            {
                result += randomLetter.toLowerCase();
            }
        }
    }
    
    if(result.length <= 2)
    {
        passwordStrength.style.width = '5%';
        passwordStrength.style.background = 'greenyellow';
        passwordInput.style.color = 'red';
        passwordStrenghtDisplay.innerHTML = 'Your password is very weak';
    }
    else if(result.length <= 4 && result.length > 2)
    {
        passwordStrength.style.width = '10%';
        passwordStrength.style.background = 'lightgreen';
        passwordInput.style.color = 'red';
        passwordStrenghtDisplay.innerHTML = 'Your password is very weak';
    }
    else if(result.length <= 6 && result.length > 4)
    {
        passwordStrength.style.width = '15%';
        passwordStrength.style.background = 'lightgreen';
        passwordInput.style.color = '#bd7e08';
        passwordStrenghtDisplay.innerHTML = 'Your password is weak';
    }
    else if(result.length <= 8 && result.length > 6)
    {
        passwordStrength.style.width = '20%';
        passwordStrength.style.background = 'lightgreen';
        passwordInput.style.color = '#bd7e08';
        passwordStrenghtDisplay.innerHTML = 'Your password is weak';
    }
    else if(result.length === 8)
    {
        passwordStrength.style.width = '25%';
        passwordStrength.style.background = 'green';
        passwordInput.style.color = '#1fbe1f';
        passwordStrenghtDisplay.innerHTML = 'Your password is good';
    }
    else if(result.length > 8 && result.length < 10)
    {
        passwordStrength.style.width = '30%';
        passwordStrength.style.background = 'green';
        passwordInput.style.color = '#1fbe1f';
        passwordStrenghtDisplay.innerHTML = 'Your password is strong';
    }
    else if(result.length >= 10 && result.length < 12)
    {
        passwordStrength.style.width = '35%';
        passwordStrength.style.background = 'darkgreen';
        passwordInput.style.color = 'green';
        passwordStrenghtDisplay.innerHTML = 'Your password is strong';
    }
    else if(result.length >= 12)
    {
        passwordStrength.style.width = '40%';
        passwordStrength.style.background = 'darkgreen';
        passwordInput.style.color = 'green';
        passwordStrenghtDisplay.innerHTML = 'Your password is very strong';
    }

}

// Show Password on screen
const showPassword = () =>
{
    if(input !== '')
    {
        result = '';
        input.innerHTML = '';
        generatePassword();
        input.innerHTML = result;
    }
    else
    {
        input.innerHTML = result;
    }
}

button.addEventListener('click', showPassword);

passwordInfo.addEventListener('mouseover', (e) =>
{
    const info = e.target.dataset.info;
    const newSpan = document.createElement('span');
    newSpan.innerHTML = info;
    newSpan.className = 'span-info';

    document.body.appendChild(newSpan);
});

passwordInfo.addEventListener('mouseleave', () =>
{
    const infoSpan = document.querySelector('.span-info');
    infoSpan.remove();
});