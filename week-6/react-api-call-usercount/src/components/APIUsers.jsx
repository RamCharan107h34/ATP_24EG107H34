

function APIUsers(props){
    
    const users = props.userList
    

    return(
        <div className="text-center p-10">
            
            <h1 className="text-2xl text-blue-600">user List</h1>

            <div className="grid grid-cols-3 gap-3">
                {
                    users.map((user)=>(
                        <div className=" shadow-2xl m-5 border rounded-2xl" key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <button onClick={props.onAdd} className=" bg-blue-600 px-5 py-2 my-3">Add</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default APIUsers;