export class TimelineDateVO {
  private readonly date: Date;

  constructor(dateString: string) {
    const [dayRaw, monthRaw, yearRaw] = dateString.split('/');
    const day = Number(dayRaw);
    const month = Number(monthRaw);
    const year = Number(yearRaw);
    if (!this.isValidDay(day)) throw new Error('Dia inválido');
    if (!this.isValidMonth(month)) throw new Error('Mês inválido');
    if (!this.isValidYear(year)) throw new Error('Ano inválido');
    this.date = new Date(`${month}-${day}-${year}`);
  }

  getValue(): string {
    const date = `${this.date.getDate()}/${
      this.date.getMonth() + 1
    }/${this.date.getFullYear()}`;
    return date;
  }

  private isValidDay(day: number): boolean {
    return !(!day || day > 31 || day < 1);
  }

  private isValidMonth(month: number): boolean {
    return !(!month || month > 12 || month < 1);
  }

  private isValidYear(year: number): boolean {
    return !!year && year > 0;
  }
}
