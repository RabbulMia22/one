"use client";

import { useEffect, useState } from "react";
import { saveConsent, getConsent } from "@/lib/cookies";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    saveConsent("accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    saveConsent("rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-lg z-50">
      <p className="text-sm mb-2 md:mb-0">
        🍪 We use cookies to improve your experience. Accept or reject cookies
        according to your preference.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
