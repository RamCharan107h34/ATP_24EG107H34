
function User(props){
    let {user} = props
    return (
        <div className="shadow-2xl rounded-2xl shadow-gray-500 text-center my-7">
            <h1 className="text-blue-300 mb-2">{user.name}</h1>
            <img src={user.image} alt="" className="m-auto mb-2" />
            <p className="mb-5">{user.email}</p>
        </div>
    )
}

export default User