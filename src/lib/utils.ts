/**
 * Utility functions
 */

/**
 * Merges multiple class names, filtering out falsy values
 * Useful for conditional styling
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
