import { Calendar, ExternalLink } from "lucide-react";

export const PaperCard = ({ detail, type ,  fields , meta}) => {

  return (
    <div className="bg-card rounded-lg border border-border p-5 hover:shadow-md transition-shadow mb-2">

      <div className="flex justify-between gap-4">

        {/* Left content */}
        <div className="flex-1 wrap-anywhere">

          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary mb-2">
            {type}
          </span>

          <h4 className="text-sm font-semibold text-foreground">
            {detail[meta.title]}
          </h4>

          {detail[meta.name] && (
            <p className="text-xs text-muted-foreground mt-1">
              {detail[meta.name]}
            </p>
          )}

          {/* Dynamic fields */}
          <ul className="mt-3 text-xs space-y-1">
            {fields
              .filter(field => detail[field.key] && detail[field.key]?.length > 0)
              .map((field, index) => (
                <li key={index}>
                  <span className="font-medium text-foreground">
                    {field.label}:
                  </span>{" "}
                  <span className="text-muted-foreground">
                    {detail[field.key]}
                  </span>
                </li>
              ))}
          </ul>

        </div>
        {/* Right side */}
        <div className="flex flex-col items-end gap-3 shrink-0">

          {detail[meta.year] && (
            <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {detail[meta.year]}
            </span>
          )}

          {detail[meta.url] && (
            <a
              href={detail[meta.url]}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              View
            </a>
          )}

        </div>

      </div>

    </div>
  );
};