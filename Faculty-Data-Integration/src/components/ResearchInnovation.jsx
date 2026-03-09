import { Lightbulb } from 'lucide-react'
import React from 'react'
import { useFaculty } from '../hooks/useFaculty'
import { SubSection } from './helper/SubSection'

export const ResearchInnovation = () => {
    const { data } = useFaculty("balaji.cs@nitp.ac.in")
    const { patents, ipr, startups, international_journal_reviewers, editorial_boards } = data

    return (
        <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" /> Research & Innovation
                </h3>
            </div>
            <SubSection id="international_journal_reviewers" title="International Journal Reviewers">
                <span className="text-sm text-muted-foreground">{international_journal_reviewers.length} review</span>
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-muted/50">
                                <th className="px-4 py-2.5 text-left font-semibold text-foreground">Name</th>
                                <th className="px-4 py-2.5 text-left font-semibold text-foreground">From</th>
                                <th className="px-4 py-2.5 text-left font-semibold text-foreground">To</th>
                            </tr>
                        </thead>
                        <tbody>
                            {international_journal_reviewers.map((r) => (
                                <tr key={r.id} className="border-t border-border">
                                    <td className="px-4 py-2.5 text-foreground">{r.name}</td>
                                    <td className="px-4 py-2.5 text-muted-foreground">{r.from_date.split('T')[0]}</td>
                                    <td className="px-4 py-2.5 text-muted-foreground">
                                        {r.is_continuing ?
                                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 bg-primary/10 text-primary">OnGoing</span> : r.to_date
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </SubSection>




        </div>
    )
}
