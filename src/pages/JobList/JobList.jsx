import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getJobListByNameAction, getJobListByTypeAction } from '../../redux/actions/jobListAction'
import JobItem from './JobItem'


export default function JobList() {

  let { jobname, typedetailid } = useParams()
  let { jobList } = useSelector(state => state.jobListReducer)
  let dispatch = useDispatch()

  useEffect(() => {
    console.log("callAPI")
    if (jobname) {
      getJobListByName();
    }
    if (typedetailid) {
      getJobListByType();
    }
  }, [jobname, typedetailid])

  const getJobListByName = () => {
    let action = getJobListByNameAction(jobname);
    dispatch(action)
  }

  const getJobListByType = () => {
    let action = getJobListByTypeAction(typedetailid);
    dispatch(action)
  }

  const renderJobItem = () => {
    return jobList.map((jobItem) => {
      return <div key={jobItem.id} className="col-3">
        <JobItem jobItem={jobItem} />
      </div>

    })
  }



  return (
    <div style={{ paddingTop: "150px", paddingBottom: "60px" }}>
      <div className="container">
        <div className="row">
        {renderJobItem()}
        </div>
  
      </div>

    </div>
  )
}
