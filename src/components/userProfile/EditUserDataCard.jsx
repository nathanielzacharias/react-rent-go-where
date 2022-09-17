import React from 'react'

import DeleteUserComponent from './DeleteUserComponent'

function EditUserDataCard(props) {

  // const { _id, name, email, budget, location, ethinicity, nationality, gender, profilePic} = props.data

  // console.log(email)
  // console.log(gender)
  
  return (
    <div>
    <DeleteUserComponent userObjId={props.userObjId}/>  
    </div>
  )
}

export default EditUserDataCard