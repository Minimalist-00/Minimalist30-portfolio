//todo モックデータを別ファイルに移動する
const cardData = [
  {
    title: 'Javascript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 4,
  },
  {
    title: 'Typescript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 3,
  },
  {
    title: 'HTML',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 5,
  },
  {
    title: 'CSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 3,
  },
  {
    title: 'SCSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 1,
  },
  {
    title: 'Go',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 2,
  },
  // 他のカードデータを追加
];

const starIcon = (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3.90594L11.2601 6.93547L11.6119 7.78141L12.5252 7.85463L15.7958 8.11683L13.3039 10.2514L12.6081 10.8474L12.8207 11.7386L13.582 14.9302L10.7819 13.2199L10 12.7423L9.21812 13.2199L6.418 14.9302L7.17931 11.7386L7.39189 10.8474L6.69608 10.2514L4.2042 8.11683L7.47484 7.85463L8.3881 7.78141L8.73995 6.93547L10 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3" />
  </svg>

);

const emptyStarIcon = (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2.60396L11.7217 6.74345L11.9563 7.30742L12.5651 7.35623L17.0341 7.7145L13.6292 10.6311L13.1653 11.0285L13.307 11.6226L14.3473 15.9835L10.5213 13.6466L10 13.3282L9.47875 13.6466L5.65272 15.9835L6.69296 11.6226L6.83468 11.0285L6.3708 10.6311L2.96595 7.7145L7.43488 7.35623L8.04372 7.30742L8.27829 6.74345L10 2.60396Z" stroke="#F1C644" stroke-width="2" />
  </svg>

);

const generateStars = (level: number) => {
  const maxlevel = 5;
  const stars = [];

  for (let i = 1; i <= maxlevel; i++) {
    if (i <= level) {
      stars.push(starIcon); // ★を追加
    } else {
      stars.push(emptyStarIcon); // ☆を追加
    }
  }

  return stars;
};

const SkillCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white w-36 rounded-lg shadow-md text-center py-5">
          <img className="w-14 mx-auto pb-2" src={card.img} />
          <h2 className="pb-1">{card.title}</h2>
          <div className="flex justify-center">
            {generateStars(card.level).map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillCard