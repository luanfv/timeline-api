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

  describe('WHEN get value', () => {
    it('SHOULD return full date', () => {
      const date = new TimelineDateVO('01/02/2024');
      const expectedValue = '1/2/2024';
      expect(date.value).toEqual(expectedValue);
    });
  });

  describe('WHEN get day', () => {
    it('SHOULD return date day', () => {
      const date = new TimelineDateVO('01/02/2024');
      const expectedValue = 1;
      expect(date.day).toEqual(expectedValue);
    });
  });

  describe('WHEN get month', () => {
    it('SHOULD return date month', () => {
      const date = new TimelineDateVO('01/02/2024');
      const expectedValue = 2;
      expect(date.month).toEqual(expectedValue);
    });
  });

  describe('WHEN get year', () => {
    it('SHOULD return date year', () => {
      const date = new TimelineDateVO('01/02/2024');
      const expectedValue = 2024;
      expect(date.year).toEqual(expectedValue);
    });
  });
});
