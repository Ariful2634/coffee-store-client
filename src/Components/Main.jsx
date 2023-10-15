// import { Outlet } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import CoffeeDetails from "./CoffeeDetails";
import { useState } from "react";


const Main = () => {

    const loadCoffees = useLoaderData()
    const [coffees,setCoffees]=useState(loadCoffees)

    return (
        <div>
            <h2 className="text-5xl text-purple-700">Coffee Store</h2>
            <h2>Coffee Available:{coffees.length}</h2>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    coffees.map(coffee=><CoffeeDetails key={coffee.id} 
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeDetails>)
                }
            </div>
           
        </div>
    );
};

export default Main;