import { z } from 'zod';
import { createDatevHeaderWithSensibleDefaults } from './header';
import { addQuotes } from './utils';

export const buchungsstapelSchema = z.object({
  Umsatz: z.string().regex(/^(?!0{1,10}\,00)\d{1,10}\,\d{2}$/),
  'Soll-/Haben-Kennzeichen': z
    .string()
    .regex(/^(S|H)$/)
    .transform(addQuotes),
  'WKZ Umsatz': z
    .string()
    .regex(/^[A-Z]{3}$/)
    .optional()
    .transform(addQuotes),
  Kurs: z
    .string()
    .regex(/^([1-9]\d{0,3}[,]\d{2,6})$/)
    .optional(),
  Basisumsatz: z
    .string()
    .regex(/^(?!0{1,10}\,00)\d{1,10}\,\d{2}$/)
    .optional(),
  'WKZ Basisumsatz': z.string().optional().transform(addQuotes),
  Konto: z.string().regex(/^(?!0{1,9}$)(\d{1,9})$/),
  'Gegenkonto (ohne BU-Schlüssel)': z.string().regex(/^(?!0{1,9}$)(\d{1,9})$/),
  'BU-Schlüssel': z
    .string()
    .regex(/^\d{4}$/)
    .optional()
    .transform(addQuotes),
  Belegdatum: z.string().regex(/^(\d{4})$/),
  'Belegfeld 1': z
    .string()
    .regex(/^[\w$%\-\/]{0,36}$/)
    .optional()
    .transform(addQuotes),
  'Belegfeld 2': z
    .string()
    .regex(/^[\w$%\-\/]{0,12}$/)
    .optional()
    .transform(addQuotes),
  Skonto: z
    .string()
    .regex(/^([1-9]\d{0,7}[,]\d{2})$/)
    .optional(),
  Buchungstext: z
    .string()
    .regex(/^.{0,60}$/)
    .optional()
    .transform(addQuotes),
  Postensperre: z
    .string()
    .regex(/^(0|1)$/)
    .optional(),
  'Diverse Adressnummer': z
    .string()
    .regex(/^\w{0,9}$/)
    .optional()
    .transform(addQuotes),
  Geschäftspartnerbank: z
    .string()
    .regex(/^(\d{3})$/)
    .optional(),
  Sachverhalt: z
    .string()
    .regex(/^(\d{2})$/)
    .optional(),
  Zinssperre: z
    .string()
    .regex(/^(0|1)$/)
    .optional(),
  Beleglink: z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Art 1': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Inhalt 1': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Art 2': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Inhalt 2': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Art 3': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Inhalt 3': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Art 4': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Inhalt 4': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Art 5': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Inhalt 5': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Art 6': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Inhalt 6': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Art 7': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Inhalt 7': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Art 8': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Beleginfo-Inhalt 8': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'KOST1-Kostenstelle': z
    .string()
    .regex(/^[\w ]{0,36}$/)
    .optional()
    .transform(addQuotes),
  'KOST2-Kostenstelle': z
    .string()
    .regex(/^[\w ]{0,36}$/)
    .optional()
    .transform(addQuotes),
  'KOST-Menge': z
    .string()
    .regex(/^\d{12}[,]\d{4}$/)
    .optional(),
  'EU-Mitgliedstaat u. UStID (Bestimmung)': z
    .string()
    .regex(/^.{0,15}$/)
    .optional()
    .transform(addQuotes),
  'EU-Steuersatz (Bestimmung)': z
    .string()
    .regex(/^\d{2}[,]\d{2}$/)
    .optional(),
  'Abw. Versteuerungsart': z
    .string()
    .regex(/^(I|K|P|S)$/)
    .optional()
    .transform(addQuotes),
  'Sachverhalt L+L': z
    .string()
    .regex(/^(\d{1,3})$/)
    .optional(),
  'Funktionsergänzung L+L': z
    .string()
    .regex(/^\d{0,3}$/)
    .optional(),
  'BU 49 Hauptfunktiontyp': z.string().regex(/^\d$/).optional(),
  'BU 49 Hauptfunktionsnummer': z
    .string()
    .regex(/^\d{0,2}$/)
    .optional(),
  'BU 49 Funktionsergänzung': z
    .string()
    .regex(/^\d{0,3}$/)
    .optional(),
  'Zusatzinformation - Art 1': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 1': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 2': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 2': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 3': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 3': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 4': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 4': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 5': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 5': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 6': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 6': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 7': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 7': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 8': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 8': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 9': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 9': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 10': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 10': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 11': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 11': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 12': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 12': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 13': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 13': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 14': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 14': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 15': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 15': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 16': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 16': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 17': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 17': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 18': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 18': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 19': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 19': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Art 20': z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Zusatzinformation - Inhalt 20': z
    .string()
    .regex(/^.{0,210}$/)
    .optional()
    .transform(addQuotes),
  Stück: z
    .string()
    .regex(/^\d{0,8}$/)
    .optional(),
  Gewicht: z
    .string()
    .regex(/^(\d{1,8}[,]\d{2})$/)
    .optional(),
  Zahlweise: z
    .string()
    .regex(/^\d{0,2}$/)
    .optional(),
  Forderungsart: z
    .string()
    .regex(/^\w{0,10}$/)
    .optional()
    .transform(addQuotes),
  Veranlagungsjahr: z
    .string()
    .regex(/^(([2])([0])([0-9]{2}))$/)
    .optional(),
  'Zugeordnete Fälligkeit': z
    .string()
    .regex(/^((0[1-9]|[1-2][0-9]|3[0-1])(0[1-9]|1[0-2])([2])([0])([0-9]{2}))$/)
    .optional(),
  Skontotyp: z.string().regex(/^\d$/).optional(),
  Auftragsnummer: z
    .string()
    .regex(/^.{0,30}$/)
    .optional()
    .transform(addQuotes),
  Buchungstyp: z
    .string()
    .regex(/^[A-Z]{2}$/)
    .optional()
    .transform(addQuotes),
  'USt-Schlüssel (Anzahlungen)': z
    .string()
    .regex(/^\d{0,2}$/)
    .optional(),
  'EU-Mitgliedstaat (Anzahlungen)': z
    .string()
    .regex(/^[A-Z]{2}$/)
    .optional()
    .transform(addQuotes),
  'Sachverhalt L+L (Anzahlungen)': z
    .string()
    .regex(/^\d{0,3}$/)
    .optional(),
  'EU-Steuersatz (Anzahlungen)': z
    .string()
    .regex(/^(\d{1,2}[,]\d{2})$/)
    .optional(),
  'Erlöskonto (Anzahlungen)': z
    .string()
    .regex(/^(\d{4,8})$/)
    .optional(),
  'Herkunft-Kz': z
    .string()
    .regex(/^[A-Z]{2}$/)
    .optional()
    .transform(addQuotes),
  Leerfeld: z
    .string()
    .regex(/^.{0,36}$/)
    .optional()
    .transform(addQuotes),
  'KOST-Datum': z
    .string()
    .regex(/^((0[1-9]|[1-2]\d|3[0-1])(0[1-9]|1[0-2])([2])([0])(\d{2}))$/)
    .optional(),
  'SEPA-Mandatsreferenz': z
    .string()
    .regex(/^.{0,35}$/)
    .optional()
    .transform(addQuotes),
  Skontosperre: z
    .string()
    .regex(/^[0|1]$/)
    .optional(),
  Gesellschaftername: z
    .string()
    .regex(/^.{0,76}$/)
    .optional()
    .transform(addQuotes),
  Beteiligtennummer: z
    .string()
    .regex(/^(\d{4})$/)
    .optional(),
  Identifikationsnummer: z
    .string()
    .regex(/^.{0,11}$/)
    .optional()
    .transform(addQuotes),
  Zeichnernummer: z
    .string()
    .regex(/^.{0,20}$/)
    .optional()
    .transform(addQuotes),
  'Postensperre bis': z
    .string()
    .regex(/^((0[1-9]|[1-2]\d|3[0-1])(0[1-9]|1[0-2])([2])([0])(\d{2}))$/)
    .optional(),
  'Bezeichnung SoBil-Sachverhalt': z
    .string()
    .regex(/^.{0,30}$/)
    .optional()
    .transform(addQuotes),
  'Kennzeichen SoBil-Buchung': z
    .string()
    .regex(/^(\d{1,2})$/)
    .optional(),
  Festschreibung: z
    .string()
    .regex(/^(0|1)$/)
    .optional(),
  Leistungsdatum: z
    .string()
    .regex(/^((0[1-9]|[1-2]\d|3[0-1])(0[1-9]|1[0-2])([2])([0])(\d{2}))$/)
    .optional(),
  'Datum Zuord. Steuerperiode': z
    .string()
    .regex(/^((0[1-9]|[1-2]\d|3[0-1])(0[1-9]|1[0-2])([2])([0])(\d{2}))$/)
    .optional(),
  Fälligkeit: z
    .string()
    .regex(/^((0[1-9]|[1-2]\d|3[0-1])(0[1-9]|1[0-2])([2])([0])(\d{2}))$/)
    .optional(),
  Generalumkehr: z
    .string()
    .regex(/^(0|1)$/)
    .optional()
    .transform(addQuotes),
  Steuersatz: z
    .string()
    .regex(/^(\d{1,2}[,]\d{2})$/)
    .optional(),
  Land: z
    .string()
    .regex(/^[A-Z]{2}$/)
    .optional()
    .transform(addQuotes),
  Abrechnungsreferenz: z
    .string()
    .regex(/^.{0,50}$/)
    .optional()
    .transform(addQuotes),
  'BVV-Position (Betriebsvermögensvergleich)': z
    .string()
    .regex(/^([1|2|3|4|5])$/)
    .optional(),
  'EU-Mitgliedstaat u. UStID (Ursprung)': z
    .string()
    .regex(/^.{0,15}$/)
    .optional()
    .transform(addQuotes),
  'EU-Steuersatz (Ursprung)': z
    .string()
    .regex(/^\d{2}[,]\d{2}$/)
    .optional(),
  'Abw. Skontokonto': z
    .string()
    .regex(/^(\d{1,9})$/)
    .optional(),
});

