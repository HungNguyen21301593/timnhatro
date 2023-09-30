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
        }
        public List<string> Urls { get; set; }

        public List<UrlMetaResponse> UrlMetaResults { get; set; }
        public string Key { get; set; }
    }

    public interface IKey
    {
        public string Key { get; set; }
    }

}