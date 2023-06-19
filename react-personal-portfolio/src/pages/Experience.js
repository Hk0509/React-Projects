import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kanha Makhan Public School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mathura, Uattar Pradesh
          </h4>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kanha Makhan Public School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mathura, Uattar Pradesh
          </h4>

          {/* <h4 className="vertical-timeline-element-subtitle">
            Higher Secondary
          </h4> */}

          <p>Senior Secondary</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Vellore Institute of Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bhopal, Madhya Pradesh
          </h4>
          <p>B.Tech, Computer Science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
