"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface AssetContextType {
  assets: Record<string, string>;
  setAsset: (originalUrl: string, blobUrl: string) => void;
  setAllAssets: (assets: Record<string, string>) => void;
}

const AssetContext = createContext<AssetContextType | undefined>(undefined);

export function AssetProvider({ children }: { children: ReactNode }) {
  const [assets, setAssets] = useState<Record<string, string>>({});

  const setAsset = useCallback((originalUrl: string, blobUrl: string) => {
    setAssets((prev) => ({ ...prev, [originalUrl]: blobUrl }));
  }, []);

  const setAllAssets = useCallback((newAssets: Record<string, string>) => {
    setAssets(newAssets);
  }, []);

  return (
    <AssetContext.Provider value={{ assets, setAsset, setAllAssets }}>
      {children}
    </AssetContext.Provider>
  );
}

export function useAsset(originalUrl: string): string {
  const context = useContext(AssetContext);
  if (context === undefined) {
    throw new Error("useAsset must be used within an AssetProvider");
  }
  return context.assets[originalUrl] || originalUrl;
}

export function useAssetContext(): AssetContextType {
  const context = useContext(AssetContext);
  if (context === undefined) {
    throw new Error("useAssetContext must be used within an AssetProvider");
  }
  return context;
}
