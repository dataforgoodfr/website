'use client';
import React from 'react';

type Card = {
  name: string;
  description: string;
  className: string;
  thumbnail: string;
  href: string;
};

const Card = ({ card }: { card: Card }) => {
  return (
    <div className="relative rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
      <img
        className="h-auto w-full rounded-xl"
        src={card.thumbnail}
        alt="Card Image"
      />
      <div className="absolute end-0 start-0 top-0">
        <div className="p-4 md:p-5">
          <h3 className="text-3xl font-semibold text-gray-800">{card.name}</h3>
          <p className="mt-1 text-gray-300">{card.description}</p>
          {/* <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">
            Last updated 5 mins ago
          </p> */}
        </div>
      </div>
    </div>
  );
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const handleClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className="mx-auto grid h-96 w-full max-w-7xl grid-cols-1 gap-4 p-10 md:grid-cols-3">
      {cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
};
