const { StreetCredClient } = require("@streetcred/sdk");

async function main() {
  const client = new StreetCredClient({
    baseUrl: process.env.STREETCRED_BASE_URL || "http://localhost:3000",
    apiKey: process.env.STREETCRED_API_KEY || "sc_dev_key",
  });

  const rawAddress =
    process.argv[2] || "Behind Total Filling Station opposite Zenith Bank";

  try {
    const result = await client.parseAddress({
      raw_address: rawAddress,
      context: { country: "Nigeria", state: "Lagos", city: "Ikeja" },
    });
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

main();
