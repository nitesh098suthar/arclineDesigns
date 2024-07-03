import React,{useState} from 'react'
import ProjectAdder from './ProjectAdder'
import ProjectGetter from "./ProjectGetter"

const Admin = () => {
  const [assigner, setAssigner] = useState("first")
  return (
    <div>
      <div className="sidebar">
        <span>
          <button className='m-4 bg-slate-400 p-4 rounded-lg' onClick={()=>setAssigner("first")} >Add Projects</button>
          <button className='m-4 bg-slate-400 p-4 rounded-lg' onClick={()=>setAssigner("second")} >Show Projects</button>
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
