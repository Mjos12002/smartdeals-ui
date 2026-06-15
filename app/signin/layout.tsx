// app/siginin/layout.tsx

export const metadata = {
    title: "Sign in",
    description: "The page used to sign in"
}

export default function SignInLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen overflow-y-scroll">
            {children}
        </div>
    );
}