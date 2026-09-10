import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function urlProyectoSupabase(valor) {
  return String(valor || "")
    .trim()
    .replace(/\/+$/, "")
    .replace(/\/rest\/v1$/i, "")
    .replace(/\/+$/, "");
}

const config = {
  supabaseUrl: urlProyectoSupabase(process.env.SUPABASE_URL),
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || "",
  aiProvider: process.env.AI_PROVIDER || "groq",
  aiKey: process.env.AI_KEY || "",
  aiKeyGroq: process.env.AI_KEY_GROQ || "",
  aiKeyGemini: process.env.AI_KEY_GEMINI || ""
};

writeFileSync(
  join(root, "docs", "config.js"),
  "window.IR_CONFIG = " + JSON.stringify(config, null, 2) + ";\n"
);
