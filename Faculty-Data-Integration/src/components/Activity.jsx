import { NotepadText } from 'lucide-react'
import React from 'react'
import { useFaculty } from '../hooks/useFaculty'
import { SubSection } from './helper/SubSection'
import { PaperCard } from './PaperCard'

export const Activity = () => {
    const { data } = useFaculty("balaji.cs@nitp.ac.in")
    const { workshops_conferences, conference_session_chairs, talks_and_lectures, special_lectures } = data

    const workshops_conferences_meta = {
        title: "event_name",
        name: "sponsored_by",
    };
    const workshops_conferences_Fields = [
        { label: "Role", key: "role" },
        { label: "Sponsored By", key: "sponsored_by" },
        { label: "Start Date", key: "start_date" },
        { label: "End Date", key: "end_date" },
        { label: "Participants", key: "participants_count" },
        { label: "Collaborators", key: "collaboraters" }
    ];

    const conference_session_chairs_meta = {
        title: "conference_name",
        name: "institute_name",
    };

    const conference_session_chairs_Fields = [
        { label: "Place", key: "place" },
        { label: "From Date", key: "from_date" },
        { label: "To Date", key: "to_date" },
    ];

    const talks_and_lectures_meta = {
        title: "topic",
        name: "event_name",
    };

    const talks_and_lectures_Fields = [
        { label: "Financed By", key: "financed_by" },
        { label: "Lecture Date", key: "lecture_date" },
        { label: "Start Date", key: "start_date" },
        { label: "End Date", key: "end_date" },
    ];


    return (
        <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <NotepadText className="w-5 h-5 text-primary" /> Academic Activities
                </h3>
            </div>
            <SubSection id="workshops_conferences" title="Workshops Conferences">
                <span className="text-sm text-muted-foreground">{workshops_conferences.length} Conferences</span>

                {workshops_conferences.map((work) => (
                    <PaperCard key={work.id} detail={work} type="Workshops Conferences" fields={workshops_conferences_Fields} meta={workshops_conferences_meta} />
                ))}

            </SubSection>
            <SubSection id="conference_session_chairs" title="Conference Session Chairs">
                <span className="text-sm text-muted-foreground">{conference_session_chairs.length} session</span>

                {conference_session_chairs.map((conf) => (
                    <PaperCard key={conf.id} detail={conf} type="Conference Session" fields={conference_session_chairs_Fields} meta={conference_session_chairs_meta} />
                ))}

            </SubSection>
            <SubSection id="talks_and_lectures" title="Talks and Lectures">
                <span className="text-sm text-muted-foreground">{talks_and_lectures.length} Lectures</span>

                {talks_and_lectures.map((conf) => (
                    <PaperCard key={conf.id} detail={conf} type="Talks and Lectures" fields={talks_and_lectures_Fields} meta={talks_and_lectures_meta} />
                ))}

            </SubSection>



        </div>)
}
