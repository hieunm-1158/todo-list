import { extend, configure } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";
import  i18n  from "../i18n/i18n";

configure({
  defaultMessage: (field, values) => {
    console.log(field);
    console.log(values);
    // override the field name.
    // values._field_ = i18n.t(`fields.${field}`);
    // console.log(i18n.t(`fields.email`));
    console.log(i18n.t(`validation`));

    return i18n.t(`validation.${values._rule_}`, values);
  }
});

// Install required rule and message.
extend("required", required);

// Install email rule and message.
extend("email", email);

// Install min rule and message.
extend("min", min);

// custom rule
extend('odd', value => {
    return value % 2 !== 0;
});


extend('minmax', {
  validate(value, args) {
    const length = value.length;

    return length >= args.min && length <= args.max;
  },
  params: ['min', 'max'],
  message:"ê ê ê sai rồi "
});

extend('required2', {
    ...required,
    // the values param is the placeholders values
    message: (_, values) => i18n.$t('validations.messages.required', values)
  });