import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/config/site";

export function hasProfilePhoto(): boolean {
  const filePath = path.join(process.cwd(), "public", site.photoPath.replace(/^\//, ""));
  return existsSync(filePath);
}
