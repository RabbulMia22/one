import { getCookie, setCookie } from "cookies-next";

// Save consent choice
export const saveConsent = (value: "accepted" | "rejected") => {
  setCookie("cookie_consent", value, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  });
};

// Get consent choice
export const getConsent = (): string | null => {
  return (getCookie("cookie_consent") as string) || null;
};
