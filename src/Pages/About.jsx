import TeamMember from "../Components/TeamMember";
import team from "../assets/team.json"

function About() {

    return (
        <div className="page-container">
            <div className="page-content">
                <h2 className='p-3 m-3 pt-5 text-center'>This project was created by:</h2>
                <div className='row gx-0 m-4 d-flex justify-content-center'>
                    {team.map((teammember) => {
                        return <TeamMember key={teammember.id} name={teammember.name} github={teammember.github} image={teammember.image} role={teammember.role} favpet={teammember.favpet} />;
                    })}
                </div>
            </div>
        </div>
    )
}

export default About