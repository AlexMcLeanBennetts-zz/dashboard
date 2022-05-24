import BrandingDesktop from "./BrandingDesktop";
import BrandingMobile from "./BrandingMobile";
import { createContext } from "react";
import ReactSwitch from "react-switch";
import useDarkMode from "../../../hook/useDarkMode";

export const ThemeContext = createContext(null);
export default function LayoutHeader() {

    const [colourTheme, setTheme] = useDarkMode();

    const toggle = () => {
        setTheme(colourTheme);
    }

    return (
        <>
            <header className="header">
                <div className="flex content-center">
                    <BrandingDesktop />
                </div>
                <div className="mt-2">
                    <BrandingMobile />
                </div>
                <div className="place-content-end mt-3 lg:mt-5 align-middle flex">
                    <ReactSwitch onChange={toggle} checked={colourTheme === "dark"} />
                </div>
            </header>

        </>
    );
}