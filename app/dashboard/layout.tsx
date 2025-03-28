import { redirect } from 'next/navigation';
import Navbar from './navbar';
import { auth } from '@/auth';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth()
  const name = session?.user?.name
  if (!session) {
    return redirect('/signin')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userName={name ?? ""} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
