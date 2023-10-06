import Heading from "../Heading"
import TimelineItem from "./TimelineItem";

//todo 生データに変える
const timelineData = [
  {
    date: '2021.4',
    title: 'タイトルが入ります',
  },
  {
    date: '2021.4',
    title: 'タイトルが入ります',
  },
  {
    date: '2021.4',
    title: 'タイトルが入ります',
  },
];

const Award = () => {
  return (
    <div>
      <div className="lg:max-w-main mx-auto pt-10">
        <Heading title="Award" />
        <section>
        </section>
        <div>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Award