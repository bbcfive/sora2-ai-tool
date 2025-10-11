import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { env, requireEnv } from '@/lib/env';
import type { JsonResponse } from '@/lib/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const stripe = new Stripe(requireEnv('stripeSecretKey'), {
      apiVersion: '2023-10-16'
    });

    const origin = request.headers.get('origin') ?? env.publicSiteUrl ?? 'http://localhost:3000';
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: requireEnv('stripePriceId'),
          quantity: 1
        }
      ],
      success_url: `${origin}/subtitles?paid=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/subtitles?paid=0`
    });

    const payload: JsonResponse<{ url: string }> = {
      success: true,
      data: {
        url: session.url ?? ''
      }
    };

    if (!session.url) {
      throw new Error('Stripe did not return a checkout url');
    }

    return NextResponse.json(payload);
  } catch (error) {
    console.error('[create-session] error', error);
    const payload: JsonResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Unable to create checkout session'
    };
    return NextResponse.json(payload, { status: 500 });
  }
}
