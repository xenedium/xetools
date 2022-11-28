import {
    createStyles,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
} from '@mantine/core';

import { toolsList } from '../constants';
import { useRouter } from 'next/router';


const useStyles = createStyles((theme) => ({
    container : {
        marginTop: -60
    },
    title: {
        fontSize: 34,
        fontWeight: 900,
        [theme.fn.smallerThan('sm')]: {
            fontSize: 24,
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
        cursor: 'pointer',
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
        },
    },
}));

export default function IndexCards() {
    const { classes, theme } = useStyles();
    const router = useRouter();
    const tools = toolsList.map((tool) => (
        <Card key={tool.title} shadow="md" radius="md" p="xl" className={classes.card} withBorder onClick={() => router.push(tool.link)}>
            <tool.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
            <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
                {tool.title}
            </Text>
            <Text size="sm" color="dimmed" mt="sm">
                {tool.description}
            </Text>
        </Card>
    ));
    return (
        <Container size="lg" py="xl" className={classes.container} >
            <Title order={2} className={classes.title} align="center" mt="sm">
                Welcome to XeTools, free online tools
            </Title>

            <Text color="dimmed" className={classes.description} align="center" mt="md">
                Xetools is a free and open source website that contains converters, parsers formatters and much more...
            </Text>

            <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {tools}
            </SimpleGrid>
        </Container>
    );
}