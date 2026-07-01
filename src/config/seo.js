import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./site";

const ROUTE_SEO = {
  "/": (content) => ({
    title: content.meta.title,
    description: content.meta.description,
  }),
  "/skills": (content) => ({
    title: `${content.skills.pageTitle} | ${SITE_NAME}`,
    description: content.meta.description,
  }),
  "/experience": (content) => ({
    title: `${content.experience.pageTitle} | ${SITE_NAME}`,
    description: content.meta.description,
  }),
  "/projects": (content) => ({
    title: `${content.projects.pageTitle} | ${SITE_NAME}`,
    description: content.projects.intro,
  }),
  "/iutech": (content) => ({
    title: `${content.partner.pageTitle} | ${SITE_NAME}`,
    description: content.partner.paragraphs[0],
  }),
  "/bothbs": (content) => ({
    title: `${content.bothbs.pageTitle} | ${SITE_NAME}`,
    description: content.bothbs.paragraphs[0],
  }),
  "/hvac": (content) => ({
    title: `${content.rabahCo.pageTitle} | ${SITE_NAME}`,
    description: content.rabahCo.paragraphs[0],
  }),
  "/contact": (content) => ({
    title: `${content.contact.pageTitle} | ${SITE_NAME}`,
    description: content.contact.subtitle,
  }),
};

export function getSeoForRoute(pathname, content) {
  const resolver = ROUTE_SEO[pathname] || ROUTE_SEO["/"];
  const { title, description } = resolver(content);

  return {
    title,
    description,
    canonical: `${SITE_URL}${pathname === "/" ? "" : pathname}`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: content.meta.keywords,
  };
}

export function getOrganizationSchema(content) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    description: content.meta.description,
    areaServed: {
      "@type": "Country",
      name: "Syria",
    },
    knowsAbout: [
      "Software Engineering",
      "Internet of Things",
      "HVAC Ventilation Systems",
      "Digital Health",
      "Artificial Intelligence",
    ],
    serviceType: [
      "Custom Software Development",
      "IoT Solutions",
      "HVAC Systems",
      "Healthcare IT",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}
