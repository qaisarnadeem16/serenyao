import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting to Help",
  description: "",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

