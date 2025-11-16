import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Explicitly set the monorepo root to silence workspace root warnings
  // and ensure output file tracing resolves modules from the repository root.
  outputFileTracingRoot: path.join(__dirname, ".."),
};

export default nextConfig;
