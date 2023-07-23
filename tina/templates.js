export function aboutFields() {
  return [
    {
      type: "string",
      name: "templateKey",
      label: "templateKey",
    },
    {
      type: "string",
      name: "title",
      label: "Títol (SEO)",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Descripció (SEO)",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Imatge",
    },
    {
      type: "object",
      name: "people",
      label: "Nosaltres",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Nom",
          required: true,
        },
        {
          type: "string",
          name: "summary",
          label: "Resum",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Descripció",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ];
}
export function contacteFields() {
  return [
    {
      type: "string",
      name: "templateKey",
      label: "templateKey",
    },
    {
      type: "string",
      name: "title",
      label: "Títol (SEO)",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Descripció (SEO)",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
      required: true,
    },
  ];
}
export function generalFields() {
  return [
    {
      type: "string",
      name: "templateKey",
      label: "templateKey",
    },
    {
      type: "string",
      name: "title",
      label: "Títol (SEO)",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Descripció (SEO)",
    },
  ];
}
export function iniciFields() {
  return [
    {
      type: "string",
      name: "templateKey",
      label: "templateKey",
    },
    {
      type: "string",
      name: "title",
      label: "Títol (SEO)",
    },
    {
      type: "string",
      name: "description",
      label: "Descripció (SEO)",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "hero",
      label: "Imatge ",
    },
    {
      type: "string",
      name: "arquitectura",
      label: "Arquitectura",
      list: true,
    },
    {
      type: "string",
      name: "enginyeria",
      label: "Enginyeria",
      list: true,
    },
    {
      type: "string",
      name: "interiorisme",
      label: "Interiorisme",
      list: true,
    },
  ];
}
export function projectesFields() {
  return [
    {
      type: "string",
      name: "templateKey",
      label: "templateKey",
    },
    {
      type: "string",
      name: "title",
      label: "Títol (SEO)",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Descripció (SEO)",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "object",
      name: "projectes",
      label: "Projectes",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Nom",
          required: true,
        },
        {
          type: "string",
          name: "category",
          label: "Categoria",
          options: ["rehabilitació", " habitatge", "espai comercial"],
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Descripció",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "image",
          name: "images",
          label: "Imatges",
          list: true,
        },
      ],
    },
  ];
}
export function servicesFields() {
  return [
    {
      type: "string",
      name: "templateKey",
      label: "templateKey",
    },
    {
      type: "string",
      name: "title",
      label: "Títol (SEO)",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Descripció (SEO)",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "services",
      label: "Serveis",
      list: true,
      fields: [
        {
          type: "string",
          name: "custom_id",
          nameOverride: "id",
          label: "id",
        },
        {
          type: "string",
          name: "title",
          label: "Nom",
          required: true,
        },
        {
          type: "string",
          name: "className",
          label: "className",
        },
        {
          type: "string",
          name: "description",
          label: "Descripció",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "string",
          name: "list",
          label: "Llistat",
          list: true,
        },
        {
          type: "object",
          name: "sections",
          label: "Seccions Extra",
          list: true,
          fields: [
            {
              type: "string",
              name: "title",
              label: "Títol",
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Descripció",
              ui: {
                component: "textarea",
              },
              required: true,
            },
            {
              type: "object",
              name: "list",
              label: "Llistat",
              list: true,
              fields: [
                {
                  type: "string",
                  name: "title",
                  label: "Ítem",
                  required: true,
                },
                {
                  type: "object",
                  name: "links",
                  label: "Enllaços",
                  list: true,
                  fields: [
                    {
                      type: "string",
                      name: "title",
                      label: "Nom",
                      required: true,
                    },
                    {
                      type: "string",
                      name: "url",
                      label: "URL",
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
