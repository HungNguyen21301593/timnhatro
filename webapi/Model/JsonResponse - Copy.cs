using Newtonsoft.Json;

public class AccountInfoResult
{
    [JsonProperty("user_id")]
    public string UserId { get; set; }

    [JsonProperty("member_displayname")]
    public string MemberDisplayName { get; set; }

    [JsonProperty("member_id")]
    public string MemberId { get; set; }

    [JsonProperty("account_oid")]
    public string AccountOid { get; set; }

    [JsonProperty("start_time")]
    public long StartTime { get; set; }

    [JsonProperty("email_verified")]
    public string EmailVerified { get; set; }

    [JsonProperty("phone_verified")]
    public string PhoneVerified { get; set; }

    [JsonProperty("online_status")]
    public bool OnlineStatus { get; set; }

    [JsonProperty("online_time")]
    public long OnlineTime { get; set; }

    [JsonProperty("response_time")]
    public int ResponseTime { get; set; }

    [JsonProperty("response_rate")]
    public double ResponseRate { get; set; }

    [JsonProperty("response_time_text")]
    public string ResponseTimeText { get; set; }

    [JsonProperty("response_rate_text")]
    public string ResponseRateText { get; set; }
}

public class AccountInfoResponse
{
    [JsonProperty("status")]
    public string Status { get; set; }

    [JsonProperty("result")]
    public AccountInfoResult Result { get; set; }
}
