/**
 * MagazineArticle Component
 *
 * A Next.js component that recreates a Z!NK Magazine editorial layout
 * featuring Claudia Humburg's avant-garde art profile.
 *
 * @example
 * ```tsx
 * import MagazineArticle from '@/components/press/MagazineArticle';
 *
 * export default function Page() {
 *   return (
 *     <MagazineArticle
 *       imageSrc="/images/press/claudia-portrait.jpg"
 *       imageAlt="Claudia Humburg portrait"
 *     />
 *   );
 * }
 * ```
 */

import Image from "next/image";

interface MagazineArticleProps {
  /** Source URL for the article's featured image */
  imageSrc: string;
  /** Alt text for accessibility */
  imageAlt: string;
}

export default function MagazineArticle({ imageSrc, imageAlt }: MagazineArticleProps) {
  return (
    <article
      className="bg-white px-6 py-8 text-black sm:px-8 md:px-12 lg:px-16"
      aria-labelledby="article-title"
    >
      {/* Magazine Header - Page number and section */}
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <span className="whitespace-nowrap font-sans text-xs tracking-wider text-gray-900">
            /062/
          </span>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gray-900">
            Combustion
          </span>
        </div>
        <div className="mt-2 h-0.5 w-full bg-gray-400" aria-hidden="true" />
      </header>

      {/* Article Title */}
      <h1
        id="article-title"
        className="mb-10 font-sans text-2xl font-light uppercase tracking-[0.15em] text-gray-900 sm:text-3xl md:mb-12 md:text-4xl"
      >
        Claudia Humburg: Avant-Garde
      </h1>

      {/* Main Content Area */}
      <div className="relative">
        {/* Mobile: Image on top */}
        <figure className="mb-8 md:hidden">
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </figure>

        {/* Desktop: Floating image */}
        <figure
          className="relative z-10 mb-4 ml-8 hidden md:float-right md:block md:w-[50%] lg:w-[55%]"
          aria-label="Featured photograph"
        >
          <div className="relative aspect-4/3 w-full overflow-hidden shadow-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 55vw"
              priority
            />
          </div>
        </figure>

        {/* Article Body Text */}
        <div className="font-serif text-base leading-relaxed text-gray-900 sm:text-lg md:text-[17px] md:leading-[1.9]">
          <p className="mb-4 text-justify">
            An unforgiving eye for perfection betrays a zen exterior. Any visage improperly
            made up is a personal insult. Instead of a glamorous set in a major city, she
            now carefully sifts to choose only two films per year — and by the time this
            article is published, she will be &ldquo;on location,&rdquo; artfully nestled in a remote
            German forest.
          </p>

          <p className="mb-4 text-justify">
            Born and raised in the German outdoors, exposure to nature intrigued Humburg
            as a child. Growing up surrounded by European art and culture as well as animals
            shaped her perception and career stages. Humburg later moved to Los Angeles,
            essentially since adulthood has turned this fräulein to relate domestically as
            a Los Angelino. Emitting an international European flair would never fade,
            although her subconscious now dreams in English. Fluent in German and English,
            she has kept her German accent when speaking in English, and in place of
            &ldquo;yeah&rdquo; she says &ldquo;yah.&rdquo;
          </p>

          <p className="mb-4 text-justify">
            Ravenous for creative discovery, persnickety pickings for film and photo shoots
            fuel her inspiration for painting. This risk-taker is blazing a trail with images
            on fire. Still only a newcomer, gifted beyond even her own self-awareness, her
            artistry sets the tone for modern day avant-garde.
          </p>

          <p className="mb-4 text-justify">
            Humburg&apos;s impending body of work is prolific and profound. Her various collections
            of original art show an unrelenting drive for excellence. One of her projects
            entitled &ldquo;Flag Collection&rdquo; jumps off the canvas inspiring patriotism. Initial
            pieces will assure any doubters that her talent and perspective show that the
            possibilities are endless.
          </p>

          <p className="mb-4 text-justify">
            A unique quality that Humburg emits is her ability to paint a person to disappear
            as scenery. Raw is her gift to take a naked human body and transform it into
            something that visually represent life and beauty in a provocative manner that
            is not sexual, as well as composing visuals that are multilayered in meaning and
            texture. She is brave: Humburg has walked away from the lucrative and traditional
            — having made a name for herself as a hair and makeup artist working on films,
            A-list celebs and major magazine spreads and covers in the past.
          </p>

          <p className="mb-4 text-justify">
            This winter will bring forth the gallery debut of her pieces painted with oil,
            on bodies and wood and a variety of expression — and all of the critics will
            shriek with glee. Passionate artistry tugs at Humburg&apos;s sleeve, pulling her back
            into an isolated room where she carves out ideas until they become paintings or
            painted people.
          </p>

          <p className="mb-6 text-justify">
            Favorite color? &ldquo;Red, dark red, deep purple, but that changes with mood and
            depending what I am working on, how I feel.&rdquo;{" "}
            <a
              href="https://www.claudiahumburg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-wide text-gray-900 underline hover:text-gray-600"
            >
              ClaudiaHumburg.com
            </a>
          </p>

          {/* Clear float */}
          <div className="clear-both" />

          {/* Author Credit */}
          <footer className="mt-8 text-center">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
              Katrina Woolverton
            </p>
          </footer>
        </div>
      </div>

      {/* Z!NK Logo */}
      <div className="mt-12 pt-6">
        <div
          className="font-sans text-lg font-black uppercase tracking-tight text-black"
          aria-label="Z!NK Magazine"
        >
          Z!NK
        </div>
      </div>
    </article>
  );
}
