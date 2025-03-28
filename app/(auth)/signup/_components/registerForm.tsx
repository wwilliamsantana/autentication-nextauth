"use client"

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Form from "next/form"
import registerAction from './registerAction';
import { useActionState } from 'react';

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null)

  return (
    <>
      {state?.success === false && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-xs mb-3' role='alert'>
          <strong className='font-bold'>Erro! </strong>
          <span className='block sm:inline'>{state?.message}</span>
        </div>
      )}

      <Form action={formAction}>
        <div>
          <Label>Nome</Label>
          <Input type="text" name="name" placeholder="Fulano de Tal" />
        </div>
        <div>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="eu@exemplo.com" />
        </div>
        <div>
          <Label>Senha</Label>
          <Input type="password" name="password" placeholder="********" />
        </div>
        <div>
          <Button disabled={isPending} className="w-full mt-6" type="submit">
            Registrar
          </Button>
        </div>
      </Form>
    </>
  )
}