import AboutOverview from '@/components/About/AboutOverview'
import MyBio from '@/components/About/MyBio'
import MyHobby from '@/components/About/MyHobby'
import MySkill from '@/components/About/MySkill'

const about = () => {
  return (
    <div className="max-w-full">
      <AboutOverview />
      <MyBio />
      <MySkill />
      <MyHobby />
    </div>
  )
}

export default about
