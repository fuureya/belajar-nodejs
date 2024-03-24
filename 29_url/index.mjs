import { URL } from "url";

const agil = new URL("https://agilamanesu.tech");
const agil2 = new URL("https://agilamanesu.tech?who=agil");

console.info(agil.toString());
console.info(agil.protocol);
console.info(agil.host);
console.info(agil.pathname);
console.info(agil.searchParams);

// mengubah url
const params = agil2.searchParams;
params.append('status', 'nodejs')
console.info(params.toString());