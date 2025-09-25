
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    return NextResponse.json({ 
      success: true, 
      message: "API funcionando correctamente",
      data: {
        riesgo: "BAJO",
        puntuacion: 2.5,
        recomendaciones: [
          "Mantener higiene adecuada del pie",
          "Revisar diariamente los pies",
          "Usar calzado cómodo"
        ]
      }
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: "API de evaluaciones funcionando",
    status: "OK" 
  });
}
