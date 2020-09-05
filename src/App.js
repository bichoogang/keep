import React, { useState } from 'react';
import Heading from './Heading'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Component from './Component';
import Card from './Card'



const App = () => {
  const [newlist, setnewlist] = useState([]);
  const btnclick = (list) => {
    console.log('clicked')
    setnewlist((old) => {
      return [
        ...old, list
      ]
    })
  }
  const deleted = (id) => {
    setnewlist((old) => {
      return old.filter((arr, index) => {
        return id !== index
      })
    })
  }

  return (
    <>
      <Heading />
      <Component text={btnclick} />

      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-md-10 col-lg-10 mx-auto">
            <div className="row gy-3 gx-5">
              
                {newlist.map((value, index) => {
                  return <Card
                    title={value.title}
                    content={value.content}
                    id={index}
                    key={index}
                    del={deleted}
                  />
                })}
              
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
export default App;