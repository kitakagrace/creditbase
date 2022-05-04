import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ImageLight from '../assets/img/loanapplication.jpg'
import ImageDark from '../assets/img/loanapplication.jpg'
import { Input, Label, Button } from '@windmill/react-ui'
import firebase from '../firebase'
import { v4 as uuid} from "uuid";

function LoanApplication() {

  const [imageUrl, setImageUrl] = useState([]);

  const createTodo = async (e) => {
    const id = uuid();
    const storageRef = firebase.storage().ref("images").child(id);
    const imagesRef = firebase.database().ref('images').child('daily').child(id);
    await storageRef.put(imageUrl);
  
    storageRef.getDownloadURL().then((url) =>{
      //Pushing image url to database
      imagesRef.set(url);
      setImageUrl(url);
    });

  };

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
                Apply for a loan today
              </h1>
              <Label>
                <span>NIN</span>
                <Input   className="mt-1" type="text" placeholder="CM010000H00KK" />
              </Label>
              <Label className="mt-4">
                <span>Amount</span>
                <Input  className="mt-1" type="number" placeholder="1,500,000" />
              </Label>
              <Label className="mt-4">
                <span>Bank Statement</span>
                <Input onChange={(e) => setImageUrl(e.target.files[0])} className="mt-1" type="file"  />
              </Label>
              

              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  I agree to the <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Button onClick = {createTodo} block className="mt-4" type="submit"> 
                Apply for Loan
              </Button>

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Need Help ?
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default LoanApplication
