import { describe, expect, it } from 'bun:test';
import Big from 'big.js';
import { createBuchungsstapelWithSensibleDefaults } from '../src';
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

function bla(bla?: string) {
  return ['asdf', bla, 'asdf'].join(';');
}
// file.ts
describe('file', async () => {
  it.only('should write to file', async () => {
    const header = createDatevHeaderWithSensibleDefaults({
      formatName: 'Buchungsstapel',
      wjBeginn: '20240101',
      beraternummer: '1234567',
      mandantennummer: '12345',
      sachkontenlaenge: 4,
      datumVon: '20240101',
      datumBis: '20241231',
    });

    const buchungsstapel = createBuchungsstapelWithSensibleDefaults({
      umsatz: new Big('0.01'),
      sollHabenKennzeichen: 'S',
    });

    const fileContent = `${header}${buchungsstapel}`;

    await writeStringToFile(fileContent, '../datev-demos/EXTF_Buchungsstapel.csv');
  });
});
