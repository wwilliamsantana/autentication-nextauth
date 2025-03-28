import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Form from "next/form"
import registerAction from './registerAction';

export default function RegisterForm() {
  return (
    <Form action={registerAction}>
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
        <Button className="w-full mt-6" type="submit">
          Registrar
        </Button>
      </div>
    </Form>
  )
}