"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import Footer from "@/app/(frontend)/_components/footer";
import Header from "@/app/(frontend)/_components/header";

export default function PrivacyPolicy() {
  const t = useTranslations('PrivacyPage.PrivacyContent');

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                {t('title')}
              </h1>
              
              <article className="prose prose-sm md:prose-base max-w-none">
                <section>
                  <h2 className="text-lg font-semibold mb-2 text-black">
                    {t('sections.legalDisclaimer.title')}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {t('sections.legalDisclaimer.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold mb-2 text-black">
                    {t('sections.basics.title')}
                  </h2>
                  <p className="text-gray-700 mb-2">
                    {t('sections.basics.content')}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {t('sections.jurisdiction.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold mb-2 text-black">
                    {t('sections.inclusion.title')}
                  </h2>
                  <p className="text-gray-700">
                    {t('sections.inclusion.content')}
                  </p>
                </section>
              </article>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}