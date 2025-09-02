import { describe, expect, it } from 'bun:test';
import { createBuchungsstapelWithSensibleDefaults, createDebitorenKreditorenWithSensibleDefaults } from '../src';
import { writeStringToFile } from '../src/file';
import { createDatevHeader, createDatevHeaderWithSensibleDefaults } from '../src/header';

describe('should', () => {
  it('test header', () => {
    const header = createDatevHeader({
      kennzeichen: 'EXTF',
      versionsnummer: 700,
      formatkategorie: 16,
      formatname: 'Buchungsstapel',
      formatversion: 2,
      erzeugtAm: '20240101120000000',
      importiert: '',
      herkunft: 'SV',
      exportiertVon: 'TEST',
      importiertVon: 'TEST',
      beraternummer: '1234567',
      mandantennummer: '12345',
      wjBeginn: '20240101',
      sachkontenlaenge: 4,
      datumVon: '20240101',
      datumBis: '20241231',
      bezeichnung: 'Test Export',
      diktatkuerzel: 'AB',
      buchungstyp: 1,
      rechnungslegungszweck: 0,
      festschreibung: 0,
      wkz: 'EUR',
      reserviert1: '',
      derivatskennzeichen: '',
      reserviert2: '',
      reserviert3: '',
      sachkontenrahmen: '04',
      idDerBranchenloesung: '1234',
      reserviert4: '',
      reserviert5: '',
      anwendungsinformation: 'Test',
    });

    const header2 = createDatevHeaderWithSensibleDefaults({
      formatName: 'Buchungsstapel',
      wjBeginn: '20240101',
      beraternummer: '1234567',
      mandantennummer: '12345',
      sachkontenlaenge: 4,
      datumVon: '20240101',
      datumBis: '20241231',
    });

    console.log(header);
    console.log(header2);
  });
});

describe.only('Create file', async () => {
  it('Create Buchungsstapel with sensible defaults', async () => {
    const fileContent = createBuchungsstapelWithSensibleDefaults({
      header: {
        formatName: 'Buchungsstapel',
        wjBeginn: '20240101',
        beraternummer: '1234567',
        mandantennummer: '12345',
        sachkontenlaenge: 4,
        datumVon: '20240101',
        datumBis: '20241231',
      },
      elements: [
        {
          umsatz: '0,01',
          sollHabenKennzeichen: 'S',
          konto: '1000',
          gegenKonto: '1200',
          buSchluessel: '0506',
          belegDatum: '0112',
          rechungsNummer: 'Rechnungsnummer',
          buchungstext: 'Buchungstext',
          belegLink: 'Beleg"link"',
        },
      ],
    });

    await writeStringToFile(fileContent, '../datev-demos/EXTF_Buchungsstapel.csv');
  });

  it('Create Debitoren/Kreditoren with sensible defaults', async () => {
    const fileContent = createDebitorenKreditorenWithSensibleDefaults({
      header: {
        formatName: 'Debitoren/Kreditoren',
        wjBeginn: '20240101',
        beraternummer: '1234567',
        mandantennummer: '12345',
        sachkontenlaenge: 4,
        datumVon: '20240101',
        datumBis: '20241231',
      },
      elements: [
        {
          konto: '1000',
          firmenname: 'Talentir GmbH',
          uidNumber: 'ATU910002001',
          countryCode: 'AT',
          addressLine1: 'Talentir GmbH',
          addressLine2: 'Wien',
          city: 'Wien',
          postalCode: '1010',
        },
      ],
    });

    await writeStringToFile(fileContent, '../datev-demos/EXTF_Debitoren_Kreditoren.csv');
  });
});
