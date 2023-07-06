import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/transactions/TransactionList";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { ExpenseChart } from "./components/ExpenseChart";
// import firebase from 'firebase/compat/app';
// //import { useAuthState } from 'react-firebase-hooks/auth';
// import 'firebase/compat/auth';
import { app } from "./firebase";
import { getAuth, GoogleAuthProvider,onAuthStateChanged, signInWithPopup} from "firebase/auth";
import React, { useEffect, useState } from "react";

import "./App.css";

const auth = getAuth(app);
//const googleprovider = new firebase.auth.GoogleAuthProvider();
function App() {

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    
    <div className="bg-neutral-950 text-white alignItems-'center' flex justify-center items-center">
        <div className="w-3/5 flex justify-center items-center">
          <div className="bg-neutral-800 p-10 rounded-md w-full">
    <header>
      <SignOut />
    </header>

    <section>
        {authUser ? <Tracker /> : <SignIn />}
      </section>
      </div>
      </div>
      </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider(auth);
    signInWithPopup(auth, provider);
  }

  return (
    <>
    <div className='loginPage'>
<h1 className='tracker'>To track your Savings 💵<br/> Sign in</h1>
<br/><br/>
<button className="bg-blue-700 w-full py-4 text-white hover:bg-white hover:text-indigo-500" onClick={signInWithGoogle}>Sign in with Google</button>
<br/><br/></div>
    </> 
  )

}

function SignOut() {
  return auth.currentUser && (
    <div >
    <button class="float-right bg-white hover:bg-blue-500 text-indigo-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}



function Tracker(){
  return(
    <GlobalProvider>
      
      <Header />
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className="flex-1 flex flex-col">
                <ExpenseChart />
                <TransactionList />
              </div>
              </div>
            
    </GlobalProvider>
  )
}
export default App;
