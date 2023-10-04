type HeadingProps = {
  title: string
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="pt-14 pb-14 lg:max-w-main mx-auto">
      <div className="flex items-center pb-8">
        <rect className="w-3 h-10 bg-blue mr-2" />
        <h2 className="text-3xl font-bold pt-1">{title}</h2>
      </div>
    </div>
  )
}

export default Heading