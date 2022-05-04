import React , {useState, useRef} from 'react'
import { Link , useHistory} from 'react-router-dom'
import { auth } from '../firebase'
import firebase from 'firebase'
import ImageLight from '../assets/img/create-account-office.jpeg'
import ImageDark from '../assets/img/create-account-office-dark.jpeg'
import { Input, Label, Button } from '@windmill/react-ui'
import { v4 as uuid} from "uuid";

function UserSignup() {
//for redirect
  let history = useHistory();

// For auth
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

//Posting user data to db
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [phonenumber, setPhonenumber] = useState('');

const redirect = () => {
   // AFTER POST USER TO DB
  const userId = uuid();
  const userRef = firebase.database().ref("Users");

  const user = {
    userId,
    email,
    phonenumber ,
    password,
    status: false
  };
  userRef.push(user);

  history.push('/loanapplication')
}

const errMessage = () => {
  alert("Something went wrong.Please try again.")
}

// Sign up function  
  const signUp = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    .then(redirect)
    .catch(errMessage)

  }


  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Money Lender - Signup
              </h1>
              <Label>
                <span>Email</span>
                <Input ref={emailRef} onChange={(e) => setEmail(e.target.value)} className="mt-1" type="email" placeholder="john@doe.com" />
              </Label>
              <Label className="mt-4">
                <span>Phone Number</span>
                <Input onChange={(e) => setPhonenumber(e.target.value)} className="mt-1" type="number" placeholder="0786456784" />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input ref={passwordRef} onChange={(e) => setPassword(e.target.value)}className="mt-1" placeholder="***************" type="password" />
              </Label>

              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  I agree to the <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Button onClick = {signUp}  block className="mt-4">
                Create account
              </Button>

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/lendersignin"
                >
                  Already have an money lender account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default UserSignup
