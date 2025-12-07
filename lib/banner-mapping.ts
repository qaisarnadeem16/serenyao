export const collectionBannerDefaults: Record<string, string> = {
  kids: "/assets/Banner_gesamt.29.9_/16.png",
  mindfulness: "/assets/Banner_gesamt.29.9_/49.png",
  "comfy-cute": "/assets/Banner_gesamt.29.9_/16.png", 
  seasons: "/assets/Banner_gesamt.29.9_/16.png", 
};

export function getBookBanner(collectionId: string, bookBanner?: string): string | undefined {
  return bookBanner || collectionBannerDefaults[collectionId];
}

