import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./Featured.scss"

export default function Featured() {
  return (
    <div className="featured">
        <img src="https://i.ibb.co/BTRWt24/Blue-Ridge.jpg" className="logo" alt="" />

        <div className="info">
            <img src="https://ntvb.tmsimg.com/assets/p23063500_b_h8_ad.jpg?w=1280&h=720" alt="" />
            <span className="desc">Wednesday Addams is expelled from her school after dumping live piranhas into the school's pool in retaliation for the boys' water polo team bullying her brother Pugsley.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more-info">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
