import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={styles.profile}>
                <Avatar hasBorder={true} src="https://xesque.rocketseat.dev/users/avatar/profile-35fbe46d-88c8-4083-ade4-2fcde39eccff-1709175086396.jpg" />
                <strong>João Marcelo Vilas Boas</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={18} />
                    Editar seu perfil
                </a>
            </footer>
            
            
        </aside>
    )
}
