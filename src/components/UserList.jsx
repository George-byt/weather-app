import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserAsync } from '../redux/actions/newUserActions';

const UserList = () => {

  const dispatch = useDispatch()

  const { users } = useSelector(store => store.newUserReducer)
  console.log(users)

  useEffect(() => {
    dispatch(getUserAsync())
  }, [dispatch])

  return (
    <section className='userList-section'>
      <div className='container'>
        <h1 className='text-danger text-center'>User List</h1>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((u, index) => (
                <tr>
                  <th scope="row">{u.index}</th>
                  <td>{u.name}</td>
                  <td>{u.lastName}</td>
                  <td>{u.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default UserList;
