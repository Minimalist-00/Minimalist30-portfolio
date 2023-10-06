import AboutOverview from '@/components/About/AboutOverview'
import MyBio from '@/components/About/MyBio'
import MyHobby from '@/components/About/MyHobby'
import MySkill from '@/components/About/MySkill'

const about = () => {
  return (
    <div>
      <AboutOverview />
      <MyBio />
      <MySkill />
      <MyHobby />
    </div>
  )
}

export default about
