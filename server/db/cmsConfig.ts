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
  "page - Index": {
    header: {
      title: "text",
      subtitle: "text",
    },
    videoBlock: {
      title: "text",
      videoLinkSwe: "text",
      videoLinkEng: "text",
      poster: "fileImg",
    },
  },
  "component - Navbar": {
    buttons: {
      index: "text",
      mediaProduktion: "text",
      kollegor: "text",
      kundutlatanden: "text",
      varforOss: "text",
      priser: "text",
      kontaktaOss: "text",
    },
  },
  "SEO page - Index": getSeoSchema(),
};
