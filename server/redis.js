import { Client } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(
      "redis://default:IL4kQnuVAoa99I0LiyzxWWEi9TE6fRzt@redis-13966.c82.us-east-1-2.ec2.cloud.redislabs.com:13966"
    );
    console.log(await client.isOpen());
  }
}

module.exports = { client, connect };
