import React from 'react'
import { SubSection } from './helper/SubSection'
import { useFaculty } from '../hooks/useFaculty'
import { Calendar, GraduationCap, Users } from 'lucide-react'

export const Teaching = () => {
    const { data } = useFaculty("balaji.cs@nitp.ac.in")
    const { phd_candidates, internships, teaching_engagement, mooc_courses } = data
    return (
        <>
            <div className="mt-6 space-y-4">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-primary" /> Research Students
                </h3>
                <SubSection id="phd_candidates" title="Phd Candidates">
                    {phd_candidates.map((student) => (
                        <div key={student.id} className="bg-card rounded-lg border border-border p-5 mb-2 wrap-anywhere">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="text-sm font-semibold text-foreground">{student.student_name}</h4>
                                        <h4 className="text-xs font-medium text-foreground ">{student.roll_no}</h4>
                                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary">{student.registration_type}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground"><span className='font-bold'>Topic : </span> {student.research_area}</p>
                                    <p className="text-xs text-muted-foreground"><span className='font-bold'>Supervisor Type
                                        : </span> {student.supervisor_type}</p>
                                    {student.other_supervisors && <p className="text-xs text-muted-foreground"><span className='font-bold'>Other Supervisor : </span> {student.other_supervisors}</p>}

                                    <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1"><Calendar className="w-3 h-3" /> {student.registration_year && <span>Registration Year : {student.registration_year} </span>}
                                        {student.registration_date && <span>| Registration Date : {student.registration_date.split("T")[0]} </span>} {student.completion_year && <span>| Completion Year : {student.completion_year} </span>}{student.registration_date && <span>| Registration Date : {student.registration_date.split("T")[0]} </span>}</p>
                                </div>
                                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 ${student.current_status === "Ongoing" ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                                    }`}>{student.current_status}</span>
                            </div>
                        </div>
                    ))}
                </SubSection>
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                        <GraduationCap className="w-5 h-5 text-primary" /> Courses Taught
                    </h3>
                    <SubSection id="teaching_engagement" title="Teaching Engagement">
                        <div className="bg-card rounded-lg border border-border overflow-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-muted/50 text-left">
                                        <th className="px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Semester</th>
                                        <th className="px-4 py-3 font-semibold text-foreground hidden md:table-cell">Level</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">Code</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">Course Title</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">Course Type</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">Student Count</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">Lectures</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">Tutorials</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">Practicals</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">Theory</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">LAb Hours</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">Years Offered</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teaching_engagement.map((course) => (
                                        <tr key={course.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                                            <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{course.semester}</td>
                                            <td className="px-4 py-3 hidden md:table-cell">
                                                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary">{course.level}</span>
                                            </td>
                                            <td className="px-4 py-3 font-mono text-xs text-primary">{course.course_number}</td>
                                            <td className="px-4 py-3 text-foreground">{course.course_title}</td>
                                            <td className="px-4 py-3 text-foreground">{course.course_type}</td>
                                            <td className="px-4 py-3 text-foreground">{course.student_count}</td>
                                            <td className="px-4 py-3 text-foreground">{course.lectures}</td>
                                            <td className="px-4 py-3 text-foreground">{course.tutorials}</td>
                                            <td className="px-4 py-3 text-foreground">{course.practicals}</td>
                                            <td className="px-4 py-3 text-foreground">{course.total_theory}</td>
                                            <td className="px-4 py-3 text-foreground">{course.lab_hours}</td>
                                            <td className="px-4 py-3 text-foreground">{course.years_offered}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </SubSection>
                </div>
            </div>


        </>


    )
}
