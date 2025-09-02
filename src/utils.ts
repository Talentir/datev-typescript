export const addQuotes = (value?: string) => (value != null ? `"${value.replace(/"/g, '""')}"` : '""');
