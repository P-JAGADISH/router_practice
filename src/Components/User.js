import React from 'react';
import { useParams } from 'react-router-dom';

function User(){
   const {id}= useParams()
    return <div>
    
        <h1>User Profile</h1>
        <h5>User ID is<b>{id}</b></h5>
    </div>
}
export default User;