import { useEffect, useState } from "react";
import {
  normalizeSiteContent,
  SiteContent,
} from "@/data/siteContent";

const API_URL =
  import.meta.env.VITE_GOOGLE_SHEET_API_URL?.trim() ||
  "https://script.google.com/macros/s/AKfycbwN85r8NoTsKbzgTy6HY7VLUtxsTJUcDO4mtptqOj1QAnEdy2X0QeFGSYVq3nxlWRO6yA/exec";

const CACHE_KEY = "alfaastack-site-content-v3";
const CACHE_TTL = 5 * 60 * 1000;


type CachedContent = {
  timestamp: number;
  data: SiteContent;
};


/* =========================================================
   CACHE
========================================================= */

function readCache(): SiteContent | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);

    if (!raw) {
      return null;
    }

    const cached = JSON.parse(raw) as CachedContent;

    if (
      !cached.timestamp ||
      Date.now() - cached.timestamp > CACHE_TTL
    ) {
      return null;
    }

    return normalizeSiteContent(cached.data);

  } catch (error) {
    console.warn(
      "Could not read AlfaaStack content cache.",
      error
    );

    return null;
  }
}


/* =========================================================
   SITE CONTENT HOOK
========================================================= */

export function useSiteContent() {

  const [content, setContent] = useState<SiteContent>(
    () => normalizeSiteContent()
  );

  const [loading, setLoading] = useState(
    Boolean(API_URL)
  );


  useEffect(() => {

    if (!API_URL) {
      setLoading(false);
      return;
    }


    /* -----------------------------------------------------
       Load cached content immediately
    ----------------------------------------------------- */

    const cached = readCache();

    if (cached) {
      setContent(cached);
    }


    let cancelled = false;


    /* -----------------------------------------------------
       Fetch Google Sheet API
    ----------------------------------------------------- */

    async function load() {

      try {

        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          cache: "no-store",
        });


        if (!response.ok) {
          throw new Error(
            `Google Sheet API returned ${response.status}`
          );
        }


        const rawData = await response.json();


        if (cancelled) {
          return;
        }


        /* -------------------------------------------------
           Normalize company + developer portfolio data
        ------------------------------------------------- */

        const data = normalizeSiteContent(rawData);


        setContent(data);


        /* -------------------------------------------------
           Save latest data in browser cache
        ------------------------------------------------- */

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data,
          } satisfies CachedContent)
        );


      } catch (error) {

        console.warn(
          "AlfaaStack Google Sheet content could not be loaded. Using cached/local fallback.",
          error
        );

      } finally {

        if (!cancelled) {
          setLoading(false);
        }

      }

    }


    load();


    return () => {
      cancelled = true;
    };

  }, []);


  return {
    ...content,

    loading,

    connected: Boolean(API_URL),
  };
}