using Newtonsoft.Json;
using System.Collections.Generic;


namespace webapi.Model
{
    [Serializable]
    public class ScanResultsDtoMessage : IKey
    {
        public ScanResultsDtoMessage()
        {
            Urls = new List<string>();
            UrlMetaResults = new List<UrlMetaResponse>();
            Status = Status.New;
            CreatedOn = DateTime.UtcNow;
        }

        [JsonProperty("urls")]
        public List<string> Urls { get; set; }

        [JsonProperty("status")]
        public Status Status { get; set; }

        [JsonProperty("urlMetaResults")]
        public List<UrlMetaResponse> UrlMetaResults { get; set; }

        [JsonProperty("key")]
        public string Key { get; set; }

        [JsonProperty("createdOn")]
        public DateTime CreatedOn { get; set; }
    }

    public interface IKey
    {
        public string Key { get; set; }
    }

    public enum Status
    {
        New,
        InProgress,
        Done,
        Error
    }
}