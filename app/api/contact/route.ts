import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Logic to integrate with Resend, HubSpot, or Zapier would go here.
    // Example:
    // await resend.emails.send({
    //   from: 'Ax Frost <contact@axfrost.com>',
    //   to: ['admin@axfrost.com'],
    //   subject: 'New Contact Request',
    //   react: EmailTemplate({ ...data }),
    // })

    console.log("Contact form submitted:", data)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
