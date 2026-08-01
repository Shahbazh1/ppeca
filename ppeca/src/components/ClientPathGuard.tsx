"use client";

import { usePathname } from "next/navigation";

export default function ClientPathGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Only display content on the root/home route
  if (pathname !== "/") return null;

  return <>{children}</>;
}