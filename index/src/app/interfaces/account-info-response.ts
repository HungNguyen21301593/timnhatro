export interface AccountInfoResponse {
    user_id: string;
    memberDisplayName: string;
    member_id: string;
    account_oid: string;
    start_time: number;
    email_verified: string;
    phone_verified: string;
    online_status: boolean;
    online_time: number;
    response_time: number;
    response_rate: number;
    response_time_text: string;
    response_rate_text: string;
}
