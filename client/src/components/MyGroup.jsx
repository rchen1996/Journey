

export default function MyGroup(props) {
 const {users} = props
const handleRemove = (event) => {
  event.preventDefault();

}
  
  return (
  <div>
    {users.map(user=> {
      return <div key={user.id}>{`${user.first_name} ${user.last_name}`}
      {(user.id === props.creator) && ` (host)`}
      <button onClick={handleRemove}>Remove</button>
      </div>
    })}
  </div>
  )
}