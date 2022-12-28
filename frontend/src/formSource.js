export const postInputs =[
    {
        id:'description',
        label:'Description',
        type:'text',
        placeholder:'Write your Post',
    },
    {
        id:'tags',
        label:'Tags',
        type:'text',
        placeholder:'Type',
    },
    {
        id:'Lag',
        label:'Tags',
        type:'text',
        placeholder:'Type',
    },
]
export const userInputs = [
    {
        id:'Email',
        label:'Email',
        type: 'mail',
        placeholder: 'Email',
    },
    {
        id:'Password',
        label:'Password',
        type: 'password',
        placeholder: 'Password',
    },
    {
        id:'PasswordConfirmation',
        label:'Password Confirmation',
        type: 'password',
        placeholder: 'Confirm password',
    },
]

export const loginform = [
    {
        name: 'Email',
        id:'txtEmail',
        type: 'Email',
        rules: [
            {
                required: true,
                message: "Please input your Email!"
            },
        ],
        placeholder: 'Email'

    },
    {
        name: 'Password',
        id:'txtPassword',
        type: 'Password',
        rules: [
            {
                required: true,
                message: "Please input your Password!"
            },
        ],
        placeholder: 'Password'

    },
]