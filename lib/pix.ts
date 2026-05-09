/**
 * Builds a "PIX Copia e Cola" / BRcode string per the Banco Central do Brasil
 * EMV-compatible specification. The resulting string is what gets encoded
 * into the QR code AND can also be copy-pasted into a Brazilian banking app.
 */

type PixInput = {
  pixKey: string;
  recipientName: string;
  recipientCity: string;
  amount: number; // BRL, decimal, 0 = any amount
  txid?: string; // Reference label, A-Z 0-9 only, max 25 chars
};

function tlv(id: string, value: string): string {
  const len = value.length.toString().padStart(2, "0");
  return id + len + value;
}

function crc16ccitt(payload: string): string {
  const polynomial = 0x1021;
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? ((crc << 1) ^ polynomial) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function sanitize(text: string, maxLen: number): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents
    .replace(/[^A-Za-z0-9 ]/g, "") // ASCII alphanum + space
    .toUpperCase()
    .trim()
    .slice(0, maxLen);
}

function sanitizeTxid(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^A-Za-z0-9]/g, "")
    .toUpperCase()
    .slice(0, 25) || "WEDDING";
}

export function buildPixBRCode({
  pixKey,
  recipientName,
  recipientCity,
  amount,
  txid,
}: PixInput): string {
  const merchantAccount =
    tlv("00", "BR.GOV.BCB.PIX") + tlv("01", pixKey.trim());

  const fields = [
    tlv("00", "01"),
    tlv("26", merchantAccount),
    tlv("52", "0000"),
    tlv("53", "986"), // BRL
    ...(amount > 0 ? [tlv("54", amount.toFixed(2))] : []),
    tlv("58", "BR"),
    tlv("59", sanitize(recipientName, 25) || "BENEFICIARIO"),
    tlv("60", sanitize(recipientCity, 15) || "BRASIL"),
    tlv("62", tlv("05", sanitizeTxid(txid ?? ""))),
  ];

  const partial = fields.join("") + "6304";
  return partial + crc16ccitt(partial);
}

export function isPixKeyConfigured(key: string): boolean {
  return Boolean(key) && !key.includes("REPLACE");
}
