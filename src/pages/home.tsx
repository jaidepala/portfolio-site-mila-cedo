import { Stack, LoadingOverlay, Loader } from '@mantine/core';
import useWorks, { WorksClass } from '../hooks/useWork';
import React from 'react';
import MasonryLayout from '../components/masonry.layout';

const Home = () => {

    const { data: works, isLoading: isWorksLoading } = useWorks();

    const list = works?.map(work => {
        return {
            ...work,
            isLoaded: false
        }
    }) ?? [];

    const [worksList = list, setWorksList] = React.useState<WorksClass[]>();

    const loadImage = (image: string) => {
        const newWorksList = worksList?.map(work => {
            if (work.image === image) {
                return {
                    ...work,
                    isLoaded: true
                };
            }
            return work;
        });
        setWorksList(newWorksList);
    };

    return (<Stack
        bg="var(--mantine-color-body)"
        align="stretch"
        justify="center"
        gap="md"
    >
        <LoadingOverlay visible={isWorksLoading} children={<Loader color="blue" />} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        {
            worksList.length > 0 && (
                <MasonryLayout list={worksList} loadImage={loadImage} />
            )
        }
    </Stack>);
}

export default Home;

