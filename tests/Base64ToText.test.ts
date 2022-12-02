import { Base64ToText } from '../utility';
import { describe, expect, test } from '@jest/globals';

describe('Base64ToText', () => {
    test('should return a string', () => {
        const base64 = 'SGVsbG8gV29ybGQ=';
        const result = Base64ToText(base64);
        expect(result).toBe('Hello World');
    });
    test('should return "Invalid input"', () => {
        const base64 = 'This is not a valid base64 string';
        const result = Base64ToText(base64);
        expect(result).toBe('Invalid input');
    });
});