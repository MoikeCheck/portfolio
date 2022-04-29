import Head from "next/head";
import NextLink from "next/link";
import Link from "next/link";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Image,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import Container from "../components/Container";

export default function Index() {
  return (
    <Container>
      <Head>
        <title>Home - Mike Wheatley</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm Mike Wheatley</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
            nunc, finibus sit amet purus quis, congue vulputate ipsum. Phasellus
            lobortis bibendum orci, quis imperdiet lectus imperdiet porttitor.
          </Text>
          <Image
            justifyContent="center"
            borderRadius="full"
            boxSize="200px"
            src="/assets/SelfImage.png"
            alt="Image of Mike Wheatley"
          />
          <Link href="/cv" passHref>
            <Button
              as="a"
              data-splitbee-event="Button Click"
              data-splitbee-event-type="CV"
            >
              View CV
            </Button>
          </Link>
        </Flex>
      </Stack>
      <Stack
        spacing={8}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Backend</Heading>
          <UnorderedList>
            <ListItem>PostgreSQL</ListItem>
            <ListItem>Jest</ListItem>
            <ListItem>SQL</ListItem>
            <ListItem>Node.js</ListItem>
            <ListItem>Firebase</ListItem>
            <ListItem>RESTful API</ListItem>
          </UnorderedList>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Frontend</Heading>
          <UnorderedList>
            <ListItem>JavaScript</ListItem>
            <ListItem>React</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>HTML</ListItem>
            <ListItem>Bootstrap</ListItem>
            <ListItem>Chakra UI</ListItem>
            <ListItem>Next.js</ListItem>
          </UnorderedList>
        </Box>

        <Box pb={9} p={5} m={20} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Additional</Heading>
          <UnorderedList>
            <ListItem>Git</ListItem>
            <ListItem>Kanban</ListItem>
            <ListItem>Agile</ListItem>
            <ListItem>Figma</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </Container>
  );
}