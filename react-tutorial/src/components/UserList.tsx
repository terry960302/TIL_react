import userEvent from "@testing-library/user-event"
import React, { useRef } from "react"


function User({user }: any){
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    )
}

function UserList(){
    // data
    const users = [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
      ];

    return (
        <div>
            {users.map((user, index) => (
                <User user={user} key={index}/>
            ))}
        </div>
    )
}

export default UserList