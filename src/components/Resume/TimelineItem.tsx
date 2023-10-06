interface TimelineItemProps {
  date: string;
  title: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title }) => {

  return (
    <div>
      <div className="flex ml-5">
        <div className="mt-[2px] w-9">
          <div className="w-[12px] h-[12px] bg-blue rounded-full" />
          <div className="mt-[2px] w-[2px] h-12 bg-blue ml-[5px]" />
        </div>
        <div className="w-28">
          <p className="text-[15px]">{date}</p>
        </div>
        <div>
          <p className="text-[17px]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;