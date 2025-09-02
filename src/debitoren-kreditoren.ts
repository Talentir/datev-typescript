import { z } from 'zod';
import { createDatevHeaderWithSensibleDefaults } from './header';
import { addQuotes } from './utils';

export const debitorenKreditorenSchema = z.object({
  Konto: z.string().regex(/^(?!0{1,9}$)(\d{1,9})$/),
  'Name (Adressatentyp Unternehmen)': z
    .string()
    .regex(/^(.){0,50}$/)
    .optional()
    .transform(addQuotes),
  Unternehmensgegenstand: z
    .string()
    .regex(/^(.){0,50}$/)
    .optional()
    .transform(addQuotes),
  'Name (Adressatentyp natürl. Person)': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Vorname (Adressatentyp natürl. Person)': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Name (Adressatentyp keine Angabe)': z
    .string()
    .regex(/^(.){0,50}$/)
    .optional()
    .transform(addQuotes),
  Adressatentyp: z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  Kurzbezeichnung: z
    .string()
    .regex(/^(.){0,15}$/)
    .optional()
    .transform(addQuotes),
  'EU-Land': z
    .string()
    .regex(/^[\w]{0,2}$/)
    .optional()
    .transform(addQuotes),
  'EU-UStId': z
    .string()
    .regex(/^(.){0,13}$/)
    .optional()
    .transform(addQuotes),
  Anrede: z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Titel / Akad. Grad': z
    .string()
    .regex(/^(.){0,25}$/)
    .optional()
    .transform(addQuotes),
  Adelstitel: z
    .string()
    .regex(/^(.){0,15}$/)
    .optional()
    .transform(addQuotes),
  Namensvorsatz: z
    .string()
    .regex(/^(.){0,14}$/)
    .optional()
    .transform(addQuotes),
  Adressart: z
    .string()
    .regex(/^[\w]{0,3}$/)
    .optional()
    .transform(addQuotes),
  Straße: z
    .string()
    .regex(/^(.){0,36}$/)
    .optional()
    .transform(addQuotes),
  Postfach: z
    .string()
    .regex(/^(.){0,10}$/)
    .optional()
    .transform(addQuotes),
  Postleitzahl: z
    .string()
    .regex(/^[\d]{0,10}$/)
    .optional()
    .transform(addQuotes),
  Ort: z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  Land: z
    .string()
    .regex(/^[A-Z]{2}$/)
    .optional()
    .transform(addQuotes),
  Versandzusatz: z
    .string()
    .regex(/^(.){0,50}$/)
    .optional()
    .transform(addQuotes),
  Adresszusatz: z
    .string()
    .regex(/^(.){0,36}$/)
    .optional()
    .transform(addQuotes),
  'Abweichende Anrede': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Zustellbezeichnung 1': z
    .string()
    .regex(/^(.){0,50}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Zustellbezeichnung 2': z
    .string()
    .regex(/^(.){0,36}$/)
    .optional()
    .transform(addQuotes),
  'Kennz. Korrespondenzadresse': z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Adresse Gültig von': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Adresse Gültig bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  Telefon: z
    .string()
    .regex(/^(.){0,60}$/)
    .optional()
    .transform(addQuotes),
  'Bemerkung (Telefon)': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Telefon Geschäftsleitung': z
    .string()
    .regex(/^(.){0,60}$/)
    .optional()
    .transform(addQuotes),
  'Bemerkung (Telefon GL)': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'E-Mail': z
    .string()
    .regex(/^(.){0,60}$/)
    .optional()
    .transform(addQuotes),
  'Bemerkung (E-Mail)': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  Internet: z
    .string()
    .regex(/^(.){0,60}$/)
    .optional()
    .transform(addQuotes),
  'Bemerkung (Internet)': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  Fax: z
    .string()
    .regex(/^(.){0,60}$/)
    .optional()
    .transform(addQuotes),
  'Bemerkung (Fax)': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  Sonstige: z
    .string()
    .regex(/^(.){0,60}$/)
    .optional()
    .transform(addQuotes),
  'Bemerkung (Sonstige)': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Bankleitzahl 1': z
    .string()
    .regex(/^[\d]{0,8}$/)
    .optional()
    .transform(addQuotes),
  'Bankbezeichnung 1': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Bankkonto-Nummer 1': z
    .string()
    .regex(/^[\d]{0,10}$/)
    .optional()
    .transform(addQuotes),
  'Länderkennzeichen 1': z
    .string()
    .regex(/^[\w]{0,2}$/)
    .optional()
    .transform(addQuotes),
  'IBAN-Nr. 1': z
    .string()
    .regex(/^(.){0,34}$/)
    .optional()
    .transform(addQuotes),
  'Leerfeld 1': z.string().regex(/^(.)$/).optional().transform(addQuotes),
  'SWIFT-Code 1': z
    .string()
    .regex(/^(.){0,11}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Kontoinhaber 1': z
    .string()
    .regex(/^(.){0,70}$/)
    .optional()
    .transform(addQuotes),
  'Kennz. Hauptbankverb. 1': z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Bankverb. 1 Gültig von': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankverb. 1 Gültig bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankleitzahl 2': z
    .string()
    .regex(/^[\d]{0,8}$/)
    .optional()
    .transform(addQuotes),
  'Bankbezeichnung 2': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Bankkonto-Nummer 2': z
    .string()
    .regex(/^[\d]{0,10}$/)
    .optional()
    .transform(addQuotes),
  'Länderkennzeichen 2': z
    .string()
    .regex(/^[\w]{0,2}$/)
    .optional()
    .transform(addQuotes),
  'IBAN-Nr. 2': z
    .string()
    .regex(/^(.){0,34}$/)
    .optional()
    .transform(addQuotes),
  'Leerfeld 2': z.string().regex(/^(.)$/).optional().transform(addQuotes),
  'SWIFT-Code 2': z
    .string()
    .regex(/^(.){0,11}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Kontoinhaber 2': z
    .string()
    .regex(/^(.){0,70}$/)
    .optional()
    .transform(addQuotes),
  'Kennz. Hauptbankverb. 2': z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Bankverb. 2 Gültig von': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankverb. 2 Gültig bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankleitzahl 3': z
    .string()
    .regex(/^[\d]{0,8}$/)
    .optional()
    .transform(addQuotes),
  'Bankbezeichnung 3': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Bankkonto-Nummer 3': z
    .string()
    .regex(/^[\d]{0,10}$/)
    .optional()
    .transform(addQuotes),
  'Länderkennzeichen 3': z
    .string()
    .regex(/^[\w]{0,2}$/)
    .optional()
    .transform(addQuotes),
  'IBAN-Nr. 3': z
    .string()
    .regex(/^(.){0,34}$/)
    .optional()
    .transform(addQuotes),
  'Leerfeld 3': z.string().regex(/^(.)$/).optional().transform(addQuotes),
  'SWIFT-Code 3': z
    .string()
    .regex(/^(.){0,11}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Kontoinhaber 3': z
    .string()
    .regex(/^(.){0,70}$/)
    .optional()
    .transform(addQuotes),
  'Kennz. Hauptbankverb. 3': z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Bankverb. 3 Gültig von': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankverb. 3 Gültig bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankleitzahl 4': z
    .string()
    .regex(/^[\d]{0,8}$/)
    .optional()
    .transform(addQuotes),
  'Bankbezeichnung 4': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Bankkonto-Nummer 4': z
    .string()
    .regex(/^[\d]{0,10}$/)
    .optional()
    .transform(addQuotes),
  'Länderkennzeichen 4': z
    .string()
    .regex(/^[\w]{0,2}$/)
    .optional()
    .transform(addQuotes),
  'IBAN-Nr. 4': z
    .string()
    .regex(/^(.){0,34}$/)
    .optional()
    .transform(addQuotes),
  'Leerfeld 4': z.string().regex(/^(.)$/).optional().transform(addQuotes),
  'SWIFT-Code 4': z
    .string()
    .regex(/^(.){0,11}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Kontoinhaber 4': z
    .string()
    .regex(/^(.){0,70}$/)
    .optional()
    .transform(addQuotes),
  'Kennz. Hauptbankverb. 4': z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Bankverb. 4 Gültig von': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankverb. 4 Gültig bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankleitzahl 5': z
    .string()
    .regex(/^[\d]{0,8}$/)
    .optional()
    .transform(addQuotes),
  'Bankbezeichnung 5': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Bankkonto-Nummer 5': z
    .string()
    .regex(/^[\d]{0,10}$/)
    .optional()
    .transform(addQuotes),
  'Länderkennzeichen 5': z
    .string()
    .regex(/^[\w]{0,2}$/)
    .optional()
    .transform(addQuotes),
  'IBAN-Nr. 5': z
    .string()
    .regex(/^(.){0,34}$/)
    .optional()
    .transform(addQuotes),
  'Leerfeld 5': z.string().regex(/^(.)$/).optional().transform(addQuotes),
  'SWIFT-Code 5': z
    .string()
    .regex(/^(.){0,11}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Kontoinhaber 5': z
    .string()
    .regex(/^(.){0,70}$/)
    .optional()
    .transform(addQuotes),
  'Kennz. Hauptbankverb. 5': z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Bankverb. 5 Gültig von': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankverb. 5 Gültig bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Leerfeld 6': z
    .string()
    .regex(/^(.){0,3}$/)
    .optional()
    .transform(addQuotes),
  Briefanrede: z
    .string()
    .regex(/^(.){0,100}$/)
    .optional()
    .transform(addQuotes),
  Grußformel: z
    .string()
    .regex(/^(.){0,50}$/)
    .optional()
    .transform(addQuotes),
  Kundennummer: z
    .string()
    .regex(/^(.){0,15}$/)
    .optional()
    .transform(addQuotes),
  Steuernummer: z
    .string()
    .regex(/^(.){0,20}$/)
    .optional()
    .transform(addQuotes),
  Sprache: z
    .string()
    .regex(/^[\d]{0,2}$/)
    .optional(),
  Ansprechpartner: z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  Vertreter: z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  Sachbearbeiter: z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Diverse-Konto': z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  Ausgabeziel: z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  Währungssteuerung: z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Kreditlimit (Debitor)': z
    .string()
    .regex(/^[\d.]{0,13}$/)
    .optional(),
  Zahlungsbedingung: z
    .string()
    .regex(/^[\d]{0,3}$/)
    .optional(),
  'Fälligkeit in Tagen (Debitor)': z
    .string()
    .regex(/^[\d]{0,3}$/)
    .optional(),
  'Skonto in Prozent (Debitor)': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  'Kreditoren-Ziel 1 (Tage)': z
    .string()
    .regex(/^[\d]{0,2}$/)
    .optional(),
  'Kreditoren-Skonto 1 (%)': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  'Kreditoren-Ziel 2 (Tage)': z
    .string()
    .regex(/^[\d]{0,2}$/)
    .optional(),
  'Kreditoren-Skonto 2 (%)': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  'Kreditoren-Ziel 3 Brutto (Tage)': z
    .string()
    .regex(/^[\d]{0,3}$/)
    .optional(),
  'Kreditoren-Ziel 4 (Tage)': z
    .string()
    .regex(/^[\d]{0,2}$/)
    .optional(),
  'Kreditoren-Skonto 4 (%)': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  'Kreditoren-Ziel 5 (Tage)': z
    .string()
    .regex(/^[\d]{0,2}$/)
    .optional(),
  'Kreditoren-Skonto 5 (%)': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  Mahnung: z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  Kontoauszug: z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Mahntext 1': z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Mahntext 2': z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Mahntext 3': z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  Kontoauszugstext: z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Mahnlimit Betrag': z
    .string()
    .regex(/^([1-9][\d.]{0,5}[,][\d]{2})$/)
    .optional(),
  'Mahnlimit %': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  Zinsberechnung: z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Mahnzinssatz 1': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  'Mahnzinssatz 2': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  'Mahnzinssatz 3': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  Lastschrift: z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Leerfeld 7': z.string().regex(/^(.)$/).optional().transform(addQuotes),
  Mandantenbank: z
    .string()
    .regex(/^[\d]{0,4}$/)
    .optional(),
  Zahlungsträger: z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 1': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 2': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 3': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 4': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 5': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 6': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 7': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 8': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 9': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 10': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 11': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 12': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 13': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 14': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Indiv. Feld 15': z
    .string()
    .regex(/^(.){0,40}$/)
    .optional()
    .transform(addQuotes),
  'Abweichende Anrede (Rechnungsadresse)': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Adressart (Rechnungsadresse)': z
    .string()
    .regex(/^[\w]{0,3}$/)
    .optional()
    .transform(addQuotes),
  'Straße (Rechnungsadresse)': z
    .string()
    .regex(/^(.){0,36}$/)
    .optional()
    .transform(addQuotes),
  'Postfach (Rechnungsadresse)': z
    .string()
    .regex(/^(.){0,10}$/)
    .optional()
    .transform(addQuotes),
  'Postleitzahl (Rechnungsadresse)': z
    .string()
    .regex(/^[\d]{0,10}$/)
    .optional()
    .transform(addQuotes),
  'Ort (Rechnungsadresse)': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Land (Rechnungsadresse)': z
    .string()
    .regex(/^[A-Z]{2}$/)
    .optional()
    .transform(addQuotes),
  'Versandzusatz (Rechnungsadresse)': z
    .string()
    .regex(/^(.){0,50}$/)
    .optional()
    .transform(addQuotes),
  'Adresszusatz (Rechnungsadresse)': z
    .string()
    .regex(/^(.){0,36}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Zustellbezeichnung 1 (Rechnungsadresse)': z
    .string()
    .regex(/^(.){0,50}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Zustellbezeichnung 2 (Rechnungsadresse)': z
    .string()
    .regex(/^(.){0,36}$/)
    .optional()
    .transform(addQuotes),
  'Adresse Gültig von (Rechnungsadresse)': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Adresse Gültig bis (Rechnungsadresse)': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankleitzahl 6': z
    .string()
    .regex(/^(.){0,8}$/)
    .optional()
    .transform(addQuotes),
  'Bankbezeichnung 6': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Bankkonto-Nummer 6': z
    .string()
    .regex(/^(.){0,10}$/)
    .optional()
    .transform(addQuotes),
  'Länderkennzeichen 6': z
    .string()
    .regex(/^[\w]{0,2}$/)
    .optional()
    .transform(addQuotes),
  'IBAN-Nr. 6': z
    .string()
    .regex(/^(.){0,34}$/)
    .optional()
    .transform(addQuotes),
  'Leerfeld 8': z.string().regex(/^(.)$/).optional().transform(addQuotes),
  'SWIFT-Code 6': z
    .string()
    .regex(/^(.){0,11}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Kontoinhaber 6': z
    .string()
    .regex(/^(.){0,70}$/)
    .optional()
    .transform(addQuotes),
  'Kennz. Hauptbankverb. 6': z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Bankverb. 6 Gültig von': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankverb. 6 Gültig bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankleitzahl 7': z
    .string()
    .regex(/^(.){0,8}$/)
    .optional()
    .transform(addQuotes),
  'Bankbezeichnung 7': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Bankkonto-Nummer 7': z
    .string()
    .regex(/^(.){0,10}$/)
    .optional()
    .transform(addQuotes),
  'Länderkennzeichen 7': z
    .string()
    .regex(/^[\w]{0,2}$/)
    .optional()
    .transform(addQuotes),
  'IBAN-Nr. 7': z
    .string()
    .regex(/^(.){0,34}$/)
    .optional()
    .transform(addQuotes),
  'Leerfeld 9': z.string().regex(/^(.)$/).optional().transform(addQuotes),
  'SWIFT-Code 7': z
    .string()
    .regex(/^(.){0,11}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Kontoinhaber 7': z
    .string()
    .regex(/^(.){0,70}$/)
    .optional()
    .transform(addQuotes),
  'Kennz. Hauptbankverb. 7': z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Bankverb. 7 Gültig von': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankverb. 7 Gültig bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankleitzahl 8': z
    .string()
    .regex(/^(.){0,8}$/)
    .optional()
    .transform(addQuotes),
  'Bankbezeichnung 8': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Bankkonto-Nummer 8': z
    .string()
    .regex(/^(.){0,10}$/)
    .optional()
    .transform(addQuotes),
  'Länderkennzeichen 8': z
    .string()
    .regex(/^[\w]{0,2}$/)
    .optional()
    .transform(addQuotes),
  'IBAN-Nr. 8': z
    .string()
    .regex(/^(.){0,34}$/)
    .optional()
    .transform(addQuotes),
  'Leerfeld 10': z.string().regex(/^(.)$/).optional().transform(addQuotes),
  'SWIFT-Code 8': z
    .string()
    .regex(/^(.){0,11}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Kontoinhaber 8': z
    .string()
    .regex(/^(.){0,70}$/)
    .optional()
    .transform(addQuotes),
  'Kennz. Hauptbankverb. 8': z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Bankverb. 8 Gültig von': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankverb. 8 Gültig bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankleitzahl 9': z
    .string()
    .regex(/^(.){0,8}$/)
    .optional()
    .transform(addQuotes),
  'Bankbezeichnung 9': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Bankkonto-Nummer 9': z
    .string()
    .regex(/^(.){0,10}$/)
    .optional()
    .transform(addQuotes),
  'Länderkennzeichen 9': z
    .string()
    .regex(/^[\w]{0,2}$/)
    .optional()
    .transform(addQuotes),
  'IBAN-Nr. 9': z
    .string()
    .regex(/^(.){0,34}$/)
    .optional()
    .transform(addQuotes),
  'Leerfeld 11': z.string().regex(/^(.)$/).optional().transform(addQuotes),
  'SWIFT-Code 9': z
    .string()
    .regex(/^(.){0,11}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Kontoinhaber 9': z
    .string()
    .regex(/^(.){0,70}$/)
    .optional()
    .transform(addQuotes),
  'Kennz. Hauptbankverb. 9': z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Bankverb. 9 Gültig von': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankverb. 9 Gültig bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankleitzahl 10': z
    .string()
    .regex(/^(.){0,8}$/)
    .optional()
    .transform(addQuotes),
  'Bankbezeichnung 10': z
    .string()
    .regex(/^(.){0,30}$/)
    .optional()
    .transform(addQuotes),
  'Bankkonto-Nummer 10': z
    .string()
    .regex(/^(.){0,10}$/)
    .optional()
    .transform(addQuotes),
  'Länderkennzeichen 10': z
    .string()
    .regex(/^[\w]{0,2}$/)
    .optional()
    .transform(addQuotes),
  'IBAN-Nr. 10': z
    .string()
    .regex(/^(.){0,34}$/)
    .optional()
    .transform(addQuotes),
  'Leerfeld 12': z.string().regex(/^(.)$/).optional().transform(addQuotes),
  'SWIFT-Code 10': z
    .string()
    .regex(/^(.){0,11}$/)
    .optional()
    .transform(addQuotes),
  'Abw. Kontoinhaber 10': z
    .string()
    .regex(/^(.){0,70}$/)
    .optional()
    .transform(addQuotes),
  'Kennz. Hauptbankverb. 10': z
    .string()
    .regex(/^[\d]$/)
    .optional()
    .transform(addQuotes),
  'Bankverb. 10 Gültig von': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Bankverb. 10 Gültig bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Nummer Fremdsystem': z
    .string()
    .regex(/^(.){0,15}$/)
    .optional()
    .transform(addQuotes),
  Insolvent: z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'SEPA-Mandatsreferenz 1': z
    .string()
    .regex(/^(.){0,35}$/)
    .optional()
    .transform(addQuotes),
  'SEPA-Mandatsreferenz 2': z
    .string()
    .regex(/^(.){0,35}$/)
    .optional()
    .transform(addQuotes),
  'SEPA-Mandatsreferenz 3': z
    .string()
    .regex(/^(.){0,35}$/)
    .optional()
    .transform(addQuotes),
  'SEPA-Mandatsreferenz 4': z
    .string()
    .regex(/^(.){0,35}$/)
    .optional()
    .transform(addQuotes),
  'SEPA-Mandatsreferenz 5': z
    .string()
    .regex(/^(.){0,35}$/)
    .optional()
    .transform(addQuotes),
  'SEPA-Mandatsreferenz 6': z
    .string()
    .regex(/^(.){0,35}$/)
    .optional()
    .transform(addQuotes),
  'SEPA-Mandatsreferenz 7': z
    .string()
    .regex(/^(.){0,35}$/)
    .optional()
    .transform(addQuotes),
  'SEPA-Mandatsreferenz 8': z
    .string()
    .regex(/^(.){0,35}$/)
    .optional()
    .transform(addQuotes),
  'SEPA-Mandatsreferenz 9': z
    .string()
    .regex(/^(.){0,35}$/)
    .optional()
    .transform(addQuotes),
  'SEPA-Mandatsreferenz 10': z
    .string()
    .regex(/^(.){0,35}$/)
    .optional()
    .transform(addQuotes),
  'Verknüpftes OPOS-Konto': z
    .string()
    .regex(/^[\d]{0,9}$/)
    .optional(),
  'Mahnsperre bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Lastschriftsperre bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  'Zahlungssperre bis': z
    .string()
    .regex(/^((0[1-9]|[1-2][\d]|3[0-1])(0[1-9]|1[0-2])([2])([0])([\d]{2}))$/)
    .optional(),
  Gebührenberechnung: z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Mahngebühr 1': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  'Mahngebühr 2': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  'Mahngebühr 3': z
    .string()
    .regex(/^([1-9][\d]{0,1}[,][\d]{2})$/)
    .optional(),
  Pauschalenberechnung: z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Verzugspauschale 1': z
    .string()
    .regex(/^([1-9][\d]{0,2}[,][\d]{2})$/)
    .optional(),
  'Verzugspauschale 2': z
    .string()
    .regex(/^([1-9][\d]{0,2}[,][\d]{2})$/)
    .optional(),
  'Verzugspauschale 3': z
    .string()
    .regex(/^([1-9][\d]{0,2}[,][\d]{2})$/)
    .optional(),
  'Alternativer Suchname': z
    .string()
    .regex(/^(.){0,50}$/)
    .optional()
    .transform(addQuotes),
  Status: z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Anschrift manuell geändert (Korrespondenzadresse)': z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Anschrift individuell (Korrespondenzadresse)': z
    .string()
    .regex(/^(.){0,306}$/)
    .optional()
    .transform(addQuotes),
  'Anschrift manuell geändert (Rechnungsadresse)': z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Anschrift individuell (Rechnungsadresse)': z
    .string()
    .regex(/^(.){0,306}$/)
    .optional()
    .transform(addQuotes),
  'Fristberechnung bei Debitor': z
    .string()
    .regex(/^[\d]$/)
    .optional(),
  'Mahnfrist 1': z
    .string()
    .regex(/^[\d]{0,3}$/)
    .optional(),
  'Mahnfrist 2': z
    .string()
    .regex(/^[\d]{0,3}$/)
    .optional(),
  'Mahnfrist 3': z
    .string()
    .regex(/^[\d]{0,3}$/)
    .optional(),
  'Letzte Frist': z
    .string()
    .regex(/^[\d]{0,3}$/)
    .optional(),
});

type DebitorenKreditoren = z.input<typeof debitorenKreditorenSchema>;

export function createDebitorenKreditoren(debitorenKreditoren: DebitorenKreditoren[]) {
  const debitorenKreditorenParsed = debitorenKreditoren.map((dk) => debitorenKreditorenSchema.parse(dk));

  const keys = debitorenKreditorenSchema.keyof().options;
  const header = keys.join(';');

  const values = debitorenKreditorenParsed.map((dk) => {
    const vals = keys.map((k) => dk[k]);
    return vals.join(';');
  });
  const body = values.join('\n');

  return `${header}\n${body}`;
}

export function createDebitorenKreditorenWithSensibleDefaults({
  header,
  elements,
}: {
  header: {
    formatName: 'Debitoren/Kreditoren';
    wjBeginn: string;
    beraternummer: string;
    mandantennummer: string;
    sachkontenlaenge: number;
  };
  elements: {
    konto: string;
    firmenname?: string;
    uidNumber?: string;
    countryCode?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    postalCode?: string;
  }[];
}) {
  const entries = elements.map((arg) => ({
    Konto: arg.konto,
    'Name (Adressatentyp Unternehmen)': arg.firmenname,
    Adressatentyp: '2', // Default: Unternehmen
    'EU-Mitgliedstaat': arg.uidNumber?.slice(0, 2)?.toUpperCase(),
    'EU-UStId': arg.uidNumber?.slice(2),
    Land: arg.countryCode,
    Straße: arg.addressLine1 || arg.addressLine2 ? `${arg.addressLine1} ${arg.addressLine2}` : undefined,
    Postleitzahl: arg.postalCode,
    Ort: arg.city,
  }));

  const headerString = createDatevHeaderWithSensibleDefaults({
    formatName: 'Debitoren/Kreditoren',
    wjBeginn: header.wjBeginn,
    beraternummer: header.beraternummer,
    mandantennummer: header.mandantennummer,
    sachkontenlaenge: header.sachkontenlaenge,
  });

  const body = createDebitorenKreditoren(entries);

  return `${headerString}${body}`;
}
