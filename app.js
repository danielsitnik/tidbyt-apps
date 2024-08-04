import fetch from "node-fetch";
import { writeFileSync } from "fs";

try {
  const result = await fetch("https://api.tidbyt.com/v0/apps");

  const data = await result.json();

  const apps = [];

  console.log(`Processing ${data.apps.length} apps.`);
  for (const app of data.apps) {
    apps.push({
      objectID: app.id,
      name: app.name,
      description: app.description,
      image: `https://prod.tidbyt.com/app-server/preview/${app.id}.webp`,
      developer: app.developer,
    });
  }

  writeFileSync("apps.json", JSON.stringify(apps));
} catch (err) {
  console.log(err);
  throw err;
}
