export function TextToBase64(text: string): string {
    return Buffer.from(text).toString('base64');
}