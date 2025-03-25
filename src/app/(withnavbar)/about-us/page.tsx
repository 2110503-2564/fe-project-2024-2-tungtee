'use client';

export default function AboutPage() {

    const team = [
        {
            id: "6733120021",
            name: "Noravit",
            surname: "Bunyutnoparat"
            
        },
        {
            id: "6733057121",
            name: "Nachapol",
            surname: "Suwintharakorn"
        },
        {
            id: "6733091421",
            name: "Thanatarn",
            surname: "Lueprasert"
        },
    ];

    return (
        <main className="flex flex-col items-center mt-[140px] min-h-screen px-4 py-8" style={{ backgroundColor: '#0C0C0C', color: 'white' }}>
            <h1 className="text-4xl font-bold mb-10">About This Website</h1>
            <p className="text-lg text-center mb-12">
                This website was created by a team of three students as part of our coursework.
            </p>
            <div className="flex flex-row gap-6 flex-wrap justify-center">
                {team.map((member, index) => (
                    <div key={index} className=" p-6 rounded-xl w-72 bg-[#1C1C1C] flex flex-col items-center gap-3">
                        <p>{member.id}</p>
                        <p>{member.name} {member.surname}</p>
                        <p>Faculty Of Engineering</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
