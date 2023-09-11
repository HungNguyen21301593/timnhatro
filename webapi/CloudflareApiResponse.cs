using System;
using System.Collections.Generic;

public class CloudflareApiResponse
{
  public Result Result { get; set; }
  public bool Success { get; set; }
  public List<object> Errors { get; set; }
  public List<object> Messages { get; set; }
}

public class Result
{
  public string Id { get; set; }
  public string Filename { get; set; }
  public DateTime Uploaded { get; set; }
  public bool RequireSignedURLs { get; set; }
  public List<string> Variants { get; set; }
}
