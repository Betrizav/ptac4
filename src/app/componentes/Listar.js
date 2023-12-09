import Link from "next/link";

export default async function users ({users}) {
    await new Promise((resolve) => setTimeout(resolve,3000));
    return(
        <div className="usuarios">
            {users?.map((user, index) =>
                <Link href={`/pages/alterar/${user.id}`}>
                    <div className="mb-2" key={index}>
                        <img
                        width={300}
                        height={300}
                        src=""
                        alt={user.name}
                        className=""
                       />
                       <h2 className=""> {user.name}</h2>
                    </div>
                </Link>
                
            )}
        </div>
    )
}