import React, {useEffect, useState} from 'react'

const DATA = {
  name: 'Minh Khoi LE',
  title: 'Master Student VUB, Data Science & Machine Learning',
  location: 'Brussels, Belgium',
  profilePhoto: '/assets/profile.jpg',
  heroTagline: 'Master student in Data Science and Machine Learning at VUB, experienced in data preparation, predictive modelling, and dashboarding. Skilled in Python, C#, SQL, and Microsoft Fabric, with a passion for building solutions that deliver measurable impact.',
  about: "I am a Master student at VUB focusing on Data Science and Machine Learning. I enjoy turning messy data into reliable insights and building tools that help teams make better decisions. Currently open to internships and collaborations.",
  skills: [
    {name:'Python',level:95},
    {name:'SQL',level:90},
    {name:'C#',level:85},
    {name:'Machine Learning',level:85},
    {name:'Excel / MS365',level:90},
    {name:'Web (HTML,CSS,JS)',level:70},
    {name:'Microsoft Fabric',level:80},
    {name:'Git / GitHub',level:75}
  ],
  projects: [
    {title:'Project 1',subtitle:'Placeholder project',description:'Add your project details here later.',tech:['Tech A','Tech B']},
    {title:'Project 2',subtitle:'Placeholder project',description:'Add your project details here later.',tech:['Tech A','Tech B']},
    {title:'Project 3',subtitle:'Placeholder project',description:'Add your project details here later.',tech:['Tech A','Tech B']},
    {title:'Project 4',subtitle:'Placeholder project',description:'Add your project details here later.',tech:['Tech A','Tech B']}
  ],
  resumePath: '/assets/MinhKhoiLE_CV_ENG.pdf',
  email: 'leminhkhoi2003@gmail.com',
  phone: '+32 460 96 92 28',
  linkedin: 'https://www.linkedin.com/in/minh-khoi-le-a5505827a'
}

function Skill({s}){
  return (
    <div className="skill">
      <div className="label">
        <span>{s.name}</span>
        <span>{s.level}%</span>
      </div>
      <div className="bar"><i style={{width: s.level + '%'}}></i></div>
    </div>
  )
}

export default function App(){
  const [theme, setTheme] = useState('light')
  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
  },[theme])

  return (
    <div className="container">
      <header className="header">
        <div className="profile">
          <div className="avatar"><img src={DATA.profilePhoto} alt="profile" /></div>
          <div>
            <div className="title">{DATA.name}</div>
            <div className="subtitle">{DATA.title} • {DATA.location}</div>
          </div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="lang-toggle" aria-hidden>
            <button className="toggle" title="English active">ENG</button>
            <button className="toggle" title="Add French">FR</button>
            <button className="toggle" title="Add Dutch">NL</button>
          </div>
          <div>
            <button className="toggle" onClick={()=>setTheme(t=> t==='dark'?'light':'dark')}>Toggle theme</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div>
          <div className="card">
            <h1>{DATA.heroTagline}</h1>
            <p>{DATA.about}</p>
            <div className="buttons">
              <a className="btn btn-primary" href="#contact">Contact me</a>
              <a className="btn btn-outline" href={DATA.resumePath} target="_blank" rel="noreferrer">Download CV</a>
            </div>
          </div>

          <div className="grid">
            {DATA.projects.map((p,i)=>(
              <div className="card" key={i}>
                <div className="project-title">{p.title}</div>
                <div className="project-sub">{p.subtitle}</div>
                <div style={{color:'var(--muted)',fontSize:14}}>{p.description}</div>
                <div style={{marginTop:10,fontSize:12,color:'var(--muted)'}}>{p.tech.join(' • ')}</div>
              </div>
            ))}
          </div>
        </div>

        <aside>
          <div className="card">
            <h3>Skills</h3>
            <div className="skills">
              {DATA.skills.map(s=> <Skill key={s.name} s={s} />)}
            </div>

            <div className="contact-list">
              <strong>Contact</strong>
              <div style={{marginTop:6}}>{DATA.email}</div>
              <div>{DATA.phone}</div>
              <div style={{marginTop:8}}><a href={DATA.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
            </div>

            <div style={{marginTop:12}}>
              <strong>Photos</strong>
              <div className="photo-gallery">
                <img src={DATA.profilePhoto} alt="photo1" />
                <img src={DATA.profilePhoto} alt="photo2" />
                <img src={DATA.profilePhoto} alt="photo3" />
              </div>
            </div>

            <div style={{marginTop:12}}>
              <strong>Download</strong>
              <div style={{marginTop:6}}><a href={DATA.resumePath} target="_blank" rel="noreferrer">CV (PDF)</a></div>
            </div>
          </div>
        </aside>
      </section>

      <footer className="footer card">
        © {new Date().getFullYear()} {DATA.name}. Built with care.
      </footer>
    </div>
  )
}

/*
Gamer / tech-nerd bio variant (no em-dashes, commas only):
Data scientist in training, code enthusiast, lifelong gamer, I combine technical skill with curiosity — from building machine learning models to optimising code like I optimise game strategies. For me, data projects are like quests: each one comes with its own challenges, bosses to defeat, and loot in the form of insights.

(Will add as alternate copy when you want the nerd/gamer theme)
*/
