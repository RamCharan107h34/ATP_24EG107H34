import {useForm} from 'react-hook-form'
import { useState } from 'react'

function UserForm(){
    const {
        register, // to rigister 
        handleSubmit, // to handle submited forms
        formState:{errors} // to handle validation
    } = useForm()

    const [users,setUsers] = useState([])

    const onsubmitform = (obj)=>{
        console.log(obj)
        setUsers([...users, obj]);
    }
    return (
        <div className='mt-10'>
            <h1 className='text-4xl text-center'>User form</h1>
            {/* form */}
            <form className='max-w-md mx-auto my-3' onSubmit={handleSubmit(onsubmitform)}>
                <div className='mb-3'>
                    <label htmlFor="username">User Name</label>
                    <input type="text" 
                    {...register("username",
                        {
                            required: "Username required",
                            validate: (v)=>v.trim().length !== 0 || "White Space is not valid"
                        })} 
                    id='username' 
                    className='border w-full p-2' />
                    {/* username validation error message */}
                    {errors.username?.type === "required" && <p className='text-red-500'>{errors.username.message}</p>}
                    {errors.username?.type === "validate" && <p className='text-red-500'>{errors.username.message}</p>}
                    {/* {errors.username?.type === "minLength" && <p className='text-red-500'>{errors.username.message}</p>} */}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email")} id='email' className='border w-full p-2' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="dateOfBirth">Email</label>
                    <input type="date" {...register("dateOfBirth")} id='dateOfBirth' className='border w-full p-2' />
                </div>
                <button type="submit" className=' bg-pink-700 block mx-auto p-2'>Add User</button>
            </form>
            {/* table */}
            <div className='max-w-3xl mx-auto mt-6'>
                <table className='w-full border bg-white'>
                    <thead>
                        <tr>
                            <th className='border p-2'>Username</th>
                            <th className='border p-2'>Email</th>
                            <th className='border p-2'>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td className='border p-2'>{user.username}</td>
                                    <td className='border p-2'>{user.email}</td>
                                    <td className='border p-2'>{user.dateOfBirth}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserForm;