import { siteConfig } from "@/data/site-config";

/**
 * Footer component
 * Simple, centered footer with copyright text
 */
export function Footer() {
  return (
    <footer className="border-t border-[var(--color-bg-secondary)] bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-sm text-[var(--color-text-primary)] opacity-70">
            {siteConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
