import { Divider, Flex, Image, Text } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import useWorks from "../hooks/useWork";
import { replaceAll } from "../utils/utils";
import { Navigate, useParams } from "react-router-dom";
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

const Project = () => {

    const params = useParams();

    const { data: works } = useWorks();
    const currentProject = works?.find((work) => replaceAll(work.title, ' ', '-') === params.projectName);

    if (!currentProject || currentProject === null) {
        return <Navigate to="/" />;
    }

    return (
        <Flex direction='column'>
            <Carousel
                withIndicators
                slideGap="md"
                loop
                align="start"
                slidesToScroll={1}>
                {
                    currentProject.list?.map(
                        item => (
                            <Carousel.Slide key={item.title}>
                                <Image
                                    src={item.image}
                                    title={item.title}
                                    fit="contain"
                                    width='100%'
                                    height='100%'
                                    p='sm'
                                />
                            </Carousel.Slide>
                        )
                    )
                }
            </Carousel>
            <Divider size='md' pt='sm' />
            <Text size="md">
                The stable life of a elderly woman take a sharp turn as a strange girl enters her life.

                <Divider size='sm' />
                The strange girl claims the elderly woman is the descendant of a lineage of warriors who have protected the world throughout history. The time has come to step in the footsteps of these ancestors and help protect the world of today. Unsure about everything, including this strange girl, the elderly woman somewhat hesitantly agrees to the proposal, but there's no time to waste, a decision had to be made quickly.

                <Divider size='sm' />
                But what if this strange girl can't be trusted. Or what if the wrong person was picked for this. How could an ordinary elderly woman be this lucky, or unlucky, depending on the turnout. Time will tell.
            </Text>
        </Flex>
    );
}

export default Project;