"use server"

import prisma from "@/lib/prisma"
import { hashSync } from "bcrypt-ts"


export default async function registerAction(_prev: any, formData: FormData) {
  const entries = Array.from(formData.entries())
  const data = Object.fromEntries(entries) as {
    name: string
    email: string
    password: string
  }
  console.log(data)

  if (!data.email || !data.name || !data.password) {
    return {
      message: "Preencha todos os campos!",
      success: false
    }
  }

  const user = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  })

  if (user) {
    return {
      message: "Usuário já cadastrado!",
      success: false
    }
  }

  await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashSync(data.password)
    }
  })

  return {
    message: "Usuário cadastrado com sucesso!",
    success: true
  }

}