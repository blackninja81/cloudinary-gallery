export type ImageResults = {
    event: "success";
    info: {
      id: string;
      batchId: string;
      asset_id: string;
      bytes: number;
      created_at: string;
      etag: string;
      folder: string;
      format: string;
      height: number;
      original_filename: string;
      path: string;
      placeholder: boolean;
      public_id: string;
      resource_type: string;
      secure_url: string;
      signature: string;
    };
  };