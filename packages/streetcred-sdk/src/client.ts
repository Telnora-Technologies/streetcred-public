import {
  ParseAddressRequest,
  ParseAddressResponse,
} from "@wizzybrass/streetcred-contracts";

export interface StreetCredClientOptions {
  baseUrl: string;
  apiKey: string;
}

export class StreetCredClient {
  constructor(private readonly options: StreetCredClientOptions) {}

  async parseAddress(
    request: ParseAddressRequest,
  ): Promise<ParseAddressResponse> {
    const response = await fetch(
      `${this.options.baseUrl}/api/v1/addresses/parse`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": this.options.apiKey,
        },
        body: JSON.stringify(request),
      },
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`StreetCred API error ${response.status}: ${error}`);
    }

    return (await response.json()) as ParseAddressResponse;
  }
}
