import React, { useEffect } from "react"

import {
  Box,
  Flex,
  Image,
  Container,
  Heading,
  VStack,
  Text,
  Icon,
  Spacer,
  Link,
} from "@chakra-ui/react"

import { Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MotionFlex, motionRevealConfig } from "../theme/utils"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { MdKeyboardArrowLeft } from "@react-icons/all-files/md/MdKeyboardArrowLeft"
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

import Layout from "../components/Layout"

const ProjectPage = ({ pageContext }) => {
  const { title, category, description, images } = pageContext

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const projectsButton = (
    <Link
      variant="button"
      colorScheme="white"
      display="block"
      w="fit-content"
      as={GatsbyLink}
      to="/projectes/"
      title="Els nostres projectes"
    >
      projectes
    </Link>
  )

  const settings = {
    className: "is-slider",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <Icon as={MdKeyboardArrowLeft} w={10} h={16} color="revell.500" />
    ),
    nextArrow: (
      <Icon as={MdKeyboardArrowRight} w={10} h={16} color="revell.500" />
    ),
  }

  return (
    <Layout title={title} description={`Projecte de ${category}`}>
      <Container variant="with-top-padding">
        <Heading as="h2" textTransform="capitalize">
          {category}
        </Heading>

        <Text>{title}</Text>

        <Flex mt={8} direction={["column", null, "row"]}>
          <MotionFlex
            ref={ref}
            direction="column"
            bg="revell.500"
            w={{ base: "full", md: 1 / 3, lg: 1 / 4 }}
            maxH={images[0].src.childImageSharp.gatsbyImageData.height}
            p={8}
            mr={[0, null, 8]}
            mb={[4, null, 0]}
            {...motionRevealConfig(controls, "right")}
          >
            <ReactMarkdown
              components={ChakraUIRenderer()}
              children={description}
            />

            <Spacer />

            <Box w="full" textAlign={["center", null, "left"]}>
              {projectsButton}
            </Box>
          </MotionFlex>

          <Box
            display={["none", null, "block"]}
            w={{ md: 2 / 3, lg: 3 / 4 }}
            px="25px"
          >
            <Slider {...settings}>
              {images.map((image, index) => (
                <Image
                  key={index}
                  h="full"
                  maxH={images[0].src.childImageSharp.gatsbyImageData.height}
                  as={GatsbyImage}
                  loading={index === 0 ? "eager" : "lazy"}
                  image={getImage(image.src)}
                  alt={image.alt}
                  imgStyle={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              ))}
            </Slider>
          </Box>

          <VStack display={["flex", null, "none"]} spacing={8}>
            {images.map((image, index) => (
              <Image
                key={index}
                width="full"
                as={GatsbyImage}
                loading={index === 0 ? "eager" : "lazy"}
                image={getImage(image.src)}
                alt={image.alt}
              />
            ))}
          </VStack>
        </Flex>
      </Container>
    </Layout>
  )
}

export default ProjectPage
