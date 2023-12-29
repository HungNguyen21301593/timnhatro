using System;
using System.Collections.Generic;
using Newtonsoft.Json;

public class ListingInfo
{
    [JsonProperty("title")]
    public string Title { get; set; }

    [JsonProperty("images")]
    public List<string> Images { get; set; } 

    [JsonProperty("list_id")] 
    public long ListId { get; set; }

    [JsonIgnore]
    public string Url { get { return $"https://www.chotot.com/{ListId}.htm"; } }
}

public class Ad
{
    [JsonProperty("info")]
    public ListingInfo Info { get; set; }
}


public class JsonResponse
{
    [JsonProperty("total")]
    public int Total { get; set; }
    
    [JsonProperty("ads")]
    public List<Ad> Ads { get; set; }

}