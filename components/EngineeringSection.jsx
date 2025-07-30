import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionHStack = motion(HStack);

const services = [
  "AI/ML",
  "App Development",
  "Web Development",
  "DevOps and Cloud Management",
  "Shopify Development",
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

export default function EngineeringSection() {
  return (
    <Box bg="black" color="white" px={8} py={20} minH="100vh">
      <VStack align="start" maxW="6xl" mx="auto" spacing={10}>
        {/* Title with icon */}
        <MotionHStack
          spacing={4}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <MotionHeading fontSize={["5xl", "6xl"]} fontWeight="bold">
            Engineering
          </MotionHeading>
          <Box bg="yellow.300" px={2} py={1} borderRadius="full" color="black">
            <Icon as={ArrowUpRight} />
          </Box>
        </MotionHStack>

        {/* Description */}
        <MotionText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          maxW="3xl"
          fontSize="lg"
          color="gray.400"
        >
          Bringing ideas to life with expert engineering, we create innovative,
          adaptable solutions that ensure your technology performs flawlessly.
          From developing robust infrastructures to tackling complex challenges,
          we deliver systems designed to evolve with your needs and support your
          long-term growth and success.
        </MotionText>

        {/* Button */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            colorScheme="whiteAlpha"
            variant="outline"
            borderRadius="full"
            px={6}
            py={4}
            _hover={{ bg: "whiteAlpha.300" }}
          >
            Learn more
          </Button>
        </MotionBox>

        {/* Services list */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          pt={8}
          w="full"
        >
          <VStack align="start" spacing={4}>
            {services.map((service, index) => (
              <MotionBox
                key={service}
                variants={itemVariant}
                borderTop="1px"
                borderColor="gray.700"
                pt={4}
                fontSize="lg"
              >
                <Text>
                  <Text as="span" color="gray.500" mr={3}>
                    {`0${index + 1}`}
                  </Text>
                  {service}
                </Text>
              </MotionBox>
            ))}
          </VStack>
        </MotionBox>
      </VStack>
    </Box>
  );
}
