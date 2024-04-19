import { Box, VStack, Heading, Text, Image, HStack, Container, UnorderedList, ListItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="gray.800" py={4}>
        <Container maxW="6xl">
          <Heading as="h1" color="white" size="2xl">
            Theodore Roosevelt
          </Heading>
          <Text color="gray.400" fontSize="xl">
            26th President of the United States
          </Text>
        </Container>
      </Box>

      {/* Hero */}
      <Box bg="gray.100" py={20}>
        <Container maxW="6xl">
          <HStack spacing={12} alignItems="flex-start">
            <Image borderRadius="lg" boxSize="sm" objectFit="cover" src="https://images.unsplash.com/photo-1585066039857-a33b12c14f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aGVvZG9yZSUyMHJvb3NldmVsdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzU0ODI0OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Theodore Roosevelt portrait" />
            <Box>
              <Heading as="h2" size="xl" mb={4}>
                Introduction
              </Heading>
              <Text fontSize="lg">Theodore Roosevelt Jr. (October 27, 1858 – January 6, 1919), often referred to as Teddy or by his initials, T. R., was an American politician, statesman, conservationist, naturalist, historian, and writer who served as the 26th president of the United States from 1901 to 1909. He previously served as the 25th vice president under William McKinley from March to September 1901, and as the 33rd governor of New York from 1899 to 1900.</Text>
            </Box>
          </HStack>
        </Container>
      </Box>

      {/* Biography */}
      <Box py={20}>
        <Container maxW="4xl">
          <VStack spacing={12} align="start">
            <Box>
              <Heading as="h2" size="xl" mb={4}>
                Early Life
              </Heading>
              <Text fontSize="lg">Roosevelt was born into a wealthy family in New York City. As a child, Roosevelt was sickly and suffered from asthma, but he overcame his health problems by embracing a strenuous lifestyle. He attended Harvard College, where he studied biology and boxed. After graduating, he attended Columbia Law School but left after one year to pursue a career in politics.</Text>
            </Box>
            <Box>
              <Heading as="h2" size="xl" mb={4}>
                Political Career
              </Heading>
              <Text fontSize="lg">Roosevelt was a Republican and first entered politics as a member of the New York State Assembly in 1882. He then served as a member of the United States Civil Service Commission, president of the New York City Board of Police Commissioners, and Assistant Secretary of the Navy under President William McKinley.</Text>
              <Text fontSize="lg" mt={4}>
                In 1898, Roosevelt resigned from the Navy Department to organize and lead a regiment in Cuba known as the Rough Riders during the Spanish-American War. He returned a war hero and was elected governor of New York in 1898. He was nominated for vice president in 1900 and took office in March 1901. He became president following the assassination of William McKinley in September 1901.
              </Text>
            </Box>
            <Box>
              <Heading as="h2" size="xl" mb={4}>
                Presidency
              </Heading>
              <Text fontSize="lg">As president, Roosevelt worked to break up corporate monopolies, conserve natural resources, and build the Panama Canal. He expanded the Navy and sent the Great White Fleet on a world tour to project American naval power. After 1906, he moved to the left, attacking big business, proposing a welfare state, and supporting labor unions.</Text>
              <Text fontSize="lg" mt={4}>
                Roosevelt coined the phrase "Square Deal" to describe his domestic agenda, emphasizing that the average citizen would get a fair share under his policies. He was the first president to name a Jewish cabinet member. In foreign policy, Roosevelt focused on Central America where he began construction of the Panama Canal. He expanded the Navy and sent the Great White Fleet on a world tour to project the United States' naval power.
              </Text>
            </Box>
            <Box>
              <Heading as="h2" size="xl" mb={4}>
                Post-Presidency
              </Heading>
              <Text fontSize="lg">Roosevelt declined to run for re-election in 1908. After leaving office, he went on an African safari and then jumped back into politics. In 1912, he ran for president on a progressive ticket, but lost to Woodrow Wilson.</Text>
              <Text fontSize="lg" mt={4}>
                During World War I, he criticized President Wilson for keeping the country out of the war with Germany, and his offer to lead volunteers to France was rejected. Roosevelt considered running for president again in 1920, but his health was deteriorating. He died in his sleep on January 6, 1919.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Fun Facts */}
      <Box bg="gray.100" py={20}>
        <Container maxW="3xl">
          <Heading as="h2" size="2xl" mb={8}>
            Did You Know?
          </Heading>
          <UnorderedList spacing={3}>
            <ListItem>Roosevelt was the youngest person to become president at age 42 after the assassination of William McKinley in 1901.</ListItem>
            <ListItem>He was the first American to win a Nobel Peace Prize, which he received in 1906 for negotiating the end of the Russo-Japanese War.</ListItem>
            <ListItem>Roosevelt was an avid outdoorsman and is known for his conservation efforts. As president, he established 150 national forests, 51 federal bird reserves, 4 national game preserves, 5 national parks, and 18 national monuments.</ListItem>
            <ListItem>He was blind in his left eye due to an injury in a boxing match.</ListItem>
            <ListItem>Roosevelt read at least one book per day and could read two or three books in a day. He read tens of thousands of books in his lifetime.</ListItem>
          </UnorderedList>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" py={10} textAlign="center">
        <Text fontSize="lg" color="white">
          Theodore Roosevelt (1858-1919)
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
