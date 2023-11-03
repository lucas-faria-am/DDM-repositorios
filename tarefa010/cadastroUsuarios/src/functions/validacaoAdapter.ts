import { IValidacaoProtocol } from "./IValidacaoProtocol"
var validator = require('validator');

export default class validacaoAdapter implements IValidacaoProtocol {

    isEmail(email: string): boolean {
        console.log("a" + email);
        return validator.isEmail(email);
    }
    // isDate(data: string): boolean {
    //     return validator.isDate(data);
    // }
}