import '../globals.css'
import Header from "@/components/header/page";

interface DashboardProps {
  readonly children: React.ReactNode;
}

const DashboardRootLayout = ({ children }: DashboardProps) => {

  return (
    <html lang="en">
      <body>
        <Header theme="light" />
        <div className="flex justify-center items-center w-full h-full">
          {children}
        </div>
      </body>
    </html>
  );
}

export default DashboardRootLayout