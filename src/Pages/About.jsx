import TeamMember from "../Components/TeamMember";
import team from "../assets/team.json"

function About() {
    
    return (
        <div>
            <h2 className='p-3 m-3 text-center'>This project was created by:</h2>
            <div className='row gx-0 m-4 d-flex justify-content-center'>
                {team.map((teammember) => {
                    return <TeamMember key={teammember.id} name={teammember.name} github={teammember.github} image={teammember.image} role={teammember.role} />;
                })}
            </div>
        </div>
    )
}

export default About