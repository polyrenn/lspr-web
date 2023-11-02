import "./course.css";
import Footer from "../components/footer/Footer"
import Navigation from "../components/navigation/Navigation"
import {courses} from "./data";
import Course from "../components/course/Course";

const page = () => {
  return (
    <main id="Course">
        <Navigation/>
        <section className="sec-1">
            <p>Our Courses</p>
        </section>
        <section className="sec-2">
          <div className="container">
            <div className="categories">
              <p>Individual</p> 
              <p>Enterprise</p>
            </div>
            <div className="grid">
            {
              courses.map((course) =>(
                <Course
                  key={course.title}
                  title={course.title}
                  description={course.description}
                  oldPrice={course.oldprice}
                  newPrice={course.newprice}
                  length={course.length}
                />
              ))
            }
          </div>
          </div>
        </section>
        <Footer/>
    </main>
    )
}

export default page