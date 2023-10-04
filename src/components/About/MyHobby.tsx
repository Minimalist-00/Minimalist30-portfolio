const MyHobby = () => {

  const data = [
    {
      title: 'ゲーム',
      text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります...',
      imageUrl: 'testImage/game.jpg',
    },
    {
      title: 'スノーボード',
      text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります...',
      imageUrl: 'testImage/snow.jpg',
    },
    {
      title: 'カラオケ',
      text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります...',
      imageUrl: 'testImage/karaoke.jpg',
    },
  ];

  return (
    <div className="bg-blue-lt pt-14 pb-14">
      <div className="lg:max-w-main mx-auto">
        <div className="flex items-center pb-14">
          <rect className="w-3 h-10 bg-blue mr-2" />
          <h2 className="text-3xl font-bold pt-1">Hobby</h2>
        </div>
        <section>
          {data.map((item, index) => (
            <div key={index} className="mb-16 flex justify-between">
              <div className="w-[600px]">
                <h5 className="text-2xl font-bold pb-9">{item.title}</h5>
                <p className="">{item.text}</p>
              </div>
              <div>
                <img className="w-64 h-44 object-cover border-2 border-black" src={item.imageUrl} alt={item.title} />
              </div>
            </div>
          ))}
        </section>
        <div>
        </div>
      </div>
    </div>
  )
}

export default MyHobby
