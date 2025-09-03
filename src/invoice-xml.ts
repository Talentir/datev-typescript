/**
 * Generates a DATEV XML archive document with the specified documents
 * @param options - Configuration for the archive including documents
 * @returns UTF-8 encoded XML string
 */
export function generateDatevInvoiceXml(options: {
  documents: {
    uuid: string;
    fileName: string;
  }[];
}): string {
  const generatingSystem = 'talentir';
  const version = '6.0';
  const date = new Date().toISOString().slice(0, 19); // Current timestamp, remove milliseconds for cleaner format

  // Generate document elements
  const documentElements = options.documents
    .map((doc) => {
      return `    <document guid="${doc.uuid}">
      <extension name="${doc.fileName}" xsi:type="File"/>
    </document>`;
    })
    .join('\n');

  // Construct the complete XML
  const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<archive xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://xml.datev.de/bedi/tps/document/v06.0" generatingSystem="${generatingSystem}" version="${version}" xsi:schemaLocation="http://xml.datev.de/bedi/tps/document/v06.0 Document_v060.xsd">
  <header>
    <date>${date}</date>
  </header>
  <content>
${documentElements}
  </content>
</archive>`;

  return xml;
}
