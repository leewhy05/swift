import React from 'react'
import Section from './Section'
import Table from 'react-bootstrap/Table';
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

const Section3 = () => {
    const myObj = [
        {
            icons: require("../assest/Home Chef.png"),
            name: "Home Chef",
            small: "356 Chefs",
            current: 1,
            active: "active",
        },
        {
            icons: require("../assest/Home Chef.png"),
            name: "Restuarants",
            current: 1,
            small: "203 Places",
            active: "active",
        },
        {
            icons: require("../assest/Home Chef.png"),
            name: "Fast Food",
            small: "95 Places",
            current: 1,
            active: "active",
        },

    ]
  return (
    <div>
       <Section />

       <h6 className='text-start '>Add/Edit type</h6>

<Table striped bordered hover>
    <thead className=''>
        <tr className='panda' >
            <th className='py-3'>#</th>
            <th className='py-3'>ICONS</th>
            <th className='text-start ps-5 py-3'>NAME</th>
            <th className='py-3'>CURRENT NUMBER</th>
            <th className='py-3'>STATUS</th>
            <th className='py-3'>ACTION</th>

        </tr>
    </thead>
    <tbody>
        {
            myObj.map((item, i) => (

                <tr className='yy'>
                    <td className='pt-3'>0{i+1}</td>
                    <td className='pt-3'><img src={item.icons} style={{width: '30px'}} alt="" /></td>
                    <td className='pt-3 d-flex flex-column text-start ps-5'><span>{item.name}</span><span>{item.small}</span></td>
                    <td className='pt-3'>{item.current}</td>
                    <td className='pt-2'><button className='btn border rounded-pill px-4'>{item.active}</button></td>
                    <td className='pt-3'>
                        <span><CiEdit /> Edit</span>
                        <span className='ps-3 '><RiDeleteBin5Line /> Delete</span>
                    </td>
                </tr>
            ))
        }

    </tbody>
</Table>

            <button className='btn btn-primary '><GoPlus /> Add a New Type</button>


       
    </div>
  )
}

export default Section3