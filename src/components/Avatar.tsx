import styles from "./Avatar.module.css"

interface AvatarProps {
    src: string
    isOutlined?: boolean
} 

export default function Avatar(props: AvatarProps) {
    const isOutlined = props.isOutlined !== false   
    
    return (
            <img 
                className={isOutlined ? styles.avatar : styles.avatarWithoutOutline}
                src={props.src}
            />
        )
}