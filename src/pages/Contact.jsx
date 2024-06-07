import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box py={20}>
      <Container maxW="lg">
        <Heading as="h1" size="2xl" mb={8} textAlign="center">
          Contact Us
        </Heading>
        <VStack spacing={5}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>
          <FormControl id="subject" isRequired>
            <FormLabel>Subject</FormLabel>
            <Input placeholder="Subject" />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message" />
          </FormControl>
          <Button colorScheme="blue" size="lg" width="full">
            Submit
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;