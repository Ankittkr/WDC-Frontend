import React from 'react'
import { useFaculty } from '../hooks/useFaculty'
import { Atom, Settings, Monitor, Layers, BookOpen, FlaskConical, GraduationCap, Users, Trophy, ExternalLink, Calendar, MapPin , Briefcase } from "lucide-react";

export const Overview = () => {
    
        const { data} = useFaculty("balaji.cs@nitp.ac.in")
        const {profile , about_me , education , work_experience , journal_papers} = data
  return (
        <div className="mt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">About</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
{about_me[0].content}
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Education</h3>
              <ul className="space-y-2 text-sm">
                {education.map((e)=> (
                <li key={e.id} className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" /><span><strong>{e.certification}</strong> – {e.institution}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" /> Work Experience
            </h3>
            <div className="space-y-4">
              {work_experience.map((exp, i) => (
                <div key={exp.id} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                  <h4 className="text-sm font-semibold text-foreground">{exp.work_experiences}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{exp.institute}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.	start_date.split('T')[0]} <span className="font-extrabold text-sm">-</span>{exp.end_date === null ? 'present' : exp.end_date}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Research Interest</h3>
              <ul className="space-y-2 text-sm">

                {
                profile.research_interest.split(', ').map((a) => (
                  <li key={a} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />{a}
                  </li>
                ))}
              </ul>

            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Recent Journals</h3>
              <div className="space-y-4">
                {journal_papers.slice(0, 2).map((pub) => (
                  <div key={pub.title} className="border-l-4 border-primary pl-4">
                    <p className="text-sm font-medium text-foreground">{pub.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{pub.journal_name} · {pub.publication_year}</p>
                    <button className="mt-2 px-4 py-1 text-xs rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                      <a href={pub.doi_url} target="_blank">View paper</a>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  )
}
