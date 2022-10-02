import '../Courses.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../assets/img/cam01_night_01.jpg"


export const Courses = () => {
    return (
        <div>


            <div class="container">
                <div class="col">
                    <div class="col-md-12">
                    <a href='https://archviz-render.thinkific.com/courses/aprende-a-crear-renders-profesionales-de-arquitectura-para-la-universidad-y-concursos-internacionales' target="_blank">
                        <div class="profile-card-2">
                        
                            <img src={image1} alt="image1" class="img img-responsive"></ img>
                            <div class="profile-name">APRENDE A CREAR RENDERS PROFESIONALES DE ARQUITECTURA PARA LA UNIVERSIDAD Y CONCURSOS INTERNACIONALES</div>
                            <div class="profile-username">A un paso de descubrir tu potencial, empieza ahora.</div>
                            <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
                        </div>
                        </a>

                    </div>




                </div>
            </div>




        </div >



    )
}
