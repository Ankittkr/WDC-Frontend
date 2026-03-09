import React from 'react'
import { useFaculty } from '../hooks/useFaculty'
import { SubSection } from './helper/SubSection'
import { Calendar, FlaskConical } from 'lucide-react'

export const Projects = () => {
     const {data} = useFaculty("balaji.cs@nitp.ac.in")
     const {sponsored_projects , consultancy_projects , project_supervision} = data
  return (
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-2">
            <FlaskConical className="w-5 h-5 text-primary" /> Research Projects
          </h3>
          <SubSection id="project_supervision" title="Project Supervision" >

          </SubSection>
          {project_supervision.map((proj) => (
            <div key={proj.id} className="bg-card rounded-lg border border-border p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground">{proj.project_title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Student Details: <strong className="text-foreground">{proj.student_details}</strong> · {proj.amount}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1"><Calendar className="w-3 h-3" />date : {proj.start_date}<span className='font-bold'>-</span>{proj.end_date.split('T')[0]}</p>
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 ${
                  proj.end_date === "Continue" ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                }`}>{ proj.end_date === "Continue" ? "Continue" : "Completed"}</span>
              </div>
            </div>
          ))}
        </div>

  )
            
}
