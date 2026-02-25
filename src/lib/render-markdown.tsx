import React from 'react';

export function renderMarkdown(content: string) {
  // Split the content by double newlines to get paragraphs
  const blocks = content.split(/\n\s*\n/);
  
  return (
    <>
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        
        // Handle Headings (###)
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-slate-900 font-display">
              {trimmed.substring(4)}
            </h3>
          );
        }
        
        // Handle Headings (##)
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={index} className="text-3xl font-extrabold mt-10 mb-6 text-slate-900 font-display">
              {trimmed.substring(3)}
            </h2>
          );
        }

        // Handle Lists
        if (trimmed.startsWith('- ')) {
          const listItems = trimmed
            .split('\n')
            .filter(item => item.trim().startsWith('- '))
            .map(item => item.trim().substring(2));
            
          return (
            <ul key={index} className="space-y-4 mb-8">
              {listItems.map((li, i) => (
                <li key={i} className="flex text-slate-600 text-lg">
                  <span className="mr-3 mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{formatText(li)}</span>
                </li>
              ))}
            </ul>
          );
        }
        
        // Default text paragraph
        if (trimmed.length > 0) {
          return (
            <p key={index} className="mb-6 text-slate-600 text-lg leading-relaxed">
              {formatText(trimmed)}
            </p>
          );
        }
        
        return null;
      })}
    </>
  );
}

function formatText(text: string) {
  // Very simple bolding formatter
  const boldRegex = /\*\*([^*]+)\*\*/g;
  const parts = text.split(boldRegex);
  
  // If no bold logic matches, parts has length 1
  if (parts.length === 1) {
    return text;
  }
  
  return (
    <>
      {parts.map((part, index) => {
        // Every even index is regular text, every odd is matched group (bold text)
        if (index % 2 === 1) {
          return <strong key={index} className="font-semibold text-slate-900">{part}</strong>;
        }
        return part;
      })}
    </>
  );
}
