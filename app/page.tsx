"use client";
import { fetchCars } from "@utils";
import { HomeProps } from "@types";
/* import { fuels, yearsOfProduction } from "@constants"; */
/* import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components"; */
import { Hero, PerfilCard } from "@components";

/* export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
    
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars; */

export default async function home() {
  return (
    <>
      <div className="text-7x1 text-blue-500"></div>
      <main className="overflow-hidden">
        <Hero />
     
      </main>
    </>
  );
}
