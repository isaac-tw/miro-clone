import Navbar from "./_components/navbar";
import OrgSidebar from "./_components/org-sidebar";
import Sidebar from "./_components/sidebar";

interface DashboardPageProps {
  children: React.ReactNode;
}

const DashboardPage = ({ children }: DashboardPageProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="h-full pl-[60px]">
        <div className="flex h-full gap-x-3">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
