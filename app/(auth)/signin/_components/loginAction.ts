"use server"

import { signIn } from "@/auth"


export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false
    })
    return {
      message: "Login efetuado com sucesso!",
      success: true
    }
  } catch (error) {

    if (error.type === "CrendentialsSignin") {
      return {
        message: "Dados de login inválidos.",
        success: false
      }
    }

    return {
      message: "Ops! algo deu errado.",
      success: false
    }
  }
}