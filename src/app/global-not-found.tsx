import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/styles.css";

export const metadata: Metadata = {
  title: "404 — Arquilínea",
  description:
    "La página que buscás no existe. The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body>
        <main className="section">
          <div className="container not-found">
            <h1>404</h1>
            <p className="eyebrow">Página no encontrada · Page not found</p>
            <p>
              La página que buscás no existe o cambió de lugar.
              <br />
              <span lang="en">
                The page you are looking for doesn&apos;t exist or has moved.
              </span>
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/">
                Ir al inicio
              </Link>
              <Link className="btn btn-ghost" href="/en/" hrefLang="en">
                Go to home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
