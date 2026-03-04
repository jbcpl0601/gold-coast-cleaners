"use client";

import { CheckCircle2, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";

const checklistCategories = [
  {
    title: "Bedrooms and Living Areas",
    items: [
      "Sweep, vacuum, and mop floors.",
      "Clean all dust from walls and remove spots from the walls and skirting boards. (We don't guarantee to remove permanent marks)",
      "Clean all windows tracks, sills, surfaces, frames. (Inside and Outside).",
      "Clean all doors surfaces, handles, frames and tracks.",
      "Clean vents and ceiling fans.",
      "Clean and sanitize high traffic areas, electrical outlets & all light fittings like switches, power points.(where accessible & reasonably practical)",
      "Vacuum carpets with power rotating head and removing stains.(We do not guarantee to remove permanent marks).",
      "Remove cobwebs.",
      "Blind dusting(only)"
    ]
  },
  {
    title: "Kitchen",
    items: [
      "Sweep, vacuum, and mop floors.",
      "Clean sink, taps, tiles and fittings.",
      "Remove cobwebs.",
      "Counter tops, splash backs, cupboards, tables, all drawers clean and vacuum. (inside and outside).",
      "Exterior of appliances including dishwasher clean.",
      "Clean all window sills, window tracks, surfaces, frames. (Inside and Outside).",
      "Clean all doors surfaces, frames, handles and tracks.",
      "Oven clean",
      "Cooktop and range-hood clean and sanitize.",
      "Degrease and wipe all surfaces.",
      "Clean all dust from walls and remove spots from the walls and skirting boards. (We don't guarantee to remove permanent marks)",
      "Clean high traffic areas & All light fittings like switches/power points.(where accessible & reasonably practical)."
    ]
  },
  {
    title: "Bathrooms",
    items: [
      "Deep scrub and disinfect toilet.",
      "Clean and polish the bathtub and shower.",
      "Clean and scrub shower glass and all fittings.",
      "Mop and vacuum all floors.",
      "Clean all bench tops, cupboards, drawers. (Inside and outside)",
      "Clean all soap holders, fitting, remove soap scum.",
      "Clean and polish sinks, mirrors, taps, and handles.",
      "Clean all light fittings like switches/power points.(where accessible & reasonably practical).",
      "Clean exhaust fans.",
      "Clean all dust from walls and remove spots from the walls and skirting boards. (We don't guarantee to remove permanent marks)",
      "Clean all tiles & fittings areas.",
      "Clean all doors, remove (fingerprints) and marks from frames, handles, surfaces and tracks.",
      "Clean all windows, frames, tracks and window sills. (Inside and Outside).",
      "Blinds (dusting only).",
      "Remove cobwebs.",
      "Scrub molds."
    ]
  },
  {
    title: "Laundry",
    items: [
      "Vacuum, and mop floors.",
      "Remove lint from ceiling, fans, exhaust fans, from everywhere.",
      "Clean all the tiles, sinks, tubs and fittings.",
      "Clean cupboards and drawers.(inside and outside).",
      "Clean dryer filters.",
      "Clean all window sills, window tracks, surfaces, frames. (Inside and Outside).",
      "Clean all doors, remove (fingerprints) and marks from frames, handles, surfaces and tracks.",
      "Clean all light fittings like switches/power points (where accessible & reasonably practical).",
      "Blinds dusting only.",
      "Remove cobwebs.",
      "Clean all dust from walls and remove spots from the walls and skirting boards. (We don't guarantee to remove permanent marks)"
    ]
  },
  {
    title: "Pantry",
    items: [
      "Clean and sanitize all shelves.(Inside and outside).",
      "Clean all dust from walls and remove spots from the walls and skirting boards. (We don't guarantee to remove permanent marks)",
      "Clean and sanitize all doors, frames and handles.",
      "Clean all drawers. (Inside and outside)."
    ]
  },
  {
    title: "Stairs, and Hallways",
    items: [
      "Sweep, vacuum, and mop floors.",
      "Clean all window sills, window tracks, surfaces, frames. (Inside and Outside).",
      "Clean all doors, remove marks from frames, handles, surfaces and tracks.",
      "Clean all dust from walls and remove spots from the walls and skirting boards. (We don't guarantee to remove permanent marks).",
      "Clean all light fittings like switches/power points and other electrical outlets (where accessible & reasonably practical).",
      "Clean cupboards and drawers.(inside and outside).",
      "Blinds dusting only.",
      "Remove cobwebs."
    ]
  },
  {
    title: "Air conditioners/Exhaust Fans/Vents",
    items: [
      "General wipe over cover including filters.",
      "General sweep & mop (If there is grease or oil marks from a BBQ you may consider having these areas pressure cleaned, Likewise if your balcony or deck is quite dirty)."
    ]
  },
  {
    title: "Balcony",
    items: [
      "Sweep and mop the floor.",
      "Clean wall lights.(Dusting only).",
      "Clean sliding doors and glasses.",
      "Remove cobwebs."
    ]
  },
  {
    title: "Garage Area",
    items: [
      "Remove cobwebs.",
      "Wiping shelfs.",
      "General sweep & mop (If there is grease or oil marks from a car you may consider having these areas pressure cleaned)."
    ]
  }
];

const additionalServices = [
  "Carpet steam cleaning.",
  "Pest control services.",
  "Blinds (Venetians).",
  "BBQ cleaning.",
  "Garden & Pool maintenance.",
  "External pressure cleaning services(Patio/Deck/Driveway).",
  "Wall washing.",
  "Upholstery cleaning.",
];

export function BondCleaningChecklist() {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  return (
    <section className="py-12 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-10 sm:mb-16 transition-opacity duration-500 ${headerInView ? "animate-in fade-in slide-in-from-bottom-8 opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
            Professional Bond Cleaning Gold Coast Check List
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground/80 leading-relaxed">
            Our comprehensive bond cleaning checklist ensures every corner of your property
            is thoroughly cleaned to meet real estate standards and help you get your deposit back.
          </p>
        </div>

        <div
          ref={gridRef}
          className="columns-1 md:columns-2 xl:columns-3 gap-6 md:gap-8"
        >
          {checklistCategories.map((category, index) => (
            <div key={category.title} className="break-inside-avoid mb-6 md:mb-8">
              <Card
                className={`group h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl bg-card/60 backdrop-blur-md fill-mode-both ${gridInView ? "animate-in fade-in slide-in-from-bottom-12 opacity-100" : "opacity-0"}`}
                style={{
                  animationDelay: `${(index % 3) * 100}ms`,
                  animationDuration: "400ms",
                }}
              >
                <CardHeader className="bg-primary/5 pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-muted-foreground leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Services Card - Separated */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <Card
            className={`group overflow-hidden border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl bg-primary/5 backdrop-blur-md fill-mode-both ${gridInView ? "animate-in fade-in slide-in-from-bottom-12 opacity-100" : "opacity-0"}`}
            style={{
              animationDelay: `900ms`,
              animationDuration: "400ms",
            }}
          >
            <CardHeader className="bg-primary/10 pb-4">
              <CardTitle className="text-xl text-primary transition-colors flex items-center gap-2">
                Additional Services
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-accent/10 rounded-xl p-4 mb-6 flex items-start gap-3 border border-accent/20">
                <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">NOTE:</strong> If they are not listed on your quotation, then they aren't included. This list is not definitive. Here, we have primarily listed the more common services, other additional services exist such as household repairs, painters etc.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                {additionalServices.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-muted-foreground leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-primary/10 text-sm font-semibold text-muted-foreground text-center">
                Additional services will be quoted separately.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
