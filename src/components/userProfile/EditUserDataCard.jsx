import React from 'react'

function EditUserDataCard(props) {

  const { _id, name, email, budget, location, ethinicity, nationality, gender, profilePic} = props.data

  console.log(email)
  console.log(gender)
  
  return (
    <div>EditUserDataCard</div>
  )
}

export default EditUserDataCard