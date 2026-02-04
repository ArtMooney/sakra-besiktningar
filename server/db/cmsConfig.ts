export const cmsTables = [
  {
    id: "static_content",
    name: "Static Content",
    viewMode: "list",
    backupRef: null,
  },
];

export const fieldsConfig = {
  static_content: {
    id: { type: "integer", label: "", required: true, hidden: true },
    title: { type: "text", label: "Title", required: true, hidden: false },
    content: {
      type: "json",
      label: "Content",
      required: false,
      hidden: false,
    },
    sortOrder: { type: "integer", label: "", required: true, hidden: true },
    createdAt: { type: "date", label: "", required: true, hidden: true },
    updatedAt: { type: "date", label: "", required: true, hidden: true },
  },
};

export const graphConfig = {};

const getSeoSchema = () => ({
  title: "text",
  description: "textarea",
  ogTitle: "text",
  ogDescription: "textarea",
  ogImage: "fileImg",
  twitterTitle: "text",
  twitterDescription: "textarea",
  twitterImage: "fileImg",
});

export const staticContentTypes = {
  "component - Home": {
    heading: {
      title: "text",
      subtitle: "text",
    },
    blob1: {
      title: "text",
      content: "textarea",
    },
    blob2: {
      title: "text",
      content: "textarea",
    },
    blob3: {
      title: "text",
      content: "textarea",
    },
  },
  "component - Navbar": {
    buttons: {
      home: "text",
      services: "text",
      contactUs: "text",
    },
  },
  "component - Footer": {
    buttons: {
      home: "text",
      services: "text",
      contactUs: "text",
    },
  },
  "component - CompanyInfo": {
    company: "text",
    address: "text",
    address2: "text",
    phone: "text",
    email: "text",
  },
  "component - Contact": {
    heading: {
      title: "text",
    },
    formTitleBlock: {
      title: "text",
      text: "textarea",
    },
    contactTel: {
      text: "text",
      phone: "text",
    },
    contactEmail: {
      text: "text",
      email: "text",
    },
    contactAddress: {
      title: "text",
      address: "text",
      address2: "text",
    },
  },
  "component - Services": {
    heading: {
      title: "text",
    },
    pointBlock1: {
      title: "text",
      text: "textarea",
    },
    pointBlock2: {
      title: "text",
      text: "textarea",
    },
    pointBlock3: {
      title: "text",
      text: "textarea",
    },
    pointBlock4: {
      title: "text",
      text: "textarea",
    },
    pointBlock5: {
      title: "text",
      text: "textarea",
    },
    pointBlock6: {
      title: "text",
      text: "textarea",
    },
    pointBlock7: {
      title: "text",
      text: "textarea",
    },
    AccordionsTitle: "text",
    Accordion1: {
      title: "text",
      text: "textarea",
    },
    Accordion2: {
      title: "text",
      text: "textarea",
    },
    Accordion3: {
      title: "text",
      text: "textarea",
    },
    Accordion4: {
      title: "text",
      text: "textarea",
    },
  },
  "SEO page - Index": getSeoSchema(),
  "SEO page - Services": getSeoSchema(),
  "SEO page - Contact": getSeoSchema(),
};
