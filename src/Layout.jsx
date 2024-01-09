import Navbar from "./Navbar"
// import './style.css'

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        <main className="main">
        {children}
        </main>
        </>
    )
}

export default Layout