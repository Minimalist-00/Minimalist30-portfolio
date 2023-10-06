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

const Event = () => {
  return (
    <div>
      <div className="lg:max-w-main mx-auto pt-10 pb-14">
        <Heading title="Event" />
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

export default Event