type Buchungsstapel = z.input<typeof buchungsstapelSchema>;

export function createBuchungsstapel(buchungsstapel: Buchungsstapel[]) {
  const buchungsstapelParsed = buchungsstapel.map((b) => buchungsstapelSchema.parse(b));

  const keys = buchungsstapelSchema.keyof().options;
  const header = keys.join(';');

  const values = buchungsstapelParsed.map((b) => {
    const vals = keys.map((k) => b[k]);
    return vals.join(';');
  });
  const body = values.join('\n');

  return `${header}\n${body}`;
}

export function createBuchungsstapelWithSensibleDefaults({
  header,
  elements,
}: {
  header: {
    formatName: 'Buchungsstapel';
    wjBeginn: string;
    beraternummer: string;
    mandantennummer: string;
    sachkontenlaenge: number;
    datumVon: string;
    datumBis: string;
  };
  elements: {
    umsatz: string;
    sollHabenKennzeichen: 'S' | 'H';
    konto: string;
    gegenKonto: string;
    buSchluessel: string;
    belegDatum: string;
    rechungsNummer?: string;
    belegLink?: string;
    buchungstext?: string;
  }[];
}) {
  const headerString = createDatevHeaderWithSensibleDefaults({
    formatName: header.formatName,
    wjBeginn: header.wjBeginn,
    beraternummer: header.beraternummer,
    mandantennummer: header.mandantennummer,
    sachkontenlaenge: header.sachkontenlaenge,
    datumVon: header.datumVon,
    datumBis: header.datumBis,
  });

  const entries = elements.map((arg) => ({
    Umsatz: arg.umsatz,
    'Soll-/Haben-Kennzeichen': arg.sollHabenKennzeichen,
    Konto: arg.konto,
    'Gegenkonto (ohne BU-Schlüssel)': arg.gegenKonto,
    'BU-Schlüssel': arg.buSchluessel,
    Belegdatum: arg.belegDatum,
    'Belegfeld 1': arg.rechungsNummer,
    Beleglink: arg.belegLink,
    Buchungstext: arg.buchungstext,
  }));

  const body = createBuchungsstapel(entries);

  return `${headerString}${body}`;
}
