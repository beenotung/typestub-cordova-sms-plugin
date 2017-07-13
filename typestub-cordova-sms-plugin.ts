declare module sms {

  export type SMSOptions = string | {
    replaceLineBreaks: boolean
    android: {
      intent: string;
    }
  }

  export function send(phone: string, message: string, options: SMSOptions | void, success: Function, failure: Function);

  export function hasPermission(success: Function, failure: Function);
}
