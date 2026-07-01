import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "../config/site";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getOrganizationSchema,
  getSeoForRoute,
  getServiceListSchema,
  getWebSiteSchema,
} from "../config/seo";

function upsertMeta(attribute, key, value) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertAlternateLink(hreflang, href) {
  const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "alternate");
    element.setAttribute("hreflang", hreflang);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let element = document.getElementById(id);

  if (!data) {
    if (element) {
      element.remove();
    }
    return;
  }

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

const SeoHead = ({ language, content }) => {
  const { pathname } = useLocation();
  const seo = getSeoForRoute(pathname, content);
  const locale = language === "ar" ? "ar_SY" : "en_US";
  const alternateLocale = language === "ar" ? "en_US" : "ar_SY";

  useEffect(() => {
    document.title = seo.title;

    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "keywords", seo.keywords);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", seo.canonical);
    upsertMeta("property", "og:image", seo.ogImage);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "Rabah-Tech");
    upsertMeta("property", "og:locale", locale);
    upsertMeta("property", "og:locale:alternate", alternateLocale);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", seo.ogImage);

    upsertCanonical(seo.canonical);
    upsertAlternateLink("en", `${SITE_URL}${pathname === "/" ? "" : pathname}`);
    upsertAlternateLink("ar", `${SITE_URL}${pathname === "/" ? "" : pathname}`);
    upsertAlternateLink("x-default", `${SITE_URL}${pathname === "/" ? "" : pathname}`);
  }, [seo, locale, alternateLocale, pathname]);

  useEffect(() => {
    upsertJsonLd("schema-organization", getOrganizationSchema(content));
    upsertJsonLd("schema-website", getWebSiteSchema());
    upsertJsonLd("schema-breadcrumb", getBreadcrumbSchema(pathname, content));
    upsertJsonLd("schema-services", pathname === "/skills" ? getServiceListSchema(content) : null);
    upsertJsonLd("schema-faq", pathname === "/" ? getFaqSchema(content) : null);
  }, [content, pathname]);

  return null;
};

export default SeoHead;
