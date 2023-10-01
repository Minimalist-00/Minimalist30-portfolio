import React from 'react'

const MyBio = () => {
  return (
    <div className="h-[500px] w-screen bg-blue-lt">
      <div className="lg:max-w-main mx-auto grid grid-cols-2 pt-14">
        <section>
          <div className="flex items-center pb-8">
            <rect className="w-3 h-10 bg-blue mr-2" />
            <h2 className="text-3xl font-bold pt-1">Bio</h2>
          </div>
          <p className="pb-8">
            テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
          </p>
          <h5 className="text-xl font-bold pb-1">大学</h5>
          <p className="text-lg pb-5">富山県立大学 情報システム工学科</p>
          <h5 className="text-xl font-bold pb-1">研究室</h5>
          <p className="text-lg pb-5">社会情報システム研究室（SID Lab）所属</p>
          <h5 className="text-xl font-bold pb-1">所属</h5>
          <p className="text-lg pb-5">富山県立大学 学生団体「POLYGON」</p>
        </section>
        <div>{/* 学校のロゴや研究室のロゴを載せる */}</div>
      </div>
    </div>
  )
}

export default MyBio
