import { University } from 'lucide-react'
import React from 'react'
import { SubSection } from './helper/SubSection'
import { useFaculty } from '../hooks/useFaculty'

export const Responsibilities = () => {
        const {data} = useFaculty("balaji.cs@nitp.ac.in")
        const {institute_activities , department_activities  , memberships} = data
  return (
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <University className="w-5 h-5 text-primary" /> Institutional Responsibilities
            </h3>
          </div>
            <SubSection id="institute_activities" title="Institute Activities">
              <div className="space-y-2">
                {institute_activities.map((a) => (
                  <div key={a.id} className="bg-card rounded-lg border border-border p-4 flex items-center justify-between">
                    <div>
                    <div className="text-sm font-medium text-foreground">{a.role_position}</div>
                    <div className='text-xs'>{a.institute_name}</div>

                    </div>
                    <span className="text-xs text-muted-foreground">{a.start_date.split('T')[0]}<span className='font-extrabold'> - </span>{a.end_date.split('00')[0]}</span>
                  </div>
                ))}
              </div>
            </SubSection>
            <SubSection id="department_activities" title="Department Activities">
              <div className="space-y-2">
                {department_activities.map((d) => (
                  <div key={d.id} className="bg-card rounded-lg border border-border p-4 flex items-center justify-between">
                    <div>
                    <div className="text-sm font-medium text-foreground">{d.activity_description}</div>
                    <div className='text-xs'>{d.institute_name}</div>

                    </div>
                    <span className="text-xs text-muted-foreground">{d.start_date.split('T')[0]}<span className='font-extrabold'> - </span>{d.end_date.split('00')[0]}</span>
                  </div>
                ))}
              </div>
            </SubSection>




        </div>
  )
}
