import { defineConfig } from "tinacms";
import { aboutFields } from "./templates";
import { contacteFields } from "./templates";
import { generalFields } from "./templates";
import { iniciFields } from "./templates";
import { projectesFields } from "./templates";
import { servicesFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const tinaClientId = process.env.TINA_CLIENT_ID || 'dev';
const tinaToken = process.env.TINA_RO_TOKEN || 'dev';

export default defineConfig({
  branch,
  clientId: tinaClientId,
  token: tinaToken,
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pàgines",
        name: "p_gines",
        path: "src/pages",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "json",
        label: "Site MetaData",
        name: "site_metadata",
        path: "",
				format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "site-config",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
    ],
  },
});
