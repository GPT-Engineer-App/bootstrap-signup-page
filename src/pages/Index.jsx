import React from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh" py={12}>
      <Container maxW="md">
        <Box bg="white" p={8} borderRadius="lg" boxShadow="lg">
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="xl" textAlign="center">
              Sign Up
            </Heading>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button colorScheme="blue" size="lg">
              Sign Up
            </Button>
            <Text fontSize="md" color="gray.500" align="center">
              Already have an account? <a href="/login">Log in</a>
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
