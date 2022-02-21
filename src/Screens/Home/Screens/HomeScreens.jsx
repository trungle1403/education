import education from "../../../Resource/education.json"
import Navigation from "../../../Components/Navigation"
import "../../../App.css";
import { useHistory } from "react-router-dom";
export default function HomeScreens(){
    <Navigation></Navigation>
    const history = useHistory();

    const hanldeClick = (slug) => {
        history.push(`/details/${slug}`)
    }
    const lists = education?.course?.map((element, index) => {
        return (
            <div className="col-md-6 col-sm-12 col-lg-4 mt-3">
                <div className="course-item">
                    <img className='course-image' onClick={() => {hanldeClick(element.slug)}} src={element.image} alt="" />
                    <div className="course-body">
                        <h3 className="course-name" onClick={() => {hanldeClick(element.slug)}}>{element.name}</h3>
                        <div class="course-info"><span>Ngày khai giảng: </span>{element.startDate}</div>
                        <div class="course-info"><span>Trình độ: </span>{element.level}</div>
                        <div class="course-info"><span>Lịch học: </span>{element.schedule}</div>
                        <div class="course-info"><span>Thời gian:</span> {element.time}</div>
                        <div class="course-info"><span>Dựng phim cơ bản:</span> {element.slug}</div>
                    </div>
                    <div className="course-bottom"> Giảm 15% học phí khi đăng ký trước 30/1/2022</div>
                </div>
            </div>
        )
    })
    return(
        <div className='container course-container'>
            <div className="row course-list">
                {lists}
            </div>
        </div>
    )
}