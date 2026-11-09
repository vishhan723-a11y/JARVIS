// JARVIS backend - Cloudflare Worker (Phase 1)
// Needs: 1) Workers AI binding named "AI"   2) Secret named "JARVIS_TOKEN"

const SYSTEM_PROMPT =
  "You are JARVIS, a personal voice assistant. " +
  "Reply in the same language the user uses: English, Tamil, Thunglish (Tamil in English letters) or a mix. " +
  "Keep answers short and clear because they will be spoken aloud. " +
  "Never claim you did something on the phone unless the app confirmed it.";

const MODEL = "@cf/meta/llama-3.1-8b-instruct";

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Public health check: open this in a browser to test the Worker
    if (request.method === "GET" && (url.pathname === "/" || url.pathname === "/health")) {
      return json({ name: "JARVIS backend", status: "online", phase: 1 });
    }

    // Chat endpoint (needs the secret token)
    if (request.method === "POST" && url.pathname === "/chat") {
      const auth = request.headers.get("Authorization") || "";
      if (!env.JARVIS_TOKEN || auth !== "Bearer " + env.JARVIS_TOKEN) {
        return json({ error: "unauthorized" }, 401);
      }

      let body;
      try {
        body = await request.json();
      } catch (e) {
        return json({ error: "invalid JSON" }, 400);
      }

      const message = (body.message || "").toString().trim();
      if (!message) return json({ error: "message is required" }, 400);
      if (message.length > 2000) return json({ error: "message too long" }, 400);

      // Optional short history: [{role:"user"|"assistant", content:"..."}]
      const history = Array.isArray(body.history) ? body.history.slice(-10) : [];
      const safeHistory = history
        .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
        .map((m) => ({ role: m.role, content: m.content.slice(0, 1000) }));

      try {
        const result = await env.AI.run(MODEL, {
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...safeHistory,
            { role: "user", content: message },
          ],
          max_tokens: 400,
        });
        return json({ reply: result.response || "" });
      } catch (e) {
        return json({ error: "AI service error" }, 502);
      }
    }

    return json({ error: "not found" }, 404);
  },
};
