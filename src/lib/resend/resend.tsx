'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailProps {
  nombre: string;
  email: string;
  idioma: string;
  mensaje: string;
}

export async function sendEmail({ nombre, email, idioma, mensaje }: SendEmailProps, token: string) {
  try {
    if (!nombre || !email || !idioma || !mensaje) {
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
      subject: `Nuevo mensaje de la Web`,
      html: `
        <div style="background-color: #060407; color: #ffffff; padding: 30px; font-family: Arial, sans-serif; border-radius: 16px; border: 1px solid rgba(255, 170, 68, 0.3);">
          <h2 style="color: #ffaa44; margin-top: 0; font-size: 22px; border-bottom: 1px solid rgba(255, 170, 68, 0.2); padding-bottom: 12px;">¡Nuevo mensaje de contacto - NexoPixel X!</h2>
          <p style="margin: 10px 0;"><strong>Nombre del cliente:</strong> <span style="color: #e2e8f0;">${nombre}</span></p>
          <p style="margin: 10px 0;"><strong>Email de contacto:</strong> <span style="color: #e2e8f0;">${email}</span></p>
          <p style="margin: 10px 0;"><strong>Idioma:</strong> <span style="color: #e2e8f0;">${idioma}</span></p>
          <hr style="border: none; border-top: 1px solid rgba(255, 170, 68, 0.15); margin: 20px 0;" />
          <p style="margin-bottom: 8px;"><strong>Mensaje escrito:</strong></p>
          <div style="background-color: #120b06; color: #f1f5f9; padding: 18px; border-radius: 12px; border: 1px solid rgba(255, 119, 0, 0.3); line-height: 1.5;">
            ${mensaje}
          </div>
        </div>
      `,
    });

    return { success: true, data };

  } catch (error: unknown) {        
    const errorMessage = error instanceof Error ? error.message : 'Error interno del servidor';
    return { success: false, error: errorMessage };
  }
}