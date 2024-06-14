import { TimelineDateVO } from './timeline-date.vo';

describe('TimelineDateVO unit tests', () => {
  describe('WHEN receive a BR date string format with invalid day (Dia inválido)', () => {
    it.each`
      day
      ${'-1'}
      ${-1}
      ${32}
      ${'32'}
      ${'abc'}
      ${'Ab@'}
      ${'--'}
      ${'/'}
      ${null}
      ${undefined}
    `('SHOULD throw an error (date = "$day/1/2024")', ({ day }) => {
      const date = `${day}/1/2024`;
      expect(() => new TimelineDateVO(date)).toThrow('Dia inválido');
    });
  });

  describe('WHEN receive a BR date string format with invalid month (Mês inválido)', () => {
    it.each`
      month
      ${'-1'}
      ${-1}
      ${13}
      ${'32'}
      ${'abc'}
      ${'Ab@'}
      ${'--'}
      ${'/'}
      ${null}
      ${undefined}
    `('SHOULD throw an error (date = "1/$month/2024")', ({ month }) => {
      const date = `1/${month}/2024`;
      expect(() => new TimelineDateVO(date)).toThrow('Mês inválido');
    });
  });

  describe('WHEN receive a BR date string format with invalid year', () => {
    it.each`
      year
      ${'-1'}
      ${-1}
      ${'abc'}
      ${'Ab@'}
      ${'--'}
      ${'/'}
      ${null}
      ${undefined}
    `('SHOULD throw an error (date = "1/1/$year")', ({ year }) => {
      const date = `1/1/${year}`;
      expect(() => new TimelineDateVO(date)).toThrow('Ano inválido');
    });
  });

  describe('getValue', () => {
    it('SHOULD return value received', () => {
      const date = new TimelineDateVO('01/01/2024');
      const expectedValue = '1/1/2024';
      expect(date.getValue()).toEqual(expectedValue);
    });
  });
});
