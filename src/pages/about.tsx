import { Flex, Text, Blockquote, Divider } from '@mantine/core';

const About = () => {
    return (<Flex direction="column">
        <Flex justify="center" align="center">
            <Text size="xl">
                About me
            </Text>
        </Flex>
        <Flex justify="flex-start" align="center">
            <Text size="lg">
                Hello
            </Text>
        </Flex>
        <Flex justify="center" align="center" direction='column'>
            <Divider my="md" />
            <Text size="xs" component='p'>
                I am <Text display='inline-block' td="underline" component='span'>Mila Cido</Text>, an interior designer based in Bombay who grew up looking at the stars much too often,so it was no surprise i found my way into the movies. I landed up as a set dresser working my way up to become a Production designer.
            </Text>
            <Divider my="md" />
            <Text size="xs">
                If you open your eyes and look at the nature, all you see is harmony. Harmony of colours, symmetry, structure and rhythm.
                That’s my Job, recreating that harmony within a modern world.
            </Text>
            <Divider my="md" />
            <Text size="xs">
                When I’m left in an empty home or a studio for long enough, you will have a piece of my imagination all over it.</Text>
            <Divider my="md" />
            <Blockquote>
                Design is about flow..<br />
                Story is about emotion..<br />
                Cinema brings both these elements together to visually hold people’s minds and hearts.<br />That for me is Love and that again is my job.
            </Blockquote>
            <Divider my="md" />
            <Text size="xs">
                I create worlds for people to enter in and fulfill their purpose. These worlds sometime belong to families to live in and sometimes a group of creative people called film makers use them to tell you a story. And I, sleep peacefully at night knowing my world is seen and through it, I am !
            </Text>
        </Flex>
    </Flex>);
}

export default About;