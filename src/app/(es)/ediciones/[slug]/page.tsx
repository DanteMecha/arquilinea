import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductView } from "@/components/pages/ProductView";
import { editions, getEditionBySlug } from "@/data/editions";
import { productMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return editions.map((edition) => ({ slug: edition.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const edition = getEditionBySlug(slug);

  return edition ? productMetadata(edition, "es") : {};
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const edition = getEditionBySlug(slug);

  if (!edition) {
    notFound();
  }

  return <ProductView edition={edition} locale="es" />;
}
