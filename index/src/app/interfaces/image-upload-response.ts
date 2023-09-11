export interface ImageUploadResponse {
    result: {
      id: string;
      filename: string;
      uploaded: string;
      requireSignedURLs: boolean;
      variants: string[]; // Assuming variants can be an array of strings
    };
    success: boolean;
    errors: any[]; // You might want to specify the error structure more precisely
    messages: any[]; // You might want to specify the message structure more precisely
  }
  
  
  
  
  
  