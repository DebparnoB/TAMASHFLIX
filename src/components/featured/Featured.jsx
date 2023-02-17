import ShowInfo from "../ShowInfo/ShowInfo"
import "./Featured.scss"

let img1 = "https://assets.telegraphindia.com/telegraph/2022/Dec/1670420650_wednesday-jenna-ortega-2-1654540590.jpg";
let img2 = "https://media.pitchfork.com/photos/620e81cad8bc62857b465cc3/2:1/w_2560%2Cc_limit/Stranger-Things-Season-4.jpg";
let desc2 = "Will Byers is abducted by a creature from the Upside Down. His mother Joyce, the town's police chief Jim Hopper and a group of volunteers search for him.";
let desc1 = "Wednesday Addams is expelled from her school after dumping live piranhas into the school's pool in retaliation for the boys' water polo team bullying her brother";
export default function Featured() {
  return (
    <div className="featured">
        <div className="content">
            <ShowInfo url={img1} description={desc1} title="Wednesday"/>
            <ShowInfo url={img2} description={desc2} title="Stranger Things"/>
        </div>
    </div>
  )
}
