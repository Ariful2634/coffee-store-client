/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeDetails = ({ coffee, coffees,setCoffees }) => {

    const { _id, name, quantity, supplier, taste, photo } = coffee

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

               
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              const reamin = coffees.filter(cop=>cop._id!==_id)
                              setCoffees(reamin)
                        }
                    })

            }
        })
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl justify-center ">
                <figure><img src={photo} /></figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical gap-4">
                            <button className="btn btn-active">View</button>
                            <Link to={`/updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                            <button className="btn bg-red-600" onClick={() => handleDelete(_id)}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;