import { Avatar, Container, Group, MultiSelectProps, Table, Text } from '@mantine/core';
import { MultiSelect } from '@mantine/core';

import useBio from '../hooks/useBio';
import React from 'react';

export type CompanyClass = Record<
    string,
    { image: string; productionName: string }
>;

const productionCompaniesList: CompanyClass = {
    "Hotstar India / Baijayproductions": {
        image:
            "images/hotstar.jpeg",
        productionName: "Hotstar",
    },
    "Pocket Films": {
        image:
            "images/pocketfilms.jpg",
        productionName: "Pocket Films",
    },
    "Tips Industries Ltd": {
        image:
            "images/tips.png",
        productionName: "Tips Industries",
    },
    "One Life Studio": {
        image:
            "images/one_life_studio.png",
        productionName: "One Life Studio Industries",
    },
    "Yash Raj Films": {
        image:
            "images/yrf.svg",
        productionName: "YRF",
    },
    "Viacom 18": {
        image:
            "images/Viacom18_Studios.jpg",
        productionName: "Viacom 18",
    },
    "Excel Entertainment Pvt. Ltd.": {
        image:
            "images/Excel_Entertainment.jpg",
        productionName: "Excel Entertainment Pvt. Ltd.",
    },
    "Avinash Gowariker": {
        image:
            "images/Avinash_Gowariker.jpg",
        productionName: "Avinash Gowariker",
    },
};

const renderMultiSelectOption: MultiSelectProps['renderOption'] = ({ option }: any) => {

    const optValue = option.value;

    if (!optValue) return;

    return (
        <Group gap="sm">
            <Avatar
                src={productionCompaniesList[optValue].image}
                size={36}
                radius="xl" />
            <div>
                <Text size="sm">{optValue}</Text>
                <Text size="xs" opacity={0.5}>
                    {productionCompaniesList[optValue].productionName}
                </Text>
            </div>
        </Group>
    )
};

const Bio = () => {

    const { data: bio } = useBio();
    const [selectedCompany = [], setSelectedCompanyList] = React.useState<Array<string>>();

    const rows = bio?.filter(project => selectedCompany.length > 0 ? selectedCompany?.includes(project.productionCompany) : project).map((project) => (
        <Table.Tr key={project.id}>
            <Table.Td>{project.year}</Table.Td>
            <Table.Td>{project.projectName}</Table.Td>
            <Table.Td>{project.category}</Table.Td>
            <Table.Td>{project.description}</Table.Td>
            <Table.Td>{project.productionCompany}</Table.Td>
            <Table.Td>{project.description}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Container w='100%' p='sm' style={{ overflow: 'auto' }}>
            <MultiSelect
                data={[
                    'Hotstar India / Baijayproductions',
                    'Yash Raj Films',
                    'Pocket Films',
                    'One Life Studio',
                    'Tips Industries Ltd',
                    "Viacom 18",
                    "Excel Entertainment Pvt. Ltd.",
                    "Avinash Gowariker"
                ]}
                renderOption={renderMultiSelectOption}
                maxDropdownHeight={300}
                label="Search for production company"
                pb='sm'
                clearable
                onChange={setSelectedCompanyList}
            />
            <Table stickyHeader>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Year</Table.Th>
                        <Table.Th>Project Name</Table.Th>
                        <Table.Th>Category</Table.Th>
                        <Table.Th>Designation</Table.Th>
                        <Table.Th>Production Company</Table.Th>
                        <Table.Th>Description</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Container>
    );
};
export default Bio;