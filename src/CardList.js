import React from 'react';
import Card from './Card';

const CardList =({robots}) =>{
    const cc =robots.map((user,i)=>{
        return <Card key = {i} id = {robots[i].id} name={robots[i].name} email={robots[i].email} phone_number = {robots[i].address.zipcode}/>
    })
    return(
    <div>
        {cc}
    </div>

);
}
export default CardList;
