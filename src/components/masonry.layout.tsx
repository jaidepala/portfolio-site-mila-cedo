import { Image, Flex } from '@mantine/core';
import { WorksClass } from "../hooks/useWork";
import { useNavigate } from 'react-router-dom';
import { replaceAll } from '../utils/utils';

interface MasonryLayoutProps {
    list: WorksClass[];
    loadImage: Function;
}

const MasonryLayout = ({ list, loadImage }: MasonryLayoutProps) => {

    const navigate = useNavigate()

    return (
        <>
            {
                list.map(
                    work => (
                        <Flex
                            onClick={() => navigate(`/project/${replaceAll(work.title, ' ', '-')}`)}
                            key={work.image}
                            style={{ position: "relative", width: "100%", height: "auto" }}>
                            <Image
                                src={work.image}
                                alt={work.title}
                                title={work.title}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    cursor: 'pointer',
                                    /* opacity: !work.isLoaded ? 1 : 0,
                                    transition: "opacity 0.5s",
                                    filter: !work.isLoaded ? "none" : "blur(10px)" */
                                }}
                                onLoad={() => loadImage(work.image)}
                            />
                        </Flex>
                    )
                )
            }
        </>
    );
}

export default MasonryLayout;