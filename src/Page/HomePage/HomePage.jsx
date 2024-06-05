import { Box, Flex, Center, Image, Text, } from '@chakra-ui/react';
import { BiAbacus, BiAddToQueue, BiCalendarAlt, BiData, BiHome, BiVideo } from 'react-icons/bi';
import { BsBook, BsCalendar2Day, BsClock } from 'react-icons/bs';
import { TbDatabaseImport } from 'react-icons/tb';

const HomePage = () => {
    const RecentlyVisited = [
        {
            image: "https://www.wallpapers13.com/wp-content/uploads/2015/12/Nature-Lake-Bled.-Desktop-background-image-840x525.jpg",
            logo: <BiAddToQueue color='black' />,
            date: "2024-06-01",
            description: "React Native",
            id: "1"
        },
        {
            image: "https://www.wallpapers13.com/wp-content/uploads/2015/12/Winter-River-Nature-Trees-Landscape-HD-Wallpaper-840x525.jpg",
            logo: <BiHome color='black' />,
            date: "2024-06-02",
            description: "todo-list",
            id: "2"
        },
        {
            image: "https://wallpaperaccess.com/full/4723250.jpg",
            logo: <BiAbacus color='black' />,
            date: "2024-06-03",
            description: "Kegiatan Harini",
            id: "3"
        }
    ];

    const schedules = [
        {
            date: "Due, June 4",
            meetings: [
                {
                    title: "My First Meeting",
                    time: "09:00 AM"
                },
                {
                    title: "Launch",
                    time: "09:00 AM"
                }
            ]
        },
        {
            date: "tmr, June 5",
            meetings: [
                {
                    title: "Planning Session",
                    time: "10:00 AM"
                },
                {
                    title: "Team Stand-up",
                    time: "11:00 AM"
                }
            ]
        }
    ];

    return (
        <Box p="4" h={"100vh"} w={'full'} >
            <Center mb="4">
                <Box fontSize={'4xl'}>Good afternoon, Hafid</Box>
            </Center>
            <Box>
                <Flex align={'center'} gap={2} my={5}>
                    <Box><BsClock /></Box>
                    <Text>Recently visited</Text>
                </Flex>
                <Flex mb="4" gap={2}>
                    {RecentlyVisited.map((item) => (
                        <Box key={item.id} bg={'gray.100'} h={"150px"} w={"170px"} borderRadius={'xl'} position="relative">
                            <Box h={'30%'} bg="gray.300" borderTopRadius={'xl'}>
                                <Image src={item.image} alt={`Image ${item.id}`} borderTopRadius={'xl'} objectFit="cover" h="100%" w="100%" />
                            </Box>
                            <Box position="absolute" top="30%" left="20%" transform="translate(-50%, -50%)" boxSize={"20px"} >
                                {item.logo}
                            </Box>
                            <Box p={3} fontSize={'md'} textAlign="center">
                                {item.description}
                            </Box>
                            <Box p={3} fontSize={'xs'} textAlign="center">
                                {item.date}
                            </Box>
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Box>
                <Flex align={'center'} gap={2} my={5}>
                    <Box><BsBook /></Box>
                    <Text>Upcomming events</Text>
                </Flex>
                <Flex mb="4" gap={2}>
                    {RecentlyVisited.map((item) => (
                        <Box key={item.id} bg={'gray.100'} h={"150px"} w={"170px"} borderRadius={'xl'} position="relative">
                            <Box h={'30%'} bg="gray.300" borderTopRadius={'xl'}>
                                <Image src={item.image} alt={`Image ${item.id}`} borderTopRadius={'xl'} objectFit="cover" h="100%" w="100%" />
                            </Box>
                            <Box position="absolute" top="30%" left="20%" transform="translate(-50%, -50%)" boxSize={"20px"} >
                                {item.logo}
                            </Box>
                            <Box p={3} fontSize={'md'} textAlign="center">
                                {item.description}
                            </Box>
                            <Box p={3} fontSize={'xs'} textAlign="center">
                                {item.date}
                            </Box>
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Box>
                <Flex align={'center'} gap={2} my={5}>
                    <Box><BiCalendarAlt /></Box>
                    <Text>Upcoming Events</Text>
                </Flex>
                <Flex mb="4" gap={2}>
                    <Flex h={"250px"} w={"100%"} borderRadius={'xl'} border={'1px solid'}>
                        <Box justify={'center'} alignItems={'center'} h={"100%"} w={"50%"} p={5} mx="auto">
                            <Box p={2}>
                                <BsCalendar2Day size={'50px'} />
                            </Box>
                            <Box p={2}>
                                <Text fontSize={'small'} color={'black'}>
                                    See your upcoming events and join meetings from Home.
                                </Text>
                            </Box>
                            <Box>
                                <Text p={2} w={'50%'} borderRadius={'lg'} fontSize={'small'} color={'black'} _hover={{ cursor: 'pointer', bg: 'blue', color: 'white' }}>
                                    Connection To Google Calendar
                                </Text>
                            </Box>
                        </Box>
                        <Box h={"100%"} w={"50%"} borderLeft={'1px solid'} >
                            {schedules.map((item, i) => (
                                <Flex key={i} p={3} gap={3} w={'100%'} justify={'space-between'}>
                                    <Box color={'gray.300'}>{item.date}</Box>
                                    <Box display="flex" flexDirection="column" gap={2}>
                                        {item.meetings.map((meeting, j) => (
                                            <Box key={j} borderLeft="1px solid" color={'gray.300'} px={3}>
                                                <Text ml="auto" color={'gray.300'}>{meeting.title}</Text>
                                                <Text ml="auto" color={'gray.300'}>{meeting.time}</Text>
                                            </Box>
                                        ))}
                                    </Box>
                                    <Box>
                                        <Flex gap={3} align="center" p={2} bg={'gray.50'} borderRadius={'lg'}>
                                            <BiVideo color={'gray.10'} />
                                            <Text color={'gray.300'}>Join Meeting</Text>
                                        </Flex>
                                    </Box>
                                </Flex>
                            ))}

                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Box>
                <Flex align={'center'} gap={2} my={5}>
                    <Box><BiData /></Box>
                    <Text>Home views</Text>
                </Flex>
                <Flex mb="4" gap={2}>
                    <Flex h={"250px"} w={"100%"} borderRadius={'xl'} border={'1px solid'}>
                        <Box justify={'center'} alignItems={'center'} h={"100%"} w={"50%"} p={5} mx="auto">
                            <Box p={2}>
                                <TbDatabaseImport size={'50px'} />
                            </Box>
                            <Box p={2}>
                                <Text fontSize={'small'} color={'black'}>
                                    Pin a Database view to quickly access it from Home
                                </Text>
                            </Box>
                            <Box>
                                <Text p={2} w={'50%'} borderRadius={'lg'} fontSize={'small'} color={'black'} _hover={{ cursor: 'pointer', bg: 'blue', color: 'white' }}>
                                    Select databases
                                </Text>
                            </Box>
                        </Box>
                        <Box h={"100%"} w={"50%"} borderLeft={'1px solid'} >
                            <Flex p={3} gap={3} w={'100%'} justify={'space-between'}>
                                <Box color={'gray.300'}></Box>
                                <Flex w={'100%'} justify={'space-between'} px={5}>
                                <Box>
                                <Text>Actifity</Text>
                                <Flex align={'center'} gap={2} borderTop={'1px solid'} p={2}>
                                <BiAbacus/>
                                <Text>Wake Up and freshen up</Text>
                                </Flex>
                                </Box>



                                <Box>Status</Box>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default HomePage;
