import type { Metadata } from "next";
import { ProductView } from "@/components/pages/ProductView";
import { book } from "@/data/editions";
import { productMetadata } from "@/lib/metadata";

export const metadata: Metadata = productMetadata(book, "en");

export default function Page() {
  return <ProductView edition={book} locale="en" />;
}
