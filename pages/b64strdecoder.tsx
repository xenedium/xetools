import { Container, createStyles, Title, Textarea, Popover, Text } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
import { useClipboard } from '@mantine/hooks';
import { Base64ToText } from '../utility';

const useStyles = createStyles((theme) => ({
    container: {
        marginTop: -100
    },
    title: {
        fontWeight: 900,
        [theme.fn.smallerThan('sm')]: {
            fontSize: 24,
        },
    },
    textArea: {
        marginTop: 60
    }
}));


export default function B64StrDecoder() {
    const { classes } = useStyles();
    const clipboard = useClipboard();
    const [base64Input, setBase64Input] = useState<string>('');
    const [textOutput, setTextOutput] = useState<string>('');
    const [popoverOpened, setPopoverOpened] = useState<boolean>(false);

    const HandleInputStringChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setBase64Input(event.target.value);
        setTextOutput(Base64ToText(event.target.value));
    };

    return (
        <Container size='lg' py='xl' className={classes.container}>
            <Title order={2} className={classes.title} align="center" mt="sm">
                Convert a base 64 string into text
            </Title>

            <Textarea
                autosize
                size='md'
                label='Input :'
                placeholder='base64 input...'
                className={classes.textArea}
                value={base64Input}
                onChange={HandleInputStringChange}
            />
            <Popover opened={popoverOpened} onChange={setPopoverOpened}>
                <Popover.Target>
                    <Textarea
                        autosize
                        size='md'
                        label={'Text output (Click to copy) :'}
                        placeholder='Text output...'
                        className={classes.textArea}
                        readOnly
                        value={textOutput}
                        variant='filled'
                        onClick={() => {
                            setPopoverOpened(true);
                            clipboard.copy(textOutput);
                            setTimeout(() => setPopoverOpened(false), 1500);
                        }}
                    />
                </Popover.Target>
                <Popover.Dropdown>
                    <Text>Copied to clipboard !</Text>
                </Popover.Dropdown>
            </Popover>

        </Container>
    );
}