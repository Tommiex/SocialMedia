import * as AiIcons from 'react-icons/ai'
import { FaHome, FaHeart } from "react-icons/fa";
import { MdWallpaper } from "react-icons/md";
import { ImCamera } from "react-icons/im";
import { IoLogoGameControllerB } from "react-icons/io";
import { BiCodeCurly } from "react-icons/bi";


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

export const menu = [
    { name: "Home", Icons: <FaHome /> },
    { name: "Wallpapers", Icons: <MdWallpaper /> },
    { name: "Photography", Icons: <ImCamera /> },
    { name: "Gaming", Icons: <IoLogoGameControllerB /> },
    { name: "Coding", Icons: <BiCodeCurly /> },
    { name: "Other", Icons: <FaHome /> },
  ];
  export const game = [
    {
        placeholder: 'player1',
        id: 'player1',
        number: 0,
    },
    {
        placeholder: 'player2',
        id:"player2",
        number: 1,
    },
  ]