import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadUser = useLoaderData()
    // eslint-disable-next-line no-unused-vars
    const [users,setUsers]=useState(loadUser)
    const handleDelete = id =>{
        fetch(`http://localhost:5000/user/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.deletedCount > 0){
            console.log('delete confirmed')
            const remaining = users.filter(user=>user._id!==id)
            setUsers(remaining)
           }
        })
    }
    return (
        <div>
            <h2>User:{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>CreateAt</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user=><tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td><button onClick={()=>handleDelete(users._id)} className="btn">X</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;