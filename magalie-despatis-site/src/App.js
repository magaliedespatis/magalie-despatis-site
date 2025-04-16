import React from "react";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";

export default function MagalieDespatisSite() {
  return (
    <div className="min-h-screen bg-[#f4f6f5] text-[#2e3b35] font-sans">
      <header className="bg-white shadow p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#527d6d]">
            Magalie Despatis
          </h1>
          <p className="text-sm md:text-base text-[#6b8f85]">
            Naturopathie et accompagnement énergétique pour les familles
          </p>
        </div>
      </header>

      <section className="py-12 px-4 md:px-0">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            À petits pas vers un mieux-être naturel
          </h2>
          <p className="text-md md:text-lg text-gray-700">
            J’accompagne les enfants et leur famille à retrouver l’équilibre, à travers des habitudes de vie saines, la naturopathie et les soins énergétiques. Chaque petit pas compte vers un quotidien plus serein et vibrant.
          </p>
        </div>
      </section>

      <section className="bg-[#e6efed] py-12 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            À propos de moi
          </h2>
          <p className="text-md md:text-lg text-gray-800 leading-relaxed">
            D’abord formée en éducation comme orthopédagogue, j’ai accompagné les enfants pendant plus de dix ans avant de ressentir le besoin d’une approche plus globale. C’est en devenant maman que j’ai été appelée à me former en naturopathie, pour mieux soutenir le développement des enfants dans leur corps, leur tête et leur esprit. Aujourd’hui, j’accompagne les familles dans leur cheminement vers un mieux-être naturel, avec une écoute bienveillante et une passion profonde pour la santé globale.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            Services offerts
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b border-gray-300 py-4">
              <h3 className="font-semibold">Consultation en naturopathie – enfants et familles</h3>
              <p className="text-gray-700 mt-2">
                Pour instaurer de saines habitudes de vie, soutenir le développement global de l’enfant, et outiller les familles face aux défis quotidiens.
              </p>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-gray-300 py-4">
              <h3 className="font-semibold">Soutien des problématiques digestives, immunitaires, nerveuses</h3>
              <p className="text-gray-700 mt-2">
                Accompagnement naturel pour comprendre et améliorer les troubles chroniques et inconforts qui perturbent le bien-être général.
              </p>
            </AccordionItem>
            <AccordionItem value="item-3" className="py-4">
              <h3 className="font-semibold">Soins énergétiques</h3>
              <p className="text-gray-700 mt-2">
                Un moment de douceur pour rééquilibrer l’énergie, apaiser le stress et favoriser l’harmonie intérieure.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 p-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Magalie Despatis. Tous droits réservés.
      </footer>
    </div>
  );
}
