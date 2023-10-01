const AboutTopArea = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pb-5">
      <div>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">About</h1>
          <p className="text-lg">
            ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。
          </p>
          <p className="text-sm">
            ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。
          </p>
        </div>
      </div>
      <div className="self-center justify-self-center">
        <img
          src="/img/face.jpg"
          className="w-72 h-72 object-cover"
          alt="Koki Nakagawa"
        />
      </div>
    </div>
  )
}

export default AboutTopArea
