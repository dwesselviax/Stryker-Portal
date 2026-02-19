'use client';

import { DetailCard } from '@/components/detail/detail-card';
import { Phone, Mail, MessageSquare, FileText, ExternalLink } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Support</h1>
      <p className="text-sm text-[#545857]">Get help with your Stryker B2B Portal account</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DetailCard>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF8E1]">
              <Phone className="h-6 w-6 text-[#FFB500]" />
            </div>
            <h3 className="text-base font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Phone Support</h3>
            <p className="mt-2 text-sm text-[#545857]">Mon–Fri, 8AM–6PM EST</p>
            <p className="mt-1 text-lg font-bold text-[#4C7D7A]" style={{ fontFamily: 'var(--font-heading)' }}>1-800-253-3210</p>
          </div>
        </DetailCard>

        <DetailCard>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E3F2FD]">
              <Mail className="h-6 w-6 text-[#1565C0]" />
            </div>
            <h3 className="text-base font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Email Support</h3>
            <p className="mt-2 text-sm text-[#545857]">Response within 24 hours</p>
            <p className="mt-1 text-sm font-bold text-[#4C7D7A]" style={{ fontFamily: 'var(--font-heading)' }}>b2b-support@stryker.com</p>
          </div>
        </DetailCard>

        <DetailCard>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F5E9]">
              <MessageSquare className="h-6 w-6 text-[#2E7D32]" />
            </div>
            <h3 className="text-base font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Live Chat</h3>
            <p className="mt-2 text-sm text-[#545857]">Available during business hours</p>
            <button className="mt-2 rounded-md bg-[#4C7D7A] px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#3D6664]" style={{ fontFamily: 'var(--font-heading)' }}>
              Start Chat
            </button>
          </div>
        </DetailCard>
      </div>

      <DetailCard title="Frequently Asked Questions">
        <div className="space-y-4">
          {[
            { q: 'How do I place a new order?', a: 'Navigate to Products, add items to your cart, and proceed through checkout. You can also create orders from approved quotes.' },
            { q: 'How do I track my shipment?', a: 'Go to the Shipments page to see all active shipments with tracking numbers and carrier links.' },
            { q: 'How do I submit a return/RMA?', a: 'Navigate to Returns & RMA and click "New RMA Request". Select the order or asset you wish to return.' },
            { q: 'How do I manage my subscription?', a: 'Go to Subscriptions to view, pause, resume, or modify your recurring orders.' },
            { q: 'How do I reset my password?', a: 'Click on your profile, go to Account Settings, and select "Change Password".' },
          ].map((faq, i) => (
            <div key={i} className="rounded-md border border-[#F5F5F5] p-4">
              <h4 className="text-sm font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{faq.q}</h4>
              <p className="mt-1 text-sm text-[#545857]">{faq.a}</p>
            </div>
          ))}
        </div>
      </DetailCard>
    </div>
  );
}
