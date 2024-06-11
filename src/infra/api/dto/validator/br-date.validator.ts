import { Injectable } from '@nestjs/common';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
class BrDate implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    if (!value) return false;
    const [day, month, year] = value.split('/');
    const dayRegex = /^(0?[1-9]|[12][0-9]|3[01])$/;
    if (!dayRegex.test(day)) false;
    const monthRegex = /^(0?[1-9]|1[0-2])$/;
    if (!monthRegex.test(month)) return false;
    const yearRegex = /^([1-9]|[1-9][0-9]{1,3})$/;
    if (!yearRegex.test(year)) return false;
    return true;
  }
}

const isBrDate = (validationOptions: ValidationOptions) => {
  return (objeto: any, props: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: props,
      options: validationOptions,
      constraints: [],
      validator: BrDate,
    });
  };
};

export { BrDate, isBrDate };
