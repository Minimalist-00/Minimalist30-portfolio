import Heading from "../Heading"

const MyBio = () => {
  return (
    <div className="bg-blue-lt pt-14 pb-14">
      <div className="lg:max-w-main mx-auto">
        <Heading title="Bio" />
        <section className="grid grid-cols-2">
          <div>
            <p className="pb-8">
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
            </p>
            <h5 className="text-xl font-bold pb-1">大学</h5>
            <p className="text-lg pb-5">富山県立大学 情報システム工学科</p>
            <h5 className="text-xl font-bold pb-1">研究室</h5>
            <p className="text-lg pb-5">社会情報システム研究室（SID Lab）所属</p>
            <h5 className="text-xl font-bold pb-1">所属</h5>
            <p className="text-lg">富山県立大学 学生団体「POLYGON」</p>
          </div>
          <div>{/* 学校のロゴや研究室のロゴを載せる */}</div>
        </section>
      </div>
    </div>
  )
}

export default MyBio
