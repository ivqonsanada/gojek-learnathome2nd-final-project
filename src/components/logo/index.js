import React from 'react'
import styles from './Logo.module.css'

const Logo = ({ title, src }) => {
    const defaultTitle = 'GoZomato'

	return (
		<>
			<div className={styles.container}>
				{ src ? <img className={styles.logoImg} src={src} alt="Logo" /> : '' }
                { title ? 
                    <div className={styles.title}>{title}</div> : 
                    <div className={styles.title}>{defaultTitle}</div> 
                }
			</div>
		</>
	)
}

export default Logo;
