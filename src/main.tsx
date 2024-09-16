import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AllComponents from "./AllComponents.tsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HelmetProvider>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
        </HelmetProvider>
        <AllComponents />
    </StrictMode>
);
