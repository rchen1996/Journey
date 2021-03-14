import {useState} from 'react'
import FormButton from './FormButton'

export default function MyGroup(props) {
  const { user,removeCollaborator } = props;
  const { users, creator_id, itinerary_id} = props.itinerary
  const [addInput, setAddInput] = useState('')
  
  const handleRemove = (userId) => {
    removeCollaborator(itinerary_id, userId)
  };

  const handleAdd = () => {
  
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
