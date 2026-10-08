import type { CategoryKind } from "@/components/CategoryTile";

/** The six canonical Nuvexa Picks categories. They match the Pinterest boards one to one. */
export const categories = [
  {
    slug: "home",
    kind: "home",
    name: "Home",
    text: "Quiet upgrades for the rooms you live in: storage, textiles, lighting and the details that make a space feel finished.",
  },
  {
    slug: "everyday-finds",
    kind: "everyday",
    name: "Everyday Finds",
    text: "Small, genuinely useful things for the kitchen, the desk and the daily routine.",
  },
  {
    slug: "gifts",
    kind: "gifts",
    name: "Gifts",
    text: "Thoughtful ideas for birthdays, holidays and the people who are hardest to shop for.",
  },
  {
    slug: "style",
    kind: "style",
    name: "Style",
    text: "Wardrobe pieces and accessories with lasting appeal, rather than a single season.",
  },
  {
    slug: "beauty",
    kind: "beauty",
    name: "Beauty",
    text: "Self-care and beauty finds chosen as much for the ritual as for the result.",
  },
  {
    slug: "tech",
    kind: "tech",
    name: "Tech",
    text: "Clever gadgets and accessories that earn their place on the desk, in the bag or at home.",
  },
] as const satisfies readonly { slug: string; kind: CategoryKind; name: string; text: string }[];

export type Category = (typeof categories)[number];
export type CategorySlug = Category["slug"];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
