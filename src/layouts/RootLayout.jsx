import { NavLink, Outlet } from 'react-router-dom'


export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>5Ks</h1>
                
                    <NavLink to="/new">New</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}