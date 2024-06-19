import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { fullname, phone, simular, cpf, valorEntrada, cnh } = body;

    const emailContent = `
            <strong>Nome Completo:</strong> ${fullname} <br>
            <strong>Contato:</strong> ${phone} <br>
            ${simular ? `<strong>Simular Financiamento:</strong> ${simular ? "Sim" : "Não"} <br>` : ""}
            ${simular ? `<strong>CPF:</strong> ${cpf} <br>` : ""}
            ${simular ? `<strong>Valor de Entrada:</strong> ${valorEntrada} <br>` : ""}
            ${simular ? `<strong>Possui CNH:</strong> ${cnh ? "Sim" : "Não"} <br>` : ""}
        `;

    const data = await resend.emails.send({
      from: "Atendimento Bosshe Car <onboarding@resend.dev>",
      to: ["emilyjulygd@gmail.com"],
      subject: "Novo Contato",
      html: emailContent,
    });

    return { data };
  } catch (error) {
    return { error: error.message };
  }
});
