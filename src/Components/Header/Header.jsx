import style from './style.css'
import { AiOutlineSetting,AiOutlineCloudDownload,AiFillLock, AiOutlineSearch, AiTwotoneHeart, AiOutlineInbox, AiOutlineInfoCircle} from "react-icons/ai";
const Header = () => {
 return (
    <header>
    <ul className="list-items">
        <li><a href='#'>Peliculas</a></li>
        <li><a href='#'>Series</a></li>
        <li><a href='#'>Anime</a></li>
        <li><a href='#'>Favoritos</a></li>
        <li><a href='#'>Género</a></li>
        <li><a href='#'>Todos</a></li>
        <li><a href='#'>ordenar por</a></li>
        <li><a href='#'>Popularidad</a></li>
    </ul>
    <ul className="list-icons">
        <li> <a href=""><AiFillLock></AiFillLock></a></li>
        <li> <a href=""><AiOutlineSearch></AiOutlineSearch></a> </li>
        <li> <a href=""><AiTwotoneHeart></AiTwotoneHeart></a> </li>
        <li> <a href=""><AiOutlineInbox></AiOutlineInbox></a></li>
        <li> <a href=""><AiOutlineInfoCircle></AiOutlineInfoCircle></a> </li>
        <li> <a href=""><AiOutlineCloudDownload></AiOutlineCloudDownload></a> </li>
        <li> <a href=""><AiOutlineSetting></AiOutlineSetting></a></li>
    </ul>
</header>
)};

export default Header;
