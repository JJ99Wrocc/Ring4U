import { parseStringPromise } from "xml2js";

export async function loadXML(url) {
  const response = await fetch(url);
  const text = await response.text();
  const data = await parseStringPromise(text, { explicitArray: false });
  return data;
}
