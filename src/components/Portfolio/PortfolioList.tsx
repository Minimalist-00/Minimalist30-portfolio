const PortfolioList = () => {

  //todo 生データに変える
  const cardsData = [
    {
      imageUrl: 'testImage/karaoke.jpg',
      title: 'カードタイトル',
      tags: ['Typescript', 'Next.js'],
    },
    {
      imageUrl: 'testImage/game.jpg',
      title: 'カードタイトル',
      tags: ['Typescript', 'Next.js', 'Tailwind CSS', 'Figma', 'Vercel'],
    },
    {
      imageUrl: 'testImage/game.jpg',
      title: 'カードタイトル',
      tags: ['Typescript', 'Next.js', 'Tailwind CSS', 'Figma', 'Vercel', 'Tailwind CSS', 'Figma', 'Vercel'],
    },
    {
      imageUrl: 'testImage/game.jpg',
      title: 'カードタイトル',
      tags: ['Typescript', 'Next.js', 'Tailwind CSS', 'Figma', 'Vercel'],
    },
    {
      imageUrl: 'testImage/game.jpg',
      title: 'カードタイトル',
      tags: ['Typescript', 'Next.js', 'Tailwind CSS', 'Figma', 'Vercel'],
    },
    {
      imageUrl: 'testImage/game.jpg',
      title: 'カードタイトル',
      tags: ['Typescript', 'Next.js', 'Tailwind CSS', 'Figma', 'Vercel'],
    },
    {
      imageUrl: 'testImage/game.jpg',
      title: 'カードタイトル',
      tags: ['Typescript', 'Next.js', 'Tailwind CSS', 'Figma', 'Vercel'],
    },
    {
      imageUrl: 'testImage/game.jpg',
      title: 'カードタイトル',
      tags: ['Typescript', 'Next.js', 'Tailwind CSS', 'Figma', 'Vercel'],
    },
  ];

  interface CardProps {
    imageUrl: string;
    title: string;
    tags: string[];
  }

  const Card: React.FC<CardProps> = ({ imageUrl, title, tags }) => {
    return (
      <div className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden mx-1 mb-8">
        <img src={imageUrl} alt={title} className="w-full h-44 object-cover" />
        <div className="px-3 py-3">
          <div className="font-bold text-lg mb-2">{title}</div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-white font-semibold text-[11px] py-1 px-2 rounded-2xl bg-[#7a797a]`}
              >{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="lg:max-w-main mx-auto pt-14">
        <section>
          <div className="grid grid-cols-3 gap-4">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                imageUrl={card.imageUrl}
                title={card.title}
                tags={card.tags}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default PortfolioList