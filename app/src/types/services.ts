import { AxiosError } from 'axios';
import { MessageInstance } from 'twilio/lib/rest/api/v2010/account/message';

export interface MailInfo {
	text: string;
	subject: string;
	recipient: string;
}

export interface SmsInfo {
	text: string;
	recipient: string;
}
export type SendEmail = (mailInfo: MailInfo) => Promise<any>;

export type HttpError<TData> = AxiosError<TData>;

export type SendSms = (smsInfo: SmsInfo) => Promise<MessageInstance>;
