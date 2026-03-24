
function Navbar(){
    return(
        <div className="bg-gray-200 p-5 flex flex-row justify-between">
            <h1>LOGO</h1>
            <ul className="flex flex-row gap-8">
                <li>HOME</li>
                <li>Signup</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Navbar