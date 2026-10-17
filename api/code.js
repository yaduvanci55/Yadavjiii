export default async function handler(req, res) {
  try {
    const t = Date.now();
    const response = await fetch(`https://codes.asmultiverse.in/api/code?t=${t}`);
    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(text);
  } catch (error) {
    res.status(500).send('Error');
  }
}
