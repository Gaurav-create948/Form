import React, { useState } from 'react'
import UserDetails from './Component/UserDetails/userDetail'
import FormContext from './Component/Global/context'
import { useContext } from 'react'

function App() {
  const [userDetails, setUserDetails] = useState({
    FirstName : String,
    LastName : String,
    Email : String,
    Phone : Number
  })

  console.log(userDetails);
  return (
    <div className="App">
      <FormContext.Provider value={{userDetails, setUserDetails}}>
        <UserDetails />
      </FormContext.Provider>
    </div>
  )
}

export default App;