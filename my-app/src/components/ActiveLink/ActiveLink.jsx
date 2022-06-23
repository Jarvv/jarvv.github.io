import { Link, useRoute  } from "wouter";
import styles from './ActiveLink.module.scss';

const ActiveLink = props => {
    const [isActive] = useRoute(props.href);
    return (
        <Link {...props}>
            <a className={isActive ? styles.active : ""}>{props.children}</a>
        </Link>
    );
};

export default ActiveLink;