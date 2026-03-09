import { useState } from "react";
import { Atom, Settings, Monitor, Layers, BookOpen, FlaskConical, GraduationCap, Users, Trophy, ExternalLink, Calendar, MapPin , Briefcase } from "lucide-react";
import { useFaculty } from "../hooks/useFaculty";
import { Overview } from "./Overview";
import { Tabs } from "./Tabs";
import { Publications } from "./Publications";
import { ResearchInnovation } from "./ResearchInnovation";
import { Projects } from "./Projects";
import { Teaching } from "./Teaching";
import { Activity } from "./Activity";
import { Responsibilities } from "./Responsibilities";
import PageLoader from "./PageLoader";

export const ProfileTabs = () => {
  const [active, setActive] = useState("Overview");
    const { data, isLoading, isError, error } = useFaculty("balaji.cs@nitp.ac.in")
    if (isLoading) return <PageLoader/>
    if (isError) return <p>Error loading faculty </p> 
    


    
  return (
    <div className="max-w-5xl mx-auto px-4 mt-8">
      {/* Tabs */}
      <Tabs active={active} setActive={setActive} />

      {/* Overview Tab */}
      {active === "Overview" && (
          <Overview/>
      )}

      {/* Publications Tab */}
      {active === "Publications" && (
          <Publications/>
      )}

      {/* Research & Innovation Tab */}
      {active === "Research & Innovation" && (
        <ResearchInnovation/>
      )}

      {/* Teaching Tab */}
      {active === "Projects" && (
          <Projects/>
      )}

      {/* Students Tab */}
      {active === "Students & Teaching" && (
          <Teaching/>
      )}
      {/* Academic Activities*/}
      {active === "Academic Activities" && (
          <Activity/>
      )}
      {active === "Institutional Responsibilities" && (
          <Responsibilities/>
      )}

      {/* Awards Tab */}
      {active === "Awards" && (
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-primary" /> Awards & Honors
          </h3>
          {awardsList.map((award, i) => (
            <div key={i} className="bg-card rounded-lg border border-border p-5 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground">{award.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{award.org} · {award.year}</p>
                <p className="text-xs text-muted-foreground mt-1">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};