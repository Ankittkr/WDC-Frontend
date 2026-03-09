import { BookOpen } from 'lucide-react'
import React from 'react'
import { SubSection } from './helper/SubSection'
import { PaperCard } from './PaperCard'
import { useFaculty } from '../hooks/useFaculty'

export const Publications = () => {
    const {data} = useFaculty("balaji.cs@nitp.ac.in")
    const {textbooks , edited_books ,book_chapters , conference_papers , journal_papers } = data
    console.log(journal_papers);
    console.log(conference_papers);
    
    const journalMeta = {
        name : "journal_name",
        title : "title",
       year : "publication_year",
        url : "doi_url" 

    }
    
    const conferenceMeta = {
       name :  "conference_name",
        title : "title",
       year : "conference_year"
      
    }
    
const journalFields = [
  { label: "Authors", key: "authors" },
  { label: "Volume", key: "volume" },
  { label: "Journal Quartile", key: "journal_quartile" },
  { label: "Indexing", key: "indexing" },
  { label: "Student Details", key: "student_details" },
  { label: "Collaborators", key: "collaboraters" }
];

const conferenceFields = [
  { label: "Authors", key: "authors" },
  { label: "Location", key: "location" },
  { label: "Conference Type", key: "conference_type" },
  { label: "Pages", key: "pages" },
  { label: "Indexing", key: "indexing" },
  { label: "Foreign Author", key: "foreign_author" },
  { label: "Student Involved", key: "student_involved" },
  { label: "Student Name", key: "student_name" },
  { label: "Student Roll No", key: "student_roll_no" },
  { label: "Foreign Author Name", key: "foreign_author_name" },
  { label: "Country", key: "foreign_author_country_name" },
  { label: "Institute", key: "foreign_author_institute_name" },
  { label: "Collaborators", key: "collaboraters" }
];

  return (
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Publications
            </h3>
          </div>
          <SubSection id="journal_papers" title="Journal Papers">
        <span className="text-sm text-muted-foreground">{journal_papers.length} papers</span>
        
          {journal_papers.map((jour) => (
            <PaperCard key={jour.id} detail={jour}  type="Journal Paper" fields={journalFields} meta={journalMeta} />
          ))}
                
          </SubSection>
          <SubSection id="conference_papers" title="Conference Papers">
        <span className="text-sm text-muted-foreground">{journal_papers.length} papers</span>
        
          {conference_papers.map((conf) => (
            <PaperCard key={conf.id} detail={conf}  type="Conference Paper" fields={conferenceFields} meta={conferenceMeta}/>
          ))}
                
          </SubSection>



        </div>  )
}
