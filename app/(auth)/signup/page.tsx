
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';

import Link from 'next/link';
import RegisterForm from './_components/registerForm';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function RegisterPage() {
  const session = await auth()

  if (session) {
    return redirect('/dashboard')
  }

  return (
    <>
      <Card className="max-w-sm w-full rounded-2xl mt-12">
        <CardHeader>
          <h2 className="text-xl font-bold">Cadastre-se</h2>
          <CardDescription>Faça seu cadastro gratuitamente.</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground mt-3">
        Já possui cadastro?{' '}
        <Link className="text-gray-800 hover:underline" href="/signin">
          Faça o login
        </Link>
        .
      </p>
    </>
  );
}
