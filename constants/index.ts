import { IconCode, IconCodeOff } from '@tabler/icons';

export const headerLinks = [
    {
        link: '/',
        label: 'Home'
    },
    {
        link: 'https://github.com/xenedium/xetools',
        label: 'Github'
    }
];

export const toolsList = [
    {
        title: 'Base64 string encoder',
        description: 'Convert a string to base64',
        icon: IconCode,
        link: '/b64strencoder'
    },
    {
        title: 'Base64 string decoder',
        description: 'Convert an encoded base64 string to ascii',
        icon: IconCodeOff,
        link: '/b64strdecoder'
    }
];