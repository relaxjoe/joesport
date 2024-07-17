function cardBody({project}) {

    return <>
    	<div class=" col-md-4 col-sm-6">
							<div class="single-explore-item">
								<div class="single-explore-img">
                                <img class="w-100" src={project.image} alt="project 1"/>
									<div class="single-explore-img-info">
										
									</div>
								</div>
								<div class="single-explore-txt bg-theme-1">
									<h3><a href={project.deployed}>{project.title}</a></h3>
									<p class="explore-rating-price">
									</p>
									<div class="explore-person">
										<div class="row">
											<div class="col-sm-2">
												<div class="explore-person-img">
													<a href={project.github}>
														 <img class="w-100 responsive-image" src="/images/github.png" alt="github"/> 
													</a>
												</div>
											</div>
											<div class="col-sm-10">
												<p>{project.description}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
    
    </>
}

export default cardBody;