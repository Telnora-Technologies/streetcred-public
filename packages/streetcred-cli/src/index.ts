#!/usr/bin/env node
import { StreetCredClient } from "@streetcred/sdk";

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Usage: streetcred <raw-address> [--base-url <url>] [--api-key <key>]");
    process.exit(1);
  }

  let rawAddress = args[0];
  let baseUrl = "http://localhost:3000";
  let apiKey = process.env.STREETCRED_API_KEY ?? "sc_dev_key";

  for (let i = 1; i < args.length; i += 2) {
    const flag = args[i];
    const value = args[i + 1];
    if (flag === "--base-url") baseUrl = value ?? baseUrl;
    if (flag === "--api-key") apiKey = value ?? apiKey;
  }

  const client = new StreetCredClient({ baseUrl, apiKey });

  try {
    const result = await client.parseAddress({
      raw_address: rawAddress,
      context: { country: "Nigeria" },
    });
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error((error as Error).message);
    process.exit(1);
  }
}

void main();
