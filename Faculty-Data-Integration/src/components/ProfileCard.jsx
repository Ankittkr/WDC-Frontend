import React, { useEffect, useState } from 'react'
import { useFaculty } from '../hooks/useFaculty'
import { Globe, Mail } from 'lucide-react'
import PageLoader from './PageLoader'
import { lazy } from 'react'

export const ProfileCard = () => {

    const { data, isLoading, isError, error } = useFaculty("balaji.cs@nitp.ac.in")
    if (isLoading) return <PageLoader />


    if (isError) return <p>Error loading faculty </p>
    const { profile, journal_papers, conference_papers, project_supervision, phd_candidates } = data
    const { name, email, department, designation, image } = profile
    const stats = [
        { value: journal_papers.length, label: "Journal Papers" },
        { value: phd_candidates.length, label: "PhD Students" },
        { value: conference_papers.length, label: "Conference Papers" },
        { value: project_supervision.length, label: "Projects" },
    ];


    return (
        <div className="bg-card rounded-lg shadow-md p-6 -mt-12 relative z-10 mx-4 md:mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={image}
                    alt="Dr. Shivendra Kumar Jaiswal"
                    loading="lazy"
                    width="160"
                    height="160"
                    className="w-32 h-32 md:w-40 md:h-40 object-cover rounded border-2 border-border"
                />
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground">{name}</h2>
                    <p className="text-muted-foreground">{designation}</p>
                    <p className="text-muted-foreground text-sm">{department}</p>
                    <p className="flex items-center gap-2 mt-2 text-sm text-foreground">
                        <Mail className="w-4 h-4" /> {email}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        {["cv", "linkedin", "google_scholar", "personal_webpage", "scopus", "vidwan", "orcid"].map((p) => profile[p] && (
                            <button key={p} className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1">
                                <Globe className="w-3 h-3" /> <a href={profile[p]}>{p}</a>
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {stats.map((s) => (
                            <div key={s.label} className="border-2 border-stat-border rounded-lg px-4 py-2 text-center min-w-[70px]">
                                <div className="text-xl font-bold text-primary">{s.value}</div>
                                <div className="text-xs text-muted-foreground">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
