import '../globals.css'
import Header from "@/components/header/page";

interface HomeProps {
    readonly children: React.ReactNode;
}

const HomeRootLayout = ({ children }: HomeProps) => {

    return (
        <html lang="en">
            <body>
                <Header theme="gray" />
                <div className="flex justify-center items-center w-full h-full">
                    {children}
                </div>
            </body>
        </html>
    );
}

export default HomeRootLayout