import React from "react"
import { Link as GatsbyLink } from "gatsby"

import {
  VStack,
  Link,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Checkbox,
} from "@chakra-ui/react"
import { MotionButton } from "../../theme/utils"
import { useToast } from "@chakra-ui/react"
import { Formik, Form, Field } from "formik"

const ContactForm = () => {
  const toast = useToast()

  const placeholderStyles = {
    textTransform: "uppercase",
    color: "greyishBrown.500",
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <Formik
      initialValues={{
        nom: "",
        email: "",
        telefon: "",
        missatge: "",
        condicions: false,
      }}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contacte-web",
            ...values,
          }),
        })
          .then(() => {
            actions.resetForm()
            toast({
              title: "Missatge enviat.",
              description: "Aviat et respondrem.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          })
          .catch(error => alert(error))
          .finally(() => actions.setSubmitting(false))
      }}
      validate={values => {
        const errors = {}
        if (!values.condicions) {
          errors.condicions = "Has d'acceptar la política de privacitat."
        }
        return errors
      }}
    >
      {props => (
        <Form
          name="contacte-web"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />

          <VStack spacing={4}>
            <Field name="nom">
              {({ field, form }) => (
                <FormControl isRequired>
                  <Input
                    {...field}
                    id="nom"
                    type="text"
                    variant="flushed"
                    focusBorderColor="greyishBrown.500"
                    placeholder="nom"
                    _placeholder={placeholderStyles}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ field, form }) => (
                <FormControl isRequired>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    variant="flushed"
                    focusBorderColor="greyishBrown.500"
                    placeholder="correu electrònic"
                    _placeholder={placeholderStyles}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="telefon">
              {({ field, form }) => (
                <FormControl>
                  <Input
                    {...field}
                    id="telefon"
                    type="tel"
                    variant="flushed"
                    focusBorderColor="greyishBrown.500"
                    placeholder="telèfon"
                    _placeholder={placeholderStyles}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="missatge">
              {({ field, form }) => (
                <FormControl isRequired>
                  <Textarea
                    {...field}
                    id="missatge"
                    variant="flushed"
                    h={40}
                    focusBorderColor="greyishBrown.500"
                    placeholder="missatge"
                    _placeholder={placeholderStyles}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="condicions">
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.condicions && form.touched.condicions}
                >
                  <Checkbox
                    {...field}
                    id="condicions"
                    size="sm"
                    colorScheme="greyishBrown"
                  >
                    He llegit i accepto la{" "}
                    <Link
                      textTransform="uppercase"
                      to="politica-de-proteccio-de-dades"
                      title="Política de protecció de dades personals"
                      as={GatsbyLink}
                    >
                      política de protecció de dades
                    </Link>{" "}
                    i accepto el tractament de les meves dades personals per a
                    l'enviament d'informació que respongui a la consulta que he
                    plantejat.
                  </Checkbox>
                  <FormErrorMessage>{form.errors.condicions}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <MotionButton
              variant="custom-link"
              colorScheme="revell"
              alignSelf="flex-start"
              type="submit"
              isLoading={props.isSubmitting}
              loadingText="Enviant"
              whileTap={{ scale: 0.95 }}
            >
              Enviar
            </MotionButton>
          </VStack>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
