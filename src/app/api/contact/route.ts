import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5 // 5 requests per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return false
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return false
  }

  if (record.count >= MAX_REQUESTS) {
    return true
  }

  record.count++
  return false
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, agencyUrl, revenue } = body

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (!agencyUrl || !agencyUrl.trim()) {
      return NextResponse.json(
        { error: 'Agency URL is required' },
        { status: 400 }
      )
    }

    if (!revenue || !revenue.trim()) {
      return NextResponse.json(
        { error: 'Monthly revenue is required' },
        { status: 400 }
      )
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jimmy@playgroundgiants.com',
      replyTo: email,
      subject: `New Agency Partner Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0f0; background: #000; padding: 15px; margin: 0;">
            New Agency Partner Application
          </h2>
          <div style="background: #1a1a1a; color: #fff; padding: 20px; border: 1px solid #333;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #0f0; width: 140px;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #0f0;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #333;">
                  <a href="mailto:${email}" style="color: #0f0;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #0f0;">Agency URL:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #333;">
                  <a href="${agencyUrl}" style="color: #0f0;">${agencyUrl}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #0f0;">Monthly Revenue:</td>
                <td style="padding: 10px 0;">${revenue}</td>
              </tr>
            </table>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Agency Partner application form on playgroundgiants.com
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
