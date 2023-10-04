const MyHobby = () => {
  return (
    <div className="w-screen bg-blue-lt pt-14 pb-14">
      <div className="lg:max-w-main mx-auto">
        <section>
          <div className="flex items-center pb-8">
            <rect className="w-3 h-10 bg-blue mr-2" />
            <h2 className="text-3xl font-bold pt-1">Hobby</h2>
          </div>
          <div className="pb-24 grid grid-cols-2">
            <div>
              <h5 className="text-2xl font-bold pb-9">ゲーム</h5>
              <p className="">テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
            </div>
            <div><img src="" alt="" /></div>
          </div>
          <div className="pb-24 grid grid-cols-2">
            <div>
              <h5 className="text-2xl font-bold pb-9">スノーボード</h5>
            </div>
          </div>
          <div className="pb-24 grid grid-cols-2">
            <div>
              <h5 className="text-2xl font-bold pb-9">音楽鑑賞</h5>
            </div>
          </div>

        </section>
        <div>
        </div>
      </div>
    </div>
  )
}

export default MyHobby
