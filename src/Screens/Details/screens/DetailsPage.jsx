import React, {useEffect, useState} from "react"
import education from "../../../Resource/education.json"
export default function DetailsPage(props){
    const [course, setCourse] = useState({});
    const [details, setDetails] = useState([])
    useEffect(() => {
        if(props.match.params.slug){
            education.course.map((e,index) => {
                if(e.slug === props.match.params.slug){
                    setCourse(e)
                    setDetails(Object.values(e.details))
                }
            })
        }
    }, [props])
    return (
        <div className="details">
            <h2 className="detail-title">{course.name}</h2>
            <img src={course.image} className="detail-image" />
            <div className="detail-desc">
                <div className="detail-desc-heading">Mô tả khóa học</div>
                <div class="deatail-desc-info"><span>Ngày khai giảng: </span>{course.startDate}</div>
                <div class="deatail-desc-info"><span>Trình độ: </span>{course.level}</div>
                <div class="deatail-desc-info"><span>Lịch học: </span>{course.schedule}</div>
                <div class="deatail-desc-info"><span>Thời gian:</span> {course.time}</div>
                <div class="deatail-desc-info"><span>Học phí</span> <label>{course.price}đ</label> </div>
                <button className="detail-btn">
                    Đặt chỗ ngay
                </button>
            </div>
            
            <div className="detail-info">
                <h2 className="detail-desc-heading">Giáo trình</h2>
                {
                    details.map((item,index) => (
                        <div key={index} className="detail-info-item">
                            Buổi {index+1} - {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

