import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const scriptUrl = process.env.CONTACT_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("CONTACT_SCRIPT_URL is not configured");

      return res.status(500).json({
        success: false,
        message: "Contact API is not configured.",
      });
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body:
        typeof req.body === "string"
          ? req.body
          : JSON.stringify(req.body),
    });

    const text = await response.text();

    let result: unknown;

    try {
      result = JSON.parse(text);
    } catch {
      result = {
        success: response.ok,
        message: text || "Request completed.",
      };
    }

    return res.status(response.ok ? 200 : response.status).json(result);
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to submit your request.",
    });
  }
}