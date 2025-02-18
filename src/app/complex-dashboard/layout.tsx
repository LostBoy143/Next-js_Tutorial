export default function DashboardLayout({
  children,
  analytics,
  teams,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  teams: React.ReactNode;
}) {
  return (
    <>
      <h1 className="bg-slate-500 text-white text-2xl text-center py-4 ">
        This page is to practice parallel routing
        in next js with codevolution.
      </h1>
      {children}
      <div className="flex gap-[20px]">
        <div className="h-[200px] w-[200px] border-2 border-black">
          {analytics}
        </div>
        <div className="h-[200px] w-[200px] border-2 border-black">
          {teams}
        </div>
      </div>
    </>
  );
}
