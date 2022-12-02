import { Container, createStyles, Title, Textarea, Popover, Text } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
import { useClipboard } from '@mantine/hooks';
import { TextToBase64 } from '../utility';

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


export default function B64StrEncoder() {
    const { classes } = useStyles();
    const clipboard = useClipboard();
    const [stringInput, setStringInput] = useState<string>('');
    const [base64StringOutput, setBase64StringOutput] = useState<string>('');
    const [popoverOpened, setPopoverOpened] = useState<boolean>(false);

    const HandleInputStringChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setStringInput(event.target.value);
        setBase64StringOutput(TextToBase64(event.target.value));
    };

    return (
        <Container size='lg' py='xl' className={classes.container}>
            <Title order={2} className={classes.title} align="center" mt="sm">
                Convert a string to base 64
            </Title>

            <Textarea
                autosize
                size='md'
                label='Input :'
                placeholder='String input...'
                className={classes.textArea}
                value={stringInput}
                onChange={HandleInputStringChange}
            />
            <Popover opened={popoverOpened} onChange={setPopoverOpened}>
                <Popover.Target>
                    <Textarea
                        autosize
                        size='md'
                        label={'Base64 output (Click to copy) :'}
                        placeholder='Base64 output...'
                        className={classes.textArea}
                        readOnly
                        value={base64StringOutput}
                        variant='filled'
                        onClick={() => {
                            setPopoverOpened(true);
                            clipboard.copy(base64StringOutput);
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