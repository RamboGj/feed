import Header from "./components/Header/Header"
import styles from "./App.module.css"
import Post from "./components/Post/Post"
import Sidebar from "./components/Sidebar/Sidebar"

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: ""

const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/RamboGj.png",
        name: "João Rambo",
        role: "Web Developer"
      },
      content: [
        { type: "paragraph", content: 'Fala galeraa 👋' },
        { type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: "link", content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-07-27 12:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/NicolasMoraesDeSouza.png",
        name: "Nicolas Moras",
        role: "Web Developer"
      },
      content: [
        { type: "paragraph", content: 'Fala galeraa 👋' },
        { type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: "link", content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-07-27 12:00:00')
    }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts && posts.map((post) => {
            return (
              <Post 
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App