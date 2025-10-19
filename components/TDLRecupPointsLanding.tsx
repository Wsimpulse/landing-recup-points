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
            <a href="#pourquoi" className="hover:text-slate-900 text-slate-600">Pourquoi le stage ?</a>
            <a href="#deroulement" className="hover:text-slate-900 text-slate-600">Déroulé</a>
            <a href="#tarif" className="hover:text-slate-900 text-slate-600">Tarif</a>
            <a href="#avis" className="hover:text-slate-900 text-slate-600">Avis</a>
            <a href="#faq" className="hover:text-slate-900 text-slate-600">FAQ</a>
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
                <span className="h-2.5 w-2.5 rounded-full bg-green-600" aria-hidden></span>
                Préfecture agréée
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-600" aria-hidden></span>
                Paiement 100% sécurisé
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-600" aria-hidden></span>
                250€ le stage
              </div>
            </div>
          </div>

          {/* Booking card */}
          <div className="lg:justify-self-end w-full">
            <div className="rounded-3xl border shadow-sm p-6 bg-white">
              <h2 className="text-xl font-semibold">Réservez votre stage</h2>
              <p className="text-slate-600 mt-1">
                Choisissez vos dates et finalisez en quelques clics.
              </p>

              <label className="block mt-4 text-sm font-medium">
                Dates disponibles
              </label>
              <select
                className="mt-2 w-full rounded-xl border p-3"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                aria-label="Choisissez votre date de stage"
              >
                <option value="">Sélectionnez...</option>
                {dates.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://tdlformation.catalogueformpro.com"
                  className="px-4 py-3 rounded-xl bg-slate-900 text-white font-medium text-center"
                >
                  Finaliser l’inscription
                </a>
                <a
                  href="tel:0180907249"
                  className="px-4 py-3 rounded-xl border font-medium text-center"
                >
                  Nous appeler
                </a>
              </div>

              <p className="text-xs text-slate-500 mt-3">
                En cliquant, vous serez redirigé vers notre module d’inscription
                sécurisé (Digiforma).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi */}
      <section id="pourquoi" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Récupérez jusqu’à 4 points",
              desc: "Stage de sensibilisation sur 2 jours, éligible à la récupération de points conformément à la réglementation.",
            },
            {
              title: "Inscription simple",
              desc: "Réservation en ligne ou par téléphone. Confirmation immédiate et rappel des documents à apporter.",
            },
            {
              title: "Encadrement d’experts",
              desc: "Formateurs agréés, pédagogie active et échanges de cas concrets pour une prise de conscience durable.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-3xl border p-6">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-slate-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Déroulé */}
      <section id="deroulement" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Comment se déroule le stage ?</h2>
          <ol className="mt-6 grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Inscription", text: "En ligne ou par téléphone, choisissez votre session" },
              { step: "2", title: "Rendez-vous", text: "59, avenue Joffre, 93800 Epinay-sur-Seine" },
              { step: "3", title: "2 jours de formation", text: "14 heures d’échanges et d’ateliers" },
              { step: "4", title: "Récupération des points", text: "Jusqu’à 4 points à l’issue du stage" },
            ].map((it) => (
              <li key={it.step} className="rounded-3xl border bg-white p-6">
                <div className="text-3xl font-bold">{it.step}</div>
                <div className="mt-2 font-semibold">{it.title}</div>
                <p className="text-slate-600 mt-1">{it.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tarif */}
      <section id="tarif" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border p-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Tarif du stage</h2>
            <p className="text-slate-600 mt-2">Prix unique, tout compris.</p>
            <div className="mt-6 text-5xl font-extrabold tracking-tight">250€</div>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• 14 heures sur 2 jours</li>
              <li>• Attestation remise en fin de stage</li>
              <li>• Paiement sécurisé en ligne</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="text-lg font-semibold">Prêt à réserver ?</h3>
            <p className="text-slate-600 mt-1">Choisissez une date puis terminez l’inscription.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#reservation" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold">Réserver maintenant</a>
              <a href="mailto:contact@tdl-formation.fr" className="px-5 py-3 rounded-xl border font-semibold">Poser une question</a>
            </div>
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Ils nous recommandent</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { name: "Cédric G.", role: "Professeur des écoles", text: "Stage pédagogique et accessible. J’ai récupéré mes points et appris beaucoup sur la sécurité routière." },
              { name: "Diakité S.", role: "Chauffeur livreur", text: "Processus d’inscription simple, formateurs très pros. Je recommande." },
              { name: "Loan L.", role: "Vendeuse", text: "Ambiance bienveillante, équipe à l’écoute. Je me suis sentie accompagnée du début à la fin." },
            ].map((a) => (
              <figure key={a.name} className="rounded-3xl border bg-white p-6">
                <blockquote className="text-slate-700">{a.text}</blockquote>
                <figcaption className="mt-4 text-sm text-slate-600">{a.name} • {a.role}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Questions fréquentes</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            { q: "Qui peut participer ?", a: "Tout conducteur titulaire d’un permis valide, n’ayant pas un solde de points nul, et respectant le délai d’un an et un jour entre deux stages." },
            { q: "Combien de points récupérés ?", a: "Jusqu’à 4 points, dans la limite du plafond de votre permis." },
            { q: "Quand sont crédités les points ?", a: "Dès le lendemain de la fin du stage. L’actualisation peut prendre 1 à 3 mois selon les préfectures." },
            { q: "Prix du stage ?", a: "250€ tout compris, paiement sécurisé en ligne." },
          ].map((item) => (
            <div key={item.q} className="rounded-3xl border p-6">
              <div className="font-semibold">{item.q}</div>
              <p className="text-slate-600 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final & coordonnées */}
      <section id="reservation" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Prêt à sécuriser votre permis ?</h2>
            <p className="mt-2 text-slate-200">Réservez votre place ou appelez-nous, on s’occupe du reste.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://tdlformation.catalogueformpro.com" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold">Réserver en ligne</a>
              <a href="tel:0180907249" className="px-5 py-3 rounded-xl ring-1 ring-inset ring-white/50 font-semibold">Appeler le {"01 80 90 72 49"}</a>
            </div>
          </div>
          <div className="rounded-3xl bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Nos coordonnées</h3>
            <address className="not-italic mt-2 text-slate-200">59, avenue Joffre, 93800 Epinay-sur-Seine</address>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a href="mailto:contact@tdl-formation.fr" className="underline underline-offset-2">contact@tdl-formation.fr</a>
              <a href="https://www.google.com/maps" className="underline underline-offset-2">Itinéraire</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-slate-600 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold text-slate-900">TDL Formation</div>
            <p className="mt-2">VTC • Taxi • Récupération de points</p>
            <p className="mt-1">Locaux accessibles PMR</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Légal</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-slate-900">Mentions légales</a></li>
              <li><a href="#" className="hover:text-slate-900">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-slate-900">Politique de cookies</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Suivez-nous</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-slate-900">Facebook</a></li>
              <li><a href="#" className="hover:text-slate-900">Instagram</a></li>
              <li><a href="#" className="hover:text-slate-900">TikTok</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
