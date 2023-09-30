using Newtonsoft.Json;
using System;
using System.Collections.Generic;

public class UrlMetaResponse
{
    [JsonProperty("title")]
    public string Title { get; set; }
    [JsonProperty("html")]
    public string Url { get; set; }

    [JsonProperty("description")]
    public string Description { get; set; }
    [JsonProperty("address")]
    public string Address { get; set; }
    [JsonProperty("images")]
    public List<string> Images { get; set; }
}
