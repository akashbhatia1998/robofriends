import React from 'react';

const Card = ({name ,id ,email,phone_number}) =>{
    
    return (
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2'>
            <img alt ="robo" src ={`https://robohash.org/${id}?size=200x200`}/>
            <div>
               <h2>Name :-{name}</h2>
                <p>E.mail:-{email}</p>
                <p>Phone no. :-{phone_number}</p>
            </div>
        </div>
    )
}
export default Card;
