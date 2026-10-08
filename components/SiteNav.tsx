"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

type NavCategory = { slug: string; name: string };

/**
 * Primary navigation. Desktop: three quiet links with a current-page state.
 * Phones: one "Menu" button that opens a panel with every category plus the legal pages.
 */
export function SiteNav({ categories }: { categories: NavCategory[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const categorySlug = pathname.split("/")[1] ?? "";
  const onCategory = categories.some((c) => c.slug === categorySlug);
  const links = [
    { href: "/#discover", label: "Categories", current: onCategory && categorySlug !== "gifts" },
    { href: "/gifts", label: "Gifts", current: categorySlug === "gifts" },
    { href: "/#about", label: "About", current: false },
  ];

  // Close on navigation (reset during render rather than in an effect).
  const [openedOn, setOpenedOn] = useState(pathname);
  if (openedOn !== pathname) {
    setOpenedOn(pathname);
    setOpen(false);
  }

  // Escape closes the panel and returns focus to the button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav aria-label="Primary" className="site-nav-wrap">
        <ul className="site-nav">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="site-nav__link"
                aria-current={item.current ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        ref={buttonRef}
        type="button"
        className="menu-button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <XIcon className="menu-button__icon" weight="light" aria-hidden="true" />
        ) : (
          <ListIcon className="menu-button__icon" weight="light" aria-hidden="true" />
        )}
        <span>{open ? "Close" : "Menu"}</span>
      </button>

      <div id={panelId} className="menu-panel" data-open={open} hidden={!open}>
        <nav aria-label="Menu" className="container menu-panel__inner">
          <p className="menu-panel__label">Categories</p>
          <ul className="menu-panel__categories" role="list">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${c.slug}`}
                  className="menu-panel__category"
                  aria-current={categorySlug === c.slug ? "page" : undefined}
                  onClick={close}
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="menu-panel__secondary" role="list">
            <li>
              <Link href="/#recent" onClick={close}>
                Recently picked
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={close}>
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" onClick={close} aria-current={pathname === "/privacy" ? "page" : undefined}>
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/disclosure" onClick={close} aria-current={pathname === "/disclosure" ? "page" : undefined}>
                Affiliate disclosure
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
