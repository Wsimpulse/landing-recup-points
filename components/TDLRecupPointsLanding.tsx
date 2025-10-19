"use client";

import React, { useState } from "react";

export default function TDLRecupPointsLanding() {
  const [selectedDate, setSelectedDate] = useState("");

  const dates = [
    "20/10/2025 au 21/10/2025",
    "22/10/2025 au 23/10/2025",
    "24/10/2025 au 25/10/2025",
    "29/10/2025 au 30/10/2025",
    "31/10/2025 au 01/11/2025",
    "05/11/2025 au 06/11/2025",
    "07/11/2025 au 08/11/2025",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <div className="w-full bg-slate-900 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <p className="font-medium">
            Numéro d’agrément : R2309300020 – Préfecture de Bobigny
          </p>
          <a
            href="tel:0180907249"
            className="underline underline-offset-2 hover:opacity-80"
          >
            Appelez-nous : 01 80 90 72 49
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900" aria-hidden></div>
            <span className="text-lg font-semibold">TDL Formation</span>
            <span className="hidden sm:inline text-slate-500">
              • Récupération de points
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#pourquoi" className="hover:text-slate-900 text-slate-600">
              Pourquoi le stage ?
            </a>
            <a href="#deroulement" className="hover:text-slate-900 text-slate-600">
              Déroulé
            </a>
            <a href="#tarif" className="hover:text-slate-900 text-slate-600">
              Tarif
            </a>
            <a href="#avis" className="hover:text-slate-900 text-slate-600">
              Avis
            </a>
            <a href="#faq" className="hover:text-slate-900 text-slate-600">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#reservation"
              className="px-4 py-2 rounded-xl bg-slate-900 text-white font-medium hover:opacity-90"
            >
              Réserver
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Stage de récupération de points agréé
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Récupérez jusqu’à 4 points en 2 jours, dans notre centre
              d’Epinay-sur-Seine. Inscription en ligne simple et rapide.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#reservation"
                className="px-5 py-3 rounded-2xl bg-slate-900 text-white font-semibold text-center"
              >
                Réserver ma place
              </a>
              <a
                href="tel:0180907249"
                className="px-5 py-3 rounded-2xl border font-semibold text-center"
              >
                Parler à un conseiller
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-green-600"
                  aria-hidden
                ></span>{" "}
                Préfecture agréée
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-green-600"
                  aria-hidden
                ></span>{" "}
                Paiement 100% sécurisé
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-green-600"
                  aria-hidden
                ></span>{" "}
                250€ le stage
              </div>
            </div>
          </div>

          {/* Booking card */}
          <div className="lg:justify-self-end w-full">
            <div className="
