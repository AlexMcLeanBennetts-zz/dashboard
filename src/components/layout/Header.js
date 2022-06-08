import BrandingDesktop from "./BrandingDesktop";
import { createContext } from "react";
import { DASHBOARD, AMEND_POLICY_DETAILS, VIEW_DETAILS, DOCUMENTS, PAYMENTS, CLAIMS, MULTICAR_QUOTE, REFERAL, QUOTES } from 'utils/constants/ActiveComponents.js';


export const ThemeContext = createContext(null);

export default function LayoutHeader({ setActiveComponent }) {
    const handleClickViewDetails = e => {
        e.preventDefault();
        setActiveComponent(VIEW_DETAILS);
    }
    const handleClickHome = e => {
        e.preventDefault();
        setActiveComponent(DASHBOARD);
    }
    return (
        <>
            <header className="flex justify-between items-center bg-gradient-to-b from-rose-900 to-rose-600 mb-10 px-10">
                <div className="flex content-center w-80">
                    <BrandingDesktop />
                </div>
                <div className="flex justify-around w-4/12">
                    <ul >
                        <li className="text-white font-bold text-lg"><button onClick={handleClickHome}>Home</button></li>
                    </ul>
                    <ul>
                        <li className="text-white font-bold text-lg"><button onClick={handleClickViewDetails}>Policy Details</button></li>
                    </ul>
                </div>
            </header>
        </>
    );
}