import { TextToBase64 } from '../utility';
import { describe, expect, test } from '@jest/globals';

describe('TextToBase64', () => {
    test('should return a valid base64 string', () => {
        const text = 'Hello World';
        const result = TextToBase64(text);
        expect(result).toBe('SGVsbG8gV29ybGQ=');
    });
});