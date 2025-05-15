import dayjs from 'dayjs';
import { z } from 'zod';
import { addQuotes } from './utils';

// Source: https://developer.datev.de/de/file-format/details/datev-format/format-description/header
export const datevHeaderSchema = z.object({
  kennzeichen: z.enum(['EXTF', 'DTVF']).transform(addQuotes),
  versionsnummer: z.literal(700),
  formatkategorie: z.number().int(),
  formatname: z
    .enum([
      'Buchungsstapel',
      'Wiederkehrende Buchungen',
      'Debitoren/Kreditoren',
      'Sachkontenbeschriftungen',
      'Zahlungsbedingungen',
      'Diverse Adressen',
    ])
    .transform(addQuotes),
  formatversion: z.number().int(),
  erzeugtAm: z
    .string()
    .regex(
      /^([2])([0])([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])(2[0-3]|[01][0-9])([0-5][0-9])([0-5][0-9][0-9][0-9][0-9])$/,
    ),
  importiert: z.string().default(''),
  herkunft: z
    .string()
    .regex(/^\w{0,2}$/)
    .default('')
    .transform(addQuotes),
  exportiertVon: z
    .string()
    .regex(/^\w{0,25}$/)
    .transform(addQuotes),
  importiertVon: z
    .string()
    .regex(/^\w{0,25}$/)
    .default('')
    .transform(addQuotes),
  beraternummer: z.string().regex(/^(\d{4,6}|\d{7})$/),
  mandantennummer: z.string().regex(/^\d{1,5}$/),
  wjBeginn: z.string().regex(/^([2])([0])([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/),
  sachkontenlaenge: z.number().int(),
  datumVon: z.string().regex(/^([2])([0])([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/),
  datumBis: z.string().regex(/^([2])([0])([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/),
  bezeichnung: z
    .string()
    .regex(/^[\w.-/ ]{0,30}$/)
    .default('')
    .transform(addQuotes),
  diktatkuerzel: z
    .string()
    .regex(/^([A-Z]{2}){0,2}$/)
    .default('')
    .transform(addQuotes),
  buchungstyp: z.number().int(),
  rechnungslegungszweck: z.number().int(),
  festschreibung: z.number().int(),
  wkz: z
    .string()
    .regex(/^([A-Z]{3})$/)
    .transform(addQuotes),
  reserviert1: z.string().default(''),
  derivatskennzeichen: z.string().default('').transform(addQuotes),
  reserviert2: z.string().default(''),
  reserviert3: z.string().default(''),
  sachkontenrahmen: z
    .string()
    .regex(/^(\d{2}){0,2}$/)
    .default('')
    .transform(addQuotes),
  idDerBranchenloesung: z
    .string()
    .regex(/^\d{0,4}$/)
    .default(''),
  reserviert4: z.string().default(''),
  reserviert5: z.string().default('').transform(addQuotes),
  anwendungsinformation: z
    .string()
    .regex(/^.{0,16}$/)
    .default('')
    .transform(addQuotes),
});

export type DatevHeader = z.input<typeof datevHeaderSchema>;

export function createDatevHeader(header: DatevHeader) {
  const h = datevHeaderSchema.parse(header);
  const values = Object.values(h);
  return `${values.join(';')}\n`;
}

export function createDatevHeaderWithSensibleDefaults(header: {
  formatName:
    | 'Buchungsstapel'
    | 'Wiederkehrende Buchungen'
    | 'Debitoren/Kreditoren'
    | 'Sachkontenbeschriftungen'
    | 'Zahlungsbedingungen'
    | 'Diverse Adressen';
  beraternummer: string;
  mandantennummer: string;
  wjBeginn: string;
  sachkontenlaenge: number;
  datumVon: string;
  datumBis: string;
}) {
  const formatKategorie = {
    'Debitoren/Kreditoren': 16,
    Sachkontenbeschriftungen: 20,
    Buchungsstapel: 21,
    Zahlungsbedingungen: 46,
    'Diverse Adressen': 48,
    'Wiederkehrende Buchungen': 65,
  }[header.formatName];

  const formatVersion = {
    Buchungsstapel: 13,
    'Wiederkehrende Buchungen': 4,
    'Debitoren/Kreditoren': 5,
    Sachkontenbeschriftungen: 3,
    Zahlungsbedingungen: 2,
    'Diverse Adressen': 2,
  }[header.formatName];

  const erzeugtAm = dayjs().format('YYYYMMDDHHmmssSSS');

  return createDatevHeader({
    kennzeichen: 'EXTF',
    versionsnummer: 700,
    formatkategorie: formatKategorie,
    formatname: header.formatName,
    formatversion: formatVersion,
    erzeugtAm,
    importiert: '',
    herkunft: '',
    exportiertVon: 'Talentir',
    importiertVon: '',
    beraternummer: header.beraternummer,
    mandantennummer: header.mandantennummer,
    wjBeginn: header.wjBeginn,
    sachkontenlaenge: header.sachkontenlaenge,
    datumVon: header.datumVon,
    datumBis: header.datumBis,
    bezeichnung: '',
    diktatkuerzel: '',
    buchungstyp: 1,
    rechnungslegungszweck: 0,
    festschreibung: 0,
    wkz: 'EUR',
    reserviert1: '',
    derivatskennzeichen: '',
    reserviert2: '',
    reserviert3: '',
    sachkontenrahmen: '',
    idDerBranchenloesung: '',
    reserviert4: '',
    reserviert5: '',
    anwendungsinformation: '',
  });
}
