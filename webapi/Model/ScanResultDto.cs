using System.Collections.Generic;

public class ScanResultDto: IKey
{
    public string Url { get; set; }
    
    public UrlMetaResponse UrlMetaResult { get; set; }
    public string Key { get; set; }
}

public interface IKey
{
    public string Key { get; set; }
}