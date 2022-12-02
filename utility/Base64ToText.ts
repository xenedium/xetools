export function Base64ToText(base64: string): string {
    if (base64.match(/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/g)) return Buffer.from(base64, 'base64').toString('utf8');
    return 'Invalid input';
}