import Header from "./component/welcome/header.component";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header/>
                {children}
            </body>
        </html>
    )
}