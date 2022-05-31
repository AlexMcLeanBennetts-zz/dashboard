import BrandingDesktop from "./BrandingDesktop";
import { createContext } from "react";

export const ThemeContext = createContext(null);

export default function LayoutHeader() {

    return (
        <>
            <header className="header">
                <div className="flex content-center max-w-xs">
                    <BrandingDesktop />
                </div>
            </header>

        </>
    );
}