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
            <body>
                <Header/>
                {children}
            </body>
        </html>
    )
}