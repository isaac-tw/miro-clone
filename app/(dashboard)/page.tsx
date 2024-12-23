"use client";

import { useOrganization } from "@clerk/clerk-react";
import EmptyOrg from "./_components/empty-org";

const DashboardPage = () => {
  const { organization } = useOrganization();
  return (
    <div className="h-[calc(100%-80px)] flex-1 p-6">
      {organization ? <p>Board list</p> : <EmptyOrg />}
    </div>
  );
};

export default DashboardPage;
