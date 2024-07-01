import React, { useState, useEffect } from 'react'
import './style.scss'
import { apis } from '../../apis'

interface UserData {
  email: string, 
  firstName: string, 
  lastName: string, 
  level: string,
  role: string, 
  companyName: string, 
  emailVerified: string,
  status: string
}

export default function Users() {

  useEffect(() => {
    const fetch = async () => {
      await apis.getAllUsers()
      .then((res) => {
        setAllUsers(res.data)
      })
    } 

    fetch()
  }, [])

  const [allUsers, setAllUsers] = useState<UserData[]>([])

  const handleUserByAdmin = async (email: string, status: string) => {
    await apis.handleUserByAdmin({email: email, status: status})
    .then((res) => {
      const updatedData = allUsers.map((item: UserData) => {
        if (item.email === res.data.email) {
          return { ...item, status: res.data.status };
        }
        return item;
      });
      setAllUsers(updatedData);
    })
  }
  
  return (
    <div className='page'>
      <div className="common-table">
        <table className="table-content">
          <tbody>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Name</th>
              <th>Level</th>
              <th>Role</th>
              <th>Company Name</th>
              <th>Email Verified</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {
              allUsers.map((user: UserData, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.email}</td>
                    <td>{user.firstName + " " + user.lastName}</td>
                    <td>{user.level}</td>
                    <td>{user.role}</td>
                    <td>{user.companyName}</td>
                    <td>{user.emailVerified === "true" ? "Verified" : "Not Verified"}</td>
                    <td className={`${user.status === "inactive" ? "red-text" : user.status === "active" ? "green-text" : "black-color"}`}>{user.status}</td>
                    <td>
                      {
                        user.status === "active"
                        ? <div className='actionBox'>
                            <div className='inactiveBtn' onClick={() => handleUserByAdmin(user.email, "inactive")}>Inactive</div>
                            <div className='devider' />
                            <div className='declineBtn' onClick={() => handleUserByAdmin(user.email, "decline")}>Decline</div>
                          </div>
                        : user.status === "inactive"
                          ? <div className='actionBox'>
                            <div className='activeBtn' onClick={() => handleUserByAdmin(user.email, "active")}>Active</div>
                            <div className='devider' />
                            <div className='declineBtn' onClick={() => handleUserByAdmin(user.email, "decline")}>Decline</div>
                          </div>
                          : <div className='actionBox'>
                            <div className='activeBtn' onClick={() => handleUserByAdmin(user.email, "active")}>Active</div>
                            <div className='devider' />
                            <div className='inactiveBtn' onClick={() => handleUserByAdmin(user.email, "inactive")}>Inactive</div>
                          </div>
                      }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
