import projects from "../../assets/projects.json";
import CardBody from "../cardbody";
function Card () {
return <> 
	<section id="explore" class="explore">
			<div class="container">
				<div class="section-header">
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<h1>Portfolio</h1>
					<br></br>
					<h5>Showcase of my personal and project portfolio. Take a look!</h5>
					<br></br>
					<br></br>
				</div>
				<div class="explore-content">
					<div class="row">
                        {projects.map(project=>{

                        return<CardBody project={project}/>
                        })}
					</div>
				</div>
			</div>

		</section>

</>
}



export default Card;