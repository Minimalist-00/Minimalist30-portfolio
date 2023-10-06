import Heading from "../Heading"

//todo 生データに変える
const timelineData = [
  {
    date: '2021.4',
    title: '富山県立大学 工学部 情報システム工学科',
    description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
    logo: 'image 9.svg'
  },
  {
    date: '2021.9  -  2023.6',
    title: '星乃珈琲店  アルバイト',
    description: 'お客様や従業員との接し方を学び、人への気配りやコミュニケーション能力を磨いてきた',
  },
  {
    date: '2021.9  -  2023.6',
    title: 'タイトルが入ります',
    description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    date: '2021.9  -  2023.6',
    title: 'タイトルが入ります',
    description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    date: '2021.9  -  2023.6',
    title: 'タイトルが入ります',
    description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    date: '2021.9  -  2023.6',
    title: 'タイトルが入ります',
    description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    date: '2021.9  -  2023.6',
    title: 'タイトルが入ります',
    description: '富山県庁内で抱えている課題の改善（業務改善）を行っている。実際に県庁の方々とのヒアリング･ミーティングを行いながら、問題を根本から解決するために学生視点からの提案･解決を行っている。',
  },
  // 他のイベントを追加
];

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  logo?: string;
}

const ExTimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, logo }) => {

  return (
    <div>
      <div className="flex ml-5">
        <div className="mt-1 w-9">
          <div className="w-[15px] h-[15px] bg-blue rounded-full" />
          <div className="mt-1 w-[3px] h-24 bg-blue ml-[6px]" />
        </div>
        <div className="w-48">
          <p className="text-[15px]">{date}</p>
        </div>
        <div className="w-[510px]">
          <p className="text-[17px] font-bold pb-1">{title}</p>
          <p className="text-[15px]">{description}</p>
        </div>
        <div>
          {logo && (
            <img className="ml-10 w-20 h-auto" src={logo} alt="Logo" />
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div>
      <div className="lg:max-w-main mx-auto pt-14 pb-14">
        <Heading title="Experience" />
        <section>
        </section>
        <div>
          {timelineData.map((item, index) => (
            <ExTimelineItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              logo={item.logo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience