"use server"

import { signIn } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect"


export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: true,
      redirectTo: "/dashboard"
    })
    return {
      success: true
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }

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