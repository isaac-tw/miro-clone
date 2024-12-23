"use client";

import { use } from "react";
import { useOrganization } from "@clerk/clerk-react";

import EmptyOrg from "./_components/empty-org";
import BoardList from "./_components/board-list";

interface DashboardPageProps {
  searchParams: Promise<{
    search?: string;
    favorite?: string;
  }>;
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const queryParams = use(searchParams);
  const { organization } = useOrganization();

  return (
    <div className="h-[calc(100%-80px)] flex-1 p-6">
      {organization ? (
        <BoardList orgId={organization.id} query={queryParams} />
      ) : (
        <EmptyOrg />
      )}
    </div>
  );
};

export default DashboardPage;
