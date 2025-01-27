import logoutIcon from "../assets/logout-icon.png";
import useManageUser from "../hooks/useManageUser";

interface MobileNavProps {
    toggleNewPostModal: (value: boolean) => void;
}

export default function MobileNav({ toggleNewPostModal }: MobileNavProps) {
    const { signUserOut } = useManageUser();

    return (
        <div className="mobile-nav__wrapper">
            <button className="mobile-nav__btn" onClick={() => toggleNewPostModal(true)}>
                Create New Post
            </button>
            <button className="mobile-nav__btn logout-btn" onClick={signUserOut}>
                <img className="mobile-nav__icon" src={logoutIcon} />
            </button>
        </div>
    );
}
