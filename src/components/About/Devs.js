import avatar_lloyd from '../../media/avatar_lloyd.jpg'
import avatar_daryl from '../../media/avatar_daryl.jpg'
import avatar_joel from '../../media/avatar_joel.jpg'

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, modi? Cum, ipsum. Asperiores, numquam in quis dicta totam est deleniti et ad dolor, tempora, omnis consequatur recusandae? Consequuntur, consequatur tempore."

const wa_msg = ''

export const Devs = [
  {
    id: 1,
    name:'Daryl Fernandes',
    avatar: avatar_daryl,
    role: 'ML Engineer / Backend Developer',
    description: `I’m eager to be a part of challenging and collaborative environment.
	I enjoy creative problem solving and working on creative projects.`,
    email: 'mailto:daryl.fernandes50@gmail.com',
    phone: 'tel:+919867831910',
    github_url: 'https://github.com/DarylFernandes99',
    linkedin_url: 'https://www.linkedin.com/in/darylfernandes50/',
    hackerrank_url: 'https://www.hackerrank.com/darylfernandes99/',
    whatsapp_url: `https://wa.me/+919867831910/?text=${wa_msg}`,
  },
  {
    id: 2,
    name:'Joel Dsouza',
    avatar: avatar_joel,
    role: 'Fullstack Developer',
    description: `A tech enthusiast with constant hunger of learning new things and applying them in my work.
Highly motivated and forever in the search for new opportunities.`,
    email: 'mailto:shadowk97@gmail.com',
    phone: 'tel:+917506433898',
    github_url: 'https://www.github.com/shadowk97/',
    linkedin_url: 'https://www.linkedin.com/in/joeldzs44/',
    hackerrank_url: 'https://www.hackerrank.com/joeldzs44/',
    whatsapp_url: `https://wa.me/+917506433898/?text=${wa_msg}`,
  },
  {
    id: 3,
    name:'Lloyd Dsouza',
    avatar: avatar_lloyd,
    role: 'Design Head / Content Writer',
    description: lorem,
    email: 'mailto:lloyd.dsouza81@gmail.com',
    phone: 'tel:+917738258961',
    github_url: '',
    linkedin_url: 'https://www.linkedin.com/in/lloyddsouza99/',
    hackerrank_url: '',
    whatsapp_url: `https://wa.me/+917738258961/?text=${wa_msg}`,
  },
];

export default Devs