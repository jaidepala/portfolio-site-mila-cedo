import { Container, Image, Text, Box, Grid, Flex, Divider, Blockquote } from '@mantine/core';
import { IconHome, IconMail, IconPhone } from '@tabler/icons-react';


const Contact = () => {
    return (<Box w={'100%'} mx="auto">
        <Image
            src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg"
            radius="sm"
            pb='md'
        />
        <Divider size='lg' />
        <Container p='md'>
            <Grid>
                <Grid.Col span={4}>
                    <Flex direction='column' justify='center' align='center'>
                        <IconPhone />
                        <Text size='lg'>Phone</Text>
                        <Text size='md'>Phone</Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Flex direction='column' justify='center' align='center'>
                        <IconMail />
                        <Text size='lg'>Email</Text>
                        <Text size='md'>abc@email.com</Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Flex direction='column' justify='center' align='center'>
                        <IconHome />
                        <Text size='lg'>Address</Text>
                        <Text size='md'>
                            Address 1,<br />
                            Address 2,<br />
                            Address 3<br />
                        </Text>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Container>
        <Divider size='lg' />
        <Flex pt='md'>

            <Blockquote>
                Design is about flow..<br />
                Story is about emotion..<br />
                Cinema brings both these elements together to visually hold people’s minds and hearts.<br />That for me is Love and that again is my job.
            </Blockquote>
        </Flex>
    </Box>);
}

export default Contact;