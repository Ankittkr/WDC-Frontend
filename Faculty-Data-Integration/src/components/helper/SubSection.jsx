import React from 'react'

export const SubSection = ({ id, title, children}) => {
    return (
        <div id={id} className="scroll-mt-4">
            <h4 className="text-sm font-semibold text-foreground border-b border-border pb-2 mb-4 uppercase tracking-wide">{title}</h4>
            {children}
        </div>
    )
}
