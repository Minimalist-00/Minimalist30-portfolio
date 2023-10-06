type HeadingProps = {
  title: string
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="pb-12">
      <div className="flex items-center">
        <rect className="w-3 h-10 bg-blue mr-2" />
        <h2 className="text-3xl font-bold pt-1">{title}</h2>
      </div>
    </div>
  )
}

export default Heading
