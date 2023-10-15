import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const {_id,name,quantity,supplier,taste,category,details,photo} = coffee

    
    const handleUpdateClick = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee= {name,quantity,supplier,taste,category,details,photo}
        
        console.log(newCoffee)

        // send data to the server

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert('Coffee Updated successfully')
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-20">
            <h2 className="text-5xl font-extrabold">Update Coffee</h2>
            {/* coffee name form */}
           <form onSubmit={handleUpdateClick}>
           <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="name" placeholder="Coffee Name" defaultValue={name}  className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-5">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="quantity" placeholder="Available Quantity" defaultValue={quantity}  className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* supplier form */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="supplier" placeholder="Supplier name" defaultValue={supplier}  className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-5">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="taste" placeholder="Taste" defaultValue={taste}  className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* category form */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="category" placeholder="Category" defaultValue={category} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-5">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered w-full" />
                    </label>
                </div>
                
                
            </div>
            <div>
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div>
            <div className="form-control w-full">
                    <label className="label">
                        
                    <input className="btn btn-block" type="submit" name="submit" value="Update Coffee" />
                    </label>
                </div>
            </div>
           </form>
        </div>
    );
};

export default UpdateCoffee;