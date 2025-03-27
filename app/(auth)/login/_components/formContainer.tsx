"use client"

import Form from "next/form"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function FormContainer() {
  return (
    <Form action={(data) => { console.log(data) }}>
      <div>
        <Label>Email</Label>
        <Input type="email" name="email" placeholder="eu@exemplo.com" />
      </div>
      <div>
        <Label>Senha</Label>
        <Input type="password" name="password" placeholder="********" />
      </div>
      <div>
        <Button className="w-full mt-6" type="submit">
          Login
        </Button>
      </div>
    </Form>
  )
}