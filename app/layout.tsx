import Header from "./component/welcome/header.component";
import "./globals.css";

export const metadata = {
  title: "Smart deals. Your one stop ecommerce",
  description: "Customers buy and sell products",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <header>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </header>
            <body>
                <Header/>
                {children}
            </body>
        </html>
    )
}