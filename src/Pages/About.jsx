import TeamMember from "../Components/TeamMember";
import team from "../assets/team.json"

function About() {
    
    return (
        <div>
            <h2>This project was created by:</h2>
            {/* <div>
                {team.map((teammember) => {
                    return <TeamMember key={teammember.id} name={teammember.name} github={teammember.github} image={teammember.image} role={teammember.role} />;
                })}
            </div> */}
        </div>
    )
}

export default About