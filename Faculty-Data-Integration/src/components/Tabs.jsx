import React from 'react'
import { useFaculty } from '../hooks/useFaculty'
const TAB_GROUPS = {
    Overview: [
        "profile",
        "about_me",
        "education",
        "work_experience"
    ],

    Publications: [
        "journal_papers",
        "conference_papers",
        "book_chapters",
        "edited_books",
        "textbooks"
    ],

    "Research & Innovation": [
        "patents",
        "ipr",
        "startups",
        "international_journal_reviewers",
        "editorial_boards"
    ],

    Projects: [
        "sponsored_projects",
        "consultancy_projects",
        "project_supervision"
    ],

    "Students & Teaching": [
        "phd_candidates",
        "internships",
        "teaching_engagement",
        "mooc_courses"
    ],

    "Academic Activities": [
        "workshops_conferences",
        "conference_session_chairs",
        "talks_and_lectures",
        "special_lectures"
    ],

    "Institutional Responsibilities": [
        "institute_activities",
        "department_activities",
        "memberships"
    ],

    Achievements: [
        "honours_awards",
        "visits_abroad"
    ]
}
export const Tabs = ({active , setActive}) => {
    const { data } = useFaculty("balaji.cs@nitp.ac.in")
    const tabs = Object.entries(TAB_GROUPS)
        .filter(([tab, keys]) =>
            keys.some(key => data[key] && data[key].length > 0)
        )
        .map(([tab]) => tab)

    return (
        <div className="flex gap-6 border-b border-border overflow-x-auto">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActive(tab)}
                    className={`pb-2 text-sm font-medium whitespace-nowrap transition-colors ${active === tab
                            ? "border-b-2 border-primary text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}
