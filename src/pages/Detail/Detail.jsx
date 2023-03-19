import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {

    let {jobid} = useParams();

  return (
    <div style={{paddingTop: "150px"}}>
        <div className="container">
          {jobid}
        </div>
    </div>
  )
}
