import { Link } from "react-router-dom";

export default function Sidebar(){

return(

<>


<ul className="list-unstyled">
    <li><Link    to={"/Products"}> get all products   </Link></li>
    <li><a   href="/#">get All Cateogries   </a></li>
</ul>

</>




);



}