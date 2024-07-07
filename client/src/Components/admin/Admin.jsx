import React,{useState} from 'react'
import ProjectAdder from './ProjectAdder'
import ProjectGetter from "./ProjectGetter"
import { getAllDesignsAction } from '../../redux/actions/designActions'
import {useDispatch} from "react-redux"

const Admin = () => {
  const [assigner, setAssigner] = useState("first")
  const dispatch = useDispatch();

  const showProjectHandler = () => {
 setAssigner("second");
 dispatch(getAllDesignsAction());
  }

  return (
    <div>
      <div className="sidebar">
        <span>
          <button className='m-4 bg-slate-400 p-4 rounded-lg' onClick={()=>setAssigner("first")} >Add Projects</button>
          <button className='m-4 bg-slate-400 p-4 rounded-lg' onClick={showProjectHandler} >Show Projects</button>
        </span>
      </div>
      <div>
        {
          assigner == "first" && <ProjectAdder />
        }
        {
          assigner == "second" && <ProjectGetter />
        }
      </div>
    </div>
  )
}

export default Admin
