import Header from "./components/Header/Header"
import styles from "./App.module.css"
import Post from "./components/Post/Post"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="João Rambo"
            content="ext. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore al"
          />
          <Post 
            author="João Rambo"
            content="ext. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore al"
          />
        </main>
      </div>
    </div>
  )
}

export default App