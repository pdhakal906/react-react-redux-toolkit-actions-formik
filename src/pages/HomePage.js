import React from 'react'

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addData, removeData } from '../features/todoSlice';



const HomePage = () => {

  // the data comes in like:
  // const d = {
  //   todos: {
  //     data: []
  //   }
  // };

  // // const m = d.todos
  // const {data} = d.todos;

  const { data } = useSelector((store) => store.todos);

  const dispatch = useDispatch();




  console.log(data);



  const formik = useFormik({
    initialValues: {

      username: '',
      email: ''

    },
    onSubmit: (val, { resetForm }) => {

      dispatch(addData(val))


      resetForm();
    }
  });




  return (
    <div>

      <div className='p-5'>
        <h1 className='text-2xl '>Sample Todo App</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className='space-y-2'>
            <label htmlFor="username">Username</label>
            <br />
            <input onChange={formik.handleChange}
              value={formik.values.username}
              name='username'
              id="username"
              type="text"
              className='border border-black outline-none px-2 py-1'
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                }
              }} />
          </div>
          <div className='space-y-2'>
            <label htmlFor="email">Email</label>
            <br />
            <input onChange={formik.handleChange}
              value={formik.values.email}
              name='email'
              id="email"
              type="email"
              className='border border-black outline-none px-2 py-1'
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                }
              }} />
          </div>

          <button className='bg-blue-400 p-1 rounded-md mt-5' type='submit'>Submit</button>

          <div>
            {data.map((d, i) => {
              return <div key={i} className='shadow-md p-5 max-w-md flex justify-between'>
                <div className='flex gap-20'>
                  <div className='flex gap-10'>
                    <h1 className='text-1xl'>{d.username}</h1>
                    <button onClick={() => dispatch(removeData(i))} type='button' className='text-red-600'><i className="fa-solid fa-trash"></i></button>
                  </div>
                  <div className='flex gap-10'>
                    <h1 className='text-1xl'>{d.email}</h1>
                    <button onClick={() => dispatch(removeData(i))} type='button' className='text-red-600'><i className="fa-solid fa-trash"></i></button>
                  </div>

                </div>


              </div>
            })}
          </div>

        </form>
      </div>


    </div>
  )
}

export default HomePage

