import React, {useEffect, useState} from 'react'
import FormButton from './FormButton'

export default function MyGroup(props) {
  const { user,removeCollaborator, addCollaborator } = props;
  const { users, creator_id, id} = props.itinerary
  const [addInput, setAddInput] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)
  
  const handleRemove = (userId) => {
    removeCollaborator(id, userId)
  };
 

  const handleAdd = () => {
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!validEmailRegex.test(addInput)){
      setErrorMsg('Error: Please enter an email')
      return;
    } 
    addCollaborator(id,addInput).then(result => {
      if(result.error){
        setErrorMsg('Error: Email is not registered')
      } else if(result.success){
         setErrorMsg(null)
      }     
      
    })    
  }

  return (
    <div>
      {(user.id === creator_id) &&
      <>
      <span>{users.length} People</span>
      <span>Add User</span>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
        value={addInput}
        onChange={(event) => setAddInput(event.target.value)}
        placeholder="Enter Email"
        >
        </input>
      <FormButton onClick={handleAdd}>Add to Group
      </FormButton>
      </form> 
      {errorMsg && <div>{errorMsg}</div>}
      </>
      }
      {users.map((member) => {
        return (
          <div key={member.id}>
            {`${member.first_name} ${member.last_name}`}
            {member.id === creator_id ? (
              ` (host)`
            ) : 
              (user.id === creator_id) && 
              
              <button onClick={() => handleRemove(member.id)}> Remove</button>}
            
          </div>
        );
      })}

    </div>
  );
}
