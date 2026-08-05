'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailProps {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export async function sendEmail({ nombre, email, asunto, mensaje }: SendEmailProps, token: string) {
  try {
    if (!nombre || !email || !asunto || !mensaje) {
      return { success: false, error: 'Todos los campos son obligatorios.' };
    }

    if (!token) {
      return { success: false, error: 'Token de seguridad faltante.' };
    }

    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: token,
      }),
    });

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      return { success: false, error: 'La verificación anti-bots falló. Inténtalo de nuevo.' };
    }
  
    const data = await resend.emails.send({
      from: 'NexoPixel X Contacto <onboarding@resend.dev>', 
      to: ['nexopixelx@gmail.com'], 
      subject: `Nuevo mensaje de la Web: ${asunto}`,
      html: `
        <h2>¡Tienes un nuevo mensaje de contacto de NexoPixel X!</h2>
        <p><strong>Nombre del cliente:</strong> ${nombre}</p>
        <p><strong>Email de contacto:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <hr />
        <p><strong>Mensaje escrito:</strong></p>
        <p style="background-color: #120e2e; color: white; padding: 15px; border-radius: 8px; border: 1px solid #2b71ff;">
          ${mensaje}
        </p>
      `,
    });

    return { success: true, data };

  } catch (error: unknown) {        
    const errorMessage = error instanceof Error ? error.message : 'Error interno del servidor';
    return { success: false, error: errorMessage };
  }
}