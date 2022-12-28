import * as AiIcons from 'react-icons/ai'

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
        label:'Email',
        name: 'Email',
        id:'txtEmail',
        type: 'Email',
        placeholder: 'Email',
        icon:<AiIcons.AiOutlineMail/>

    },
    {
        label:'Password',
        name: 'Password',
        id:'txtPassword',
        type: 'Password',
        placeholder: 'Password',
        icon:<AiIcons.AiFillUnlock/>
    },
]