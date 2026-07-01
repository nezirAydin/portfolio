import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getOrganizationSchema,
  getSeoForRoute,
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

function upsertJsonLd(id, data) {
  let element = document.getElementById(id);

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
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", seo.ogImage);

    upsertCanonical(seo.canonical);
  }, [seo, locale]);

  useEffect(() => {
    upsertJsonLd("schema-organization", getOrganizationSchema(content));
    upsertJsonLd("schema-website", getWebSiteSchema());
  }, [content]);

  return null;
};

export default SeoHead;
