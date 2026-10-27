import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { createRootMetadata } from "@/lib/metadata";

export const metadata: Metadata = createRootMetadata();

export default function RootPage() {
  return (
    <main className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6">
        <p className="text-sm text-text-muted">
          <Link
            href="/en/"
            className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-[4px]"
          >
            Continue to {site.name.en}&apos;s portfolio
          </Link>
          {" · "}
          <Link
            href="/fa/"
            className="font-medium text-text underline-offset-4 hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-[4px]"
          >
            {site.name.fa}
          </Link>
        </p>
      </main>
  );
}
