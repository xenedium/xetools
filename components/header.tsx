import { createStyles, Header, Group, ActionIcon, Container, Burger, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconWorld, IconBrandInstagram } from '@tabler/icons';
import { headerLinks } from '../constants';
import { ButtonToggle } from './ButtonToggle';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    header : {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        height: 'auto'
    },
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,

        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'flex-start',
        },
    },

    links: {
        width: 260,

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    social: {
        width: 260,

        [theme.fn.smallerThan('sm')]: {
            width: 'auto',
            marginLeft: 'auto',
        },
    },

    burger: {
        marginRight: theme.spacing.md,

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));


export function HeaderMiddle() {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes, cx } = useStyles();

    const items = headerLinks.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: headerLinks[0].link === link.link })}
        >
            {link.label}
        </Link>
    ));

    return (
        <Header height={56} mb={120} className={classes.header}>
            <Container className={classes.inner}>
                <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
                <Group className={classes.links} spacing={5}>
                    {items}
                </Group>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon size="lg" component='a' href='https://github.com/xenedium'>
                        <IconBrandGithub size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" component='a' href='https://abderraziq.com'>
                        <IconWorld size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" component='a' href='https://www.instagram.com/xenedium'>
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                    <Space w="xl" />
                    <Space w="xl" />
                    <ButtonToggle />
                </Group>
            </Container>
        </Header>
    );
}