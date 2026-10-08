import {
  ArmchairIcon,
  CoffeeIcon,
  EyeglassesIcon,
  FlowerLotusIcon,
  GiftIcon,
  HeadphonesIcon,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";

export type CategoryKind = "home" | "everyday" | "gifts" | "style" | "beauty" | "tech";

/** One icon family (Phosphor, light weight) and one tone per category, used everywhere. */
const categoryStyle: Record<CategoryKind, { icon: Icon; tone: string }> = {
  home: { icon: ArmchairIcon, tone: "tile--sand" },
  everyday: { icon: CoffeeIcon, tone: "tile--sage" },
  gifts: { icon: GiftIcon, tone: "tile--ink" },
  style: { icon: EyeglassesIcon, tone: "tile--stone" },
  beauty: { icon: FlowerLotusIcon, tone: "tile--clay" },
  tech: { icon: HeadphonesIcon, tone: "tile--paper" },
};

type Props = { kind: CategoryKind; className?: string };

/** A tinted tile carrying the category icon. Purely decorative: the category name is always shown as text. */
export function CategoryTile({ kind, className }: Props) {
  const { icon: CategoryIcon, tone } = categoryStyle[kind];
  return (
    <span className={`tile ${tone} ${className ?? ""}`} aria-hidden="true">
      <CategoryIcon className="tile__icon" weight="light" />
    </span>
  );
}
