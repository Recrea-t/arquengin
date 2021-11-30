import React, { useEffect } from "react"

import {
  Box,
  Flex,
  Image,
  Container,
  Heading,
  VStack,
  Text,
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
import prevArrow from "../images/prevArrow.svg"
import nextArrow from "../images/nextArrow.svg"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "../utils/ChakraUIRenderer"

import Layout from "../components/Layout"

const ProjectPage = ({ pageContext }) => {
  const { title, category, description, images, gallery } = pageContext

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
      mx={{ base: "auto", md: "0" }}
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
    //variableWidth: true,
    //centerMode: true,
    prevArrow: <Image src={prevArrow} alt="previous arrow" h="64px" w="37px" />,
    nextArrow: <Image src={nextArrow} alt="next arrow" h="64px" w="37px" />,
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
            maxH={images[0].childImageSharp.gatsbyImageData.height}
            p={4}
            mr={[0, null, 8]}
            mb={[4, null, 0]}
            {...motionRevealConfig(controls, "right")}
          >
            <ReactMarkdown
              components={ChakraUIRenderer()}
              children={description}
            />

            <Spacer />

            <Box w="full" pt={4}>
              {projectsButton}
            </Box>
          </MotionFlex>

          <Box
            display={["none", null, "block"]}
            w={{ md: 2 / 3, lg: 3 / 4 }}
            px="37px"
          >
            <Slider {...settings}>
              {images.map((image, index) => (
                <Image
                  key={index}
                  w="full"
                  maxH={images[0].childImageSharp.gatsbyImageData.height}
                  as={GatsbyImage}
                  loading={index === 0 ? "eager" : "lazy"}
                  image={getImage(image)}
                  alt="imatge galeria"
                  objectFit="contain"
                  objectPosition="center"
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
                image={getImage(image)}
                alt="imatge galeria"
              />
            ))}
          </VStack>
        </Flex>
      </Container>
    </Layout>
  )
}

export default ProjectPage